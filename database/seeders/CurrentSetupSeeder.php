<?php

namespace Database\Seeders;

use App\Models\CurrentSetup;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CurrentSetupSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        CurrentSetup::insert([
            ['name' => 'Tub Only'],
            ['name' => 'Shower Only'],
            ['name' => 'Tub & Shower'],
            ['name' => 'Full Bathroom'],
            ['name' => 'Full Bathroom + Vanity'],
        ]);
    }
}
