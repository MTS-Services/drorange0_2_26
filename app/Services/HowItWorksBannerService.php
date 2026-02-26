<?php

namespace App\Services;

use App\Models\HowItWorksBanner;

class HowItWorksBannerService
{
    public function __construct(protected HowItWorksBanner $model)
    {
    }

    public function getFirst(): ?HowItWorksBanner
    {
        return $this->model->first();
    }

    public function update(array $data): HowItWorksBanner
    {
        $banner = $this->model->first();

        if ($banner) {
            $banner->update($data);

            return $banner;
        }

        return $this->model->create($data);
    }
}
