<?php

namespace Database\Seeders;

use App\Models\AboutBanner;
use Illuminate\Database\Seeder;

class AboutBannerSeeder extends Seeder
{
    public function run(): void
    {
        AboutBanner::query()->delete();

        AboutBanner::create([
            'title' => 'Crafting spaces that feel like home',
            'subtitle' => 'Tailored remodeling guided by your vision and lifestyle.',
            'additional_info' => 'From concept to completion, our team delivers detail-driven design and construction you can trust.',
        ]);
    }
}
