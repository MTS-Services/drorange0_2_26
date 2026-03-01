<?php

namespace Database\Seeders;

use App\Models\OtpVerification;
use Illuminate\Database\Seeder;

class OtpVerificationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        OtpVerification::insert([
            [
                'estimate_id' => 1, // EST-2026-001
                'otp' => '123456',
                'expire_in' => 5,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'estimate_id' => 2, // EST-2026-002
                'otp' => '234567',
                'expire_in' => 5,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'estimate_id' => 3, // EST-2026-003
                'otp' => '345678',
                'expire_in' => 5,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'estimate_id' => 4, // EST-2026-004
                'otp' => '456789',
                'expire_in' => 5,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'estimate_id' => 5, // EST-2026-005
                'otp' => '567890',
                'expire_in' => 5,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
