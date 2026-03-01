<?php

namespace App\Services;

use App\Models\CurrentSetup;

class CurrentSetupService
{
    public function __construct(public CurrentSetup $model)
    {
    }

    public function getQuery()
    {
        return $this->model->query();
    }

    public function find(int $id, string $column = 'id')
    {
        return $this->model->where($column, $id);
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
        return $this->model->latest()->get();
    }

    public function getById(int $id)
    {
        return $this->model->find($id);
    }

    public function getPaginated(int $perPage = 10)
    {
        return $this->model->latest()->paginate($perPage);
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
