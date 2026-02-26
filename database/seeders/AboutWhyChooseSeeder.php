<?php

namespace Database\Seeders;

use App\Models\AboutWhyChoose;
use Illuminate\Database\Seeder;

class AboutWhyChooseSeeder extends Seeder
{
    public function run(): void
    {
        AboutWhyChoose::query()->delete();

        AboutWhyChoose::insert([
            [
                'title' => 'Licensed & insured team',
                'subtitle' => 'Certified professionals who prioritize safety and compliance.',
                'icon' => 'default/images/icon/certified.png',
            ],
            [
                'title' => 'Transparent estimates',
                'subtitle' => 'Clear scopes, options, and pricing before any work begins.',
                'icon' => 'default/images/icon/estimate.png',
            ],
            [
                'title' => 'On-time delivery',
                'subtitle' => 'Schedules you can trust with proactive communication.',
                'icon' => 'default/images/icon/ontime.png',
            ],
        ]);
    }
}
