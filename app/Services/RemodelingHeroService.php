<?php

namespace App\Services;

use App\Models\RemodelingHero;

class RemodelingHeroService
{
    public function __construct(protected RemodelingHero $model)
    {
    }

    public function first(): ?RemodelingHero
    {
        return $this->model::first();
    }

    public function find($id): ?RemodelingHero
    {
        return $this->model->find($id);
    }

    public function update(RemodelingHero $hero, array $data): bool
    {
        return $hero->update($data);
    }
}
