<?php

namespace App\Services;

use App\EstimateStatus;
use App\Models\Estimate;
use App\Models\EstimateStatus as EstimateStatusModel;

class EstimateService
{
    public function __construct(public Estimate $model)
    {
    }

    public function getQuery()
    {
        return $this->model->with([
            'serviceType',
            'option',
            'diemension',
            'currentSetup',
            'latestStatus',
            'contactInformation',
            'otpVerification',
            'estimateImages'
        ]);
    }

    public function find(int $id, string $column = 'id')
    {
        return $this->getQuery()->where($column, $id);
    }

    public function create(array $data)
    {
        return $this->model->create($data);
    }

    public function update(int $id, array $data)
    {
        return $this->model->where('id', $id)->update($data);
    }

    public function delete(int $id)
    {
        return $this->model->where('id', $id)->delete();
    }

    public function getAll()
    {
        return $this->getQuery()->latest()->get();
    }

    public function getById(int $id)
    {
        return $this->getQuery()->find($id);
    }

    public function getPaginated(int $perPage = 10)
    {
        return $this->getQuery()->latest()->paginate($perPage);
    }

    public function updateStatus(int $id, EstimateStatus $status, ?string $message = null): bool
    {
        $estimate = $this->model->find($id);
        
        if (!$estimate) {
            return false;
        }

        // Update estimate status
        $estimate->update(['estimate_status' => $status->value]);

        // Create status history record
        EstimateStatusModel::create([
            'estimate_id' => $id,
            'estimate_status' => $status->value,
            'message' => $message,
        ]);

        return true;
    }

    public function getStatusHistory(int $id)
    {
        return EstimateStatusModel::where('estimate_id', $id)
            ->orderBy('created_at', 'desc')
            ->get();
    }
}
