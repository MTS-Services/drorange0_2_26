<?php

namespace Database\Seeders;

use App\Models\HomeService;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class HomeServiceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        HomeService::insert([
            [
                'title' => 'Complete Bathroom Remodeling',
                'subtitle' => 'No bathroom renovation too big or small from start to completion.',
                'icon' => 'default/1.png',
            ],
            [
                'title' => 'Tub to Shower Conversion',
                'subtitle' => 'Transform your old tub into a custom, modern shower.',
                'icon' => 'default/2.png',
            ],  
            [
                'title' => 'Vanity & Fixture Upgrades',
                'subtitle' => 'New vanities, toilets, sinks, and fixtures to match your style.',
                'icon' => 'default/3.png',
            ],
            [
                'title' => 'Tile & Flooring Installation',
                'subtitle' => 'Specialty tile work and flooring with expert installation systems.',
                'icon' => 'default/4.png',
            ]
        ]);
    }
}
