<?php

namespace Database\Seeders;

use App\Models\AboutInformation;
use Illuminate\Database\Seeder;

class AboutInformationSeeder extends Seeder
{
    public function run(): void
    {
        AboutInformation::query()->delete();

        AboutInformation::create([
            'title' => 'About DrOrange: Trusted Remodeling Experts',
            'content' => '<p>For over a decade, our team has partnered with homeowners to design and deliver spaces that blend function, comfort, and style. We listen first, plan meticulously, and build with precision.</p><p>From kitchens to full-home renovations, we manage every detail so you enjoy a smooth experience and a stunning result.</p>',
        ]);
    }
}
