<?php

namespace App\Services;

use App\Models\Option;

class OptionService
{
    public function __construct(public Option $model)
    {
    }

    public function getQuery()
    {
        return $this->model->with('serviceType');
    }

    public function find(int $id, string $column = 'id')
    {
        return $this->model->with('serviceType')->where($column, $id);
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
        return $this->model->with('serviceType')->latest()->get();
    }

    public function getById(int $id)
    {
        return $this->model->with('serviceType')->find($id);
    }

    public function getPaginated(int $perPage = 10)
    {
        return $this->model->with('serviceType')->latest()->paginate($perPage);
    }

    public function getByServiceType(int $serviceTypeId)
    {
        return $this->model->where('service_type_id', $serviceTypeId)->with('serviceType')->get();
    }

    public function updateOrCreate(array $findData, array $updateData)
    {
        return $this->model->updateOrCreate($findData, $updateData);
    }

    public function checkNameExists(string $name, ?int $excludeId = null): bool
    {
        $query = $this->model->where('name', $name);
        
        if ($excludeId) {
            $query->where('id', '!=', $excludeId);
        }
        
        return $query->exists();
    }
}
