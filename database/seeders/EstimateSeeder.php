<?php

namespace Database\Seeders;

use App\Models\Estimate;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class EstimateSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Estimate::insert([
            [
                'estimate_id' => 'EST-2026-001',
                'service_type_id' => 1, // Bathroom Remodeling
                'option_id' => 1, // New Toilet
                'diemension_id' => 1, // Small (5x8 Or Smaller)
                'current_setup_id' => 1, // Tub Only
                'otp_verification_at' => now(),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'estimate_id' => 'EST-2026-002',
                'service_type_id' => 2, // Shower Installation
                'option_id' => 2, // New Flooring
                'diemension_id' => 2, // Medium (5x8 to 6x8)
                'current_setup_id' => 2, // Shower Only
                'otp_verification_at' => now(),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'estimate_id' => 'EST-2026-003',
                'service_type_id' => 3, // Tub Replacement
                'option_id' => 3, // Convert Tub to Shower
                'diemension_id' => 3, // Large (6x8 to 8x8)
                'current_setup_id' => 3, // Tub & Shower
                'otp_verification_at' => now(),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'estimate_id' => 'EST-2026-004',
                'service_type_id' => 4, // Vanity Upgrade
                'option_id' => 4, // Install New Tub or Shower
                'diemension_id' => 4, // Large (8x8 to Larger)
                'current_setup_id' => 4, // Full Bathroom
                'otp_verification_at' => now(),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'estimate_id' => 'EST-2026-005',
                'service_type_id' => 5, // Flooring Only
                'option_id' => 5, // Install Tile
                'diemension_id' => 1, // Small (5x8 Or Smaller)
                'current_setup_id' => 5, // Full Bathroom + Vanity
                'otp_verification_at' => now(),
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
