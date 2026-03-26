<?php

namespace Database\Seeders;

use App\Models\RemodelingWhatInclude;
use Illuminate\Database\Seeder;

class RemodelingWhatIncludeSeeder extends Seeder
{
    public function run(): void
    {
        RemodelingWhatInclude::insert([
            [
                'title' => 'Design Consultation',
                'subtitle' => 'Work with our experts to plan your perfect bathroom.',
                'icon' => 'default/images/icon/design.png',
            ],
            [
                'title' => 'Quality Materials',
                'subtitle' => 'Choose from premium fixtures, tiles, and finishes.',
                'icon' => 'default/images/icon/materials.png',
            ],
            [
                'title' => 'Expert Installation',
                'subtitle' => 'Licensed professionals handle every detail.',
                'icon' => 'default/images/icon/permit.png',
            ],
            [
                'title' => 'Project Management',
                'subtitle' => 'Track progress online and stay informed.',
                'icon' => 'default/images/icon/management.png',
            ],
            [
                'title' => 'Clean-Up Service',
                'subtitle' => 'We leave your home clean and ready to enjoy.',
                'icon' => 'default/images/icon/craft.png',
            ],
            [
                'title' => '10-Year Warranty',
                'subtitle' => 'Peace of mind with our comprehensive warranty.',
                'icon' => 'default/images/icon/cleanup.png',
            ],
        ]);
    }
}
