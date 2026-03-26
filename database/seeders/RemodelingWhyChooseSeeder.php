<?php

namespace Database\Seeders;

use App\Models\RemodelingWhyChoose;
use Illuminate\Database\Seeder;

class RemodelingWhyChooseSeeder extends Seeder
{
    public function run(): void
    {
        RemodelingWhyChoose::insert([
            [
                'title' => 'Licensed & Insured',
                'subtitle' => 'Fully licensed contractors with comprehensive insurance for your protection.',
                'icon' => 'default/Vector (6).png',
            ],
            [
                'title' => 'Fast Turnaround',
                'subtitle' => 'Most bathroom remodels completed in 5-10 days, not weeks.',
                'icon' => 'default/Icon (3).png',
            ],
            [
                'title' => '10-Year Warranty',
                'subtitle' => 'Industry-leading warranty on all workmanship and materials.',
                'icon' => 'default/Icon (4).png',
            ],
            [
                'title' => 'On-Time Delivery',
                'subtitle' => 'Schedules you can rely on from start to finish.',
                'icon' => 'default/images/icon/timeline.png',
            ],
            [
                'title' => 'Premium Materials',
                'subtitle' => 'Curated fixtures and finishes that last.',
                'icon' => 'default/images/icon/materials.png',
            ],
            [
                'title' => 'Dedicated Support',
                'subtitle' => 'Responsive communication at every milestone.',
                'icon' => 'default/images/icon/support.png',
            ],
        ]);
    }
}
