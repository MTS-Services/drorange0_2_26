<?php

namespace App\Services;

use App\EstimateStatus;
use App\Models\ContactInformation;
use App\Models\Estimate;
use App\Models\EstimateImage;
use App\Models\EstimateStatus as EstimateStatusModel;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class EstimateService
{
    public function __construct(public Estimate $model) {}

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
        // Create estimate record
        $estimate = [
            'estimate_id' => strtoupper(Str::random(6) . time()),
            'service_type_id' => $data['service_type_id'],
            'option_ids' => json_encode($data['options']),
            'bathroom_size' => $data['bathroom_size'],
            'current_setup_id' => $data['current_setup'],
        ];

        $estimate = $this->model->create($estimate);

        // Create contact information record
        $contactInformation = [
            'first_name' => $data['first_name'],
            'last_name' => $data['last_name'],
            'email' => $data['email'],
            'phone' => $data['phone'],
            'address' => $data['address'],
            'city' => $data['city'],
            'zip' => $data['zip'],
            'estimate_id' => $estimate->id,
        ];

        ContactInformation::create($contactInformation);

        // Process and store files
        $files = $data['files'] ?? [];
        $images = [];

        foreach ($files as $file) {

            // file already like: temp/filename.png
            $source = $file;

            if (Storage::disk('public')->exists($source)) {

                $extension = pathinfo($file, PATHINFO_EXTENSION);
                $newName = time() . '_' . Str::random(8) . '.' . $extension;
                $destination = 'estimates/' . $newName;

                Storage::disk('public')->move($source, $destination);


                $images[] = [
                    'estimate_id' => $estimate->id,
                    'image' => $destination
                ];
            } else {
                Log::error("File not found: " . $source);
            }
        }

        // Store images if any
        if (!empty($images)) {
            EstimateImage::insert($images);
        }
        session()->forget('estimate_data');
        // Mobile PHone Notification will send Here

        Log::info("Mobile Phone Notification sent for estimate: " . $estimate->id . " with phone: " . $estimate->contactInformation->phone);
       
        return $estimate;
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
