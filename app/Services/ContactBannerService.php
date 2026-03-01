<?php

namespace App\Services;

use App\Models\ContactBanner;

class ContactBannerService
{
    public function __construct(protected ContactBanner $model)
    {
    }

    public function getFirst(): ?ContactBanner
    {
        return $this->model->first();
    }

    public function update(array $data): ContactBanner
    {
        $banner = $this->model->first();

        if ($banner) {
            $banner->update($data);

            return $banner;
        }

        return $this->model->create($data);
    }
}
