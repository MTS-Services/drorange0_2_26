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
                'subtitle' => 'Fully licensed teams with comprehensive coverage.',
                'icon' => 'default/images/icon/licensed.png',
            ],
            [
                'title' => 'Transparent Pricing',
                'subtitle' => 'Clear estimates with no surprise add-ons.',
                'icon' => 'default/images/icon/pricing.png',
            ],
            [
                'title' => 'Quality Craftsmanship',
                'subtitle' => 'Skilled trades delivering precise finishes.',
                'icon' => 'default/images/icon/craft.png',
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
