<?php

namespace Database\Seeders;

use App\Models\HowItWorksBanner;
use Illuminate\Database\Seeder;

class HowItWorksBannerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        HowItWorksBanner::create([
            'title' => 'How It Works',
            'subtitle' => 'Our streamlined process makes bathroom remodeling simple, transparent, and stress-free. From estimate to completion in just a few easy steps.',
            'additional_info' => '',
        ]);
    }
}
