<?php

namespace App\Services;

use App\Models\AboutBanner;

class AboutBannerService
{
    public function __construct(public AboutBanner $model)
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

    public function getFirst(): ?AboutBanner
    {
        return $this->model->first();
    }

    public function updateOrCreateFirst(array $data): AboutBanner
    {
        $banner = $this->model->first();

        if ($banner) {
            $banner->update($data);

            return $banner;
        }

        return $this->model->create($data);
    }
}
