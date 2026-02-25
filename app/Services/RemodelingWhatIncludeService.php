<?php

namespace App\Services;

use App\Models\RemodelingWhatInclude;

class RemodelingWhatIncludeService
{
    public function __construct(public RemodelingWhatInclude $model)
    {
    }

    public function latest(int $limit = 6)
    {
        return $this->model->latest()->take($limit)->get();
    }

    public function getQuery()
    {
        return $this->model->query();
    }

    public function find($id, $column = 'id')
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
}
