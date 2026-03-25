<?php

namespace Database\Seeders;

use App\Models\HomePageHero;
use Illuminate\Database\Seeder;

class HomePageHeroSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        HomePageHero::create([
            'title' => 'Transform Your Bathroom in Days, Not Weeks',
            'subtitle'=> 'Get a free estimate in 24 hours. Submit photos, choose your options, and track your project online.',
            'button1_text'=> 'Get Your Free Estimate',
            'button2_text'=> 'How It Works',
            'button1_url'=> route('how-it-work'),
            'button2_url'=> route('free-estimate'),
            'background_image'=> 'default/Get-Your-Free-Estimate.jpg',
            'aditional_information'=> '<span className="flex items-center justify-center w-5 h-5 rounded-full ring-2 ring-white/60 shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                </span>
                <span className="flex items-center gap-1.5">Licensed &amp; Insured</span>
                <span className="flex items-center justify-center w-5 h-5 rounded-full ring-2 ring-white/60 shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                </span>
                <span className="flex items-center gap-1.5">Free Estimates</span>
        
                <span className="flex items-center justify-center w-5 h-5 rounded-full ring-2 ring-white/60 shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                </span>
                <span className="flex items-center gap-1.5">Quick Turnaround</span>',

        ]);
    }
}
