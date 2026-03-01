<?php

namespace App\Services;

use App\Models\ServiceType;

class ServiceTypeService
{
    public function __construct(public ServiceType $model)
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

    public function findBySlug(string $slug)
    {
        return $this->model->where('slug', $slug)->first();
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

    public function checkSlugExists(string $slug, ?int $excludeId = null): bool
    {
        $query = $this->model->where('slug', $slug);
        
        if ($excludeId) {
            $query->where('id', '!=', $excludeId);
        }
        
        return $query->exists();
    }

    public function checkNameExists(string $name, ?int $excludeId = null): bool
    {
        $query = $this->model->where('name', $name);
        
        if ($excludeId) {
            $query->where('id', '!=', $excludeId);
        }
        
        return $query->exists();
    }

    public function createUniqueSlug(string $name, ?int $excludeId = null): string
    {
        $slug = strtolower(str_replace(' ', '-', $name));
        $originalSlug = $slug;
        $counter = 1;

        while ($this->checkSlugExists($slug, $excludeId)) {
            $slug = $originalSlug . '-' . $counter;
            $counter++;
        }

        return $slug;
    }
}
