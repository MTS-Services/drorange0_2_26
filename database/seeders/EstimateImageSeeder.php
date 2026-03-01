<?php

namespace Database\Seeders;

use App\Models\EstimateImage;
use Illuminate\Database\Seeder;

class EstimateImageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        EstimateImage::insert([
            [
                'estimate_id' => 1, // EST-2026-001
                'image' => 'estimates/bathroom_before_1.jpg',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'estimate_id' => 1, // EST-2026-001
                'image' => 'estimates/bathroom_after_1.jpg',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'estimate_id' => 2, // EST-2026-002
                'image' => 'estimates/shower_design_2.jpg',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'estimate_id' => 3, // EST-2026-003
                'image' => 'estimates/tub_replacement_3.jpg',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'estimate_id' => 4, // EST-2026-004
                'image' => 'estimates/vanity_upgrade_4.jpg',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'estimate_id' => 5, // EST-2026-005
                'image' => 'estimates/flooring_installation_5.jpg',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
