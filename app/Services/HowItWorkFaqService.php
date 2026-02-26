<?php

namespace App\Services;

use App\Models\HowItWorkFaq;

class HowItWorkFaqService
{
    public function __construct(public HowItWorkFaq $model)
    {
    }

    public function getAll()
    {
        return $this->model->latest()->get();
    }

    public function latest(int $limit = 6)
    {
        return $this->model->latest()->take($limit)->get();
    }

    public function getQuery()
    {
        return $this->model->query();
    }

    public function find(int $id, string $column = 'id')
    {
        return $this->model->where($column, $id);
    }

    public function getById(int $id)
    {
        return $this->model->findOrFail($id);
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
