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
                'subtitle' => 'Personalized design guidance to shape your remodel.',
                'icon' => 'default/images/icon/design.png',
            ],
            [
                'title' => 'Material Selection',
                'subtitle' => 'Curated finishes sourced for durability and style.',
                'icon' => 'default/images/icon/materials.png',
            ],
            [
                'title' => 'Permits & Approvals',
                'subtitle' => 'We manage permits to keep your project compliant.',
                'icon' => 'default/images/icon/permit.png',
            ],
            [
                'title' => 'Project Management',
                'subtitle' => 'Coordinated scheduling with progress tracking.',
                'icon' => 'default/images/icon/management.png',
            ],
            [
                'title' => 'Quality Craftsmanship',
                'subtitle' => 'Licensed crews delivering precise installation.',
                'icon' => 'default/images/icon/craft.png',
            ],
            [
                'title' => 'Cleanup & Handover',
                'subtitle' => 'Thorough cleanup with a final walkthrough.',
                'icon' => 'default/images/icon/cleanup.png',
            ],
        ]);
    }
}
