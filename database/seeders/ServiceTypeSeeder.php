<?php

namespace Database\Seeders;

use App\Models\ServiceType;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ServiceTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        ServiceType::insert([
            [
                'name' => 'Bathroom Remodeling',
                'slug' => 'bathroom-remodeling',
                'price' => 100.00,
            ],
            [
                'name' => 'Shower Installation',
                'slug' => 'shower-installation',
                'price' => 100.00,
            ],
            [
                'name' => 'Tub Replacement',
                'slug' => 'tub-replacement',
                'price' => 100.00,
            ],
            [
                'name' => 'Vanity Upgrade',
                'slug' => 'vanity-upgrade',
                'price' => 100.00,
            ],
            [
                'name' => 'Flooring Only',
                'slug' => 'flooring-only',
                'price' => 100.00,
            ]
        ]);
    }
}
