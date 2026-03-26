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
            ['title' => 'Columbus, OH'],
            ['title' => 'Cleveland, OH'],
            ['title' => 'Cincinnati, OH'],
            ['title' => 'Akron, OH'],
            ['title' => 'Dayton, OH'],
            ['title' => 'Toledo, OH'],
            ['title' => 'And surrounding areas'],
        ]);
    }
}
