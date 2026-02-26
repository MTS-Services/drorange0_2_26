<?php

namespace App\Services;

use App\Models\AboutInformation;

class AboutInformationService
{
    public function __construct(public AboutInformation $model)
    {
    }

    public function getFirst(): ?AboutInformation
    {
        return $this->model->first();
    }

    public function updateOrCreate(array $data): AboutInformation
    {
        $info = $this->model->first();

        if ($info) {
            $info->update($data);
            return $info;
        }

        return $this->model->create($data);
    }
}
