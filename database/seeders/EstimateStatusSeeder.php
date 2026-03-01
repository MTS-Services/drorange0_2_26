<?php

namespace Database\Seeders;

use App\Models\EstimateStatus;
use Illuminate\Database\Seeder;

class EstimateStatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        EstimateStatus::insert([
            [
                'estimate_id' => 1, // EST-2026-001
                'estimate_status' => 'pending',
                'message' => 'Initial estimate submission',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'estimate_id' => 2, // EST-2026-002
                'estimate_status' => 'pending',
                'message' => 'Initial estimate submission',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'estimate_id' => 3, // EST-2026-003
                'estimate_status' => 'review',
                'message' => 'Estimate under review by admin',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'estimate_id' => 4, // EST-2026-004
                'estimate_status' => 'estimate',
                'message' => 'Final estimate provided to customer',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'estimate_id' => 5, // EST-2026-005
                'estimate_status' => 'pending',
                'message' => 'Initial estimate submission',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
