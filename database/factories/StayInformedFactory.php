<?php

namespace Database\Factories;

use App\Models\StayInformed;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<StayInformed>
 */
class StayInformedFactory extends Factory
{
    protected $model = StayInformed::class;

    public function definition(): array
    {
        return [
            'title' => $this->faker->sentence(3),
            'subtitle' => $this->faker->sentence(10),
            'icon' => null,
        ];
    }
}
