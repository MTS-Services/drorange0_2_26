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
            'content' => '<p>For over a decade, our team has partnered with homeowners to design and deliver spaces that blend function, comfort, and style. We listen first, plan meticulously, and build with precision.</p><p>From kitchens to full-home renovations, we manage every detail so you enjoy a smooth experience and a stunning result.</p>
            <br>
            <br>
            <p>That\'s why we developed our streamlined online estimate system. By combining modern technology with traditional craftsmanship, we\'ve created a better way to remodel bathrooms. You can now request an estimate from the comfort of your home, track your project online, and enjoy transparent communication throughout the entire process.</p>
            <br>
            <br>
            <p>Over the past 15 years, we\'ve completed more than 500 bathroom remodels, earning a reputation for quality work, fair pricing, and exceptional customer service. Our team of licensed professionals treats every bathroom as if it were their own, ensuring the highest standards of workmanship on every project.</p>
            ',
        ]);
    }
}
