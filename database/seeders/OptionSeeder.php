<?php

namespace Database\Seeders;

use App\Models\Option;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class OptionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Option::insert([
            [
                'name' => 'New Toilet',
                'description' => 'Install a new modern, water-efficient toilet',
                'service_type_id' => 1
            ],
            [
                'name' => "New Flooring",
                'description' => 'Replace bathroom flooring with tile, vinyl, or your choice of material',
                'service_type_id' => 5, 
            ],
            [
                'name'=> 'Convert Tub to Shower',
                'description' => 'Remove existing tub and install a walk-in shower',
                'service_type_id' => 3,
            ],
            [
                'name' => 'Install New Tub or Shower',
                'description' => 'Replace your existing tub or shower with a new unit',
                'service_type_id' => 3,

            ],[
                'name' => 'Install Tile',
                'description' => 'Tile installation for walls, shower, or backsplash',
                'service_type_id' => 5,
            ],
            [
                'name' => 'Install Wall Panels',
                'description' => 'Waterproof wall panels as an alternative to tile',
                'service_type_id' => 5,
            ],
            [
                'name' => 'New Vanity',
                'description' => 'Replace your existing vanity with a new one, including sink and faucet',
                'service_type_id' => 4
            ],
            [
                'name' => 'Install Faucet',
                'description' => 'Install a new faucet with a matching handle',
                'service_type_id' => 4,
            ],
        ]);
    }
}
