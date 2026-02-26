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
            'title' => 'See How Our Process Works',
            'subtitle' => 'From consultation to completion, transparency at every step.',
            'additional_info' => 'Schedule your free consultation today and watch your project move forward with clear timelines and updates.',
        ]);
    }
}
