<?php

namespace Database\Seeders;

use App\Models\RemodelingOption;
use Illuminate\Database\Seeder;

class RemodelingOptionSeeder extends Seeder
{
    public function run(): void
    {
        RemodelingOption::insert([
            [
                'title' => 'Layout Planning',
                'subtitle' => 'Smart space planning tailored to your remodel goals.',
                'icon' => 'default/images/icon/layout.png',
            ],
            [
                'title' => 'Material Guidance',
                'subtitle' => 'Durable finishes selected for your lifestyle and budget.',
                'icon' => 'default/images/icon/material-guidance.png',
            ],
            [
                'title' => 'Permits & Inspections',
                'subtitle' => 'We handle approvals and schedule inspections.',
                'icon' => 'default/images/icon/permits.png',
            ],
            [
                'title' => 'Skilled Craftsmanship',
                'subtitle' => 'Licensed trades executing with precision and care.',
                'icon' => 'default/images/icon/craftsmanship.png',
            ],
            [
                'title' => 'Project Tracking',
                'subtitle' => 'Transparent updates and milestone check-ins.',
                'icon' => 'default/images/icon/tracking.png',
            ],
            [
                'title' => 'Final Walkthrough',
                'subtitle' => 'Detailed punch-list and handover so everything is perfect.',
                'icon' => 'default/images/icon/walkthrough.png',
            ],
        ]);
    }
}
