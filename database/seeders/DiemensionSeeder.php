<?php

namespace Database\Seeders;

use App\Models\Diemension;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DiemensionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Diemension::insert([
            [
                'name' => 'small(5x8 Or Smaller)',
                'service_type_id' => 1,
            ],
            [
                'name' => 'Medium(5x8 to 6x8)',
                'service_type_id' => 1,
            ],
            [
                'name' => 'Large(6x8 to 8x8)',
                'service_type_id' => 1,
            ],
            [
                'name' => 'Large(8x8 to Larger)',
                'service_type_id' => 1,
            ]
        ]);
    }
}
