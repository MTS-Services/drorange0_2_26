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
                'subtitle' => 'Full bathroom renovations from floor to ceiling with expert craftsmanship.',
                'icon' => 'default/1.png',
            ],
            [
                'title' => 'Tub to Shower Conversion',
                'subtitle' => 'Transform your old tub into a modern, accessible shower.',
                'icon' => 'default/2.png',
            ],  
            [
                'title' => 'Vanity & Fixture Upgrades',
                'subtitle' => 'New vanities, toilets, sinks, and fixtures to match your style.',
                'icon' => 'default/3.png',
            ],
            [
                'title' => 'Tile & Flooring Installation',
                'subtitle' => 'Beautiful tile work and durable flooring options.',
                'icon' => 'default/4.png',
            ]
        ]);
    }
}
