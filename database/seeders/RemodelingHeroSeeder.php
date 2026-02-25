<?php

namespace Database\Seeders;

use App\Models\RemodelingHero;
use Illuminate\Database\Seeder;

class RemodelingHeroSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        RemodelingHero::create([
            'title' => 'Refresh Your Space with a Remodeling That Fits You',
            'subtitle' => 'Design, pricing, and project tracking handled online so you can remodel with confidence.',
            'button1_text' => 'Book a Remodeling Consult',
            'button1_url' => 'https://www.drorange.com/remodeling',
            'button2_text' => 'See How It Works',
            'button2_url' => 'https://www.drorange.com/remodeling/process',
            'background_image' => 'images/ImageWithFallback.png',
            'aditional_information' => '<span class="flex items-center justify-center w-5 h-5 rounded-full ring-2 ring-white/60 shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                </span>
                <span class="flex items-center gap-1.5">Licensed &amp; Insured</span>
                <span class="flex items-center justify-center w-5 h-5 rounded-full ring-2 ring-white/60 shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                </span>
                <span class="flex items-center gap-1.5">Personalized Design</span>
                <span class="flex items-center justify-center w-5 h-5 rounded-full ring-2 ring-white/60 shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                </span>
                <span class="flex items-center gap-1.5">Transparent Pricing</span>',
        ]);
    }
}
