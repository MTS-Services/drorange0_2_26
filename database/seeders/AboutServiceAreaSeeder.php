<?php

namespace Database\Seeders;

use App\Models\AboutServiceArea;
use Illuminate\Database\Seeder;

class AboutServiceAreaSeeder extends Seeder
{
    public function run(): void
    {
        AboutServiceArea::query()->delete();

        AboutServiceArea::insert([
            ['title' => 'Los Angeles Metro'],
            ['title' => 'Orange County'],
            ['title' => 'San Diego County'],
        ]);
    }
}
