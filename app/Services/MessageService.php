<?php

namespace App\Services;

use App\Models\Contact;

class MessageService
{
    public function __construct(public Contact $model)
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

    public function storeMessage(array $data)
    {
        return $this->model->create([
            'name' => $data['name'],
            'email' => $data['email'],
            'phone' => $data['phone'] ?? null,
            'subject' => $data['subject'] ?? null,
            'message' => $data['message'],
            'seen' => false,
        ]);
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
