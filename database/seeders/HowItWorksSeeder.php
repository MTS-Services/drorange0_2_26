<?php

namespace Database\Seeders;

use App\Models\HowItWorks;
use Illuminate\Database\Seeder;

class HowItWorksSeeder extends Seeder
{
    public function run(): void
    {
        HowItWorks::insert([
            [
                'title' => 'Submit Your Request Online',
                'subtitle' => 'Fill out our simple online form with your bathroom details. Upload 3-10 photos showing your current bathroom from multiple angles. Select the services and upgrades you want—new vanity, toilet, flooring, tub-to-shower conversion, and more.',
                'time' => '5 minutes',
                'icon' => 'default/Icon (5).png',
            ],
            [
                'title' => 'Choose Your Options',
                'subtitle' => 'Select from our comprehensive list of services including new fixtures, tile work, flooring, and conversions. Add any special requests or details about your vision. Tell us about your bathroom size and current setup.',
                'time' => '5 minutes',
                'icon' => 'default/Icon (6).png',
            ],
            [
                'title' => 'Verify Your Mobile Number',
                'subtitle' => 'We send a quick verification code to your phone to confirm you\'re a real person (not a bot). This ensures we can reach you with your estimate and updates.',
                'time' => '1 minutes',
                'icon' => 'default/Icon (7).png',
            ],
            [
                'title' => 'Receive Your Estimate',
                'subtitle' => 'Within 24 hours, our team reviews your photos and selections. You\'ll receive a detailed estimate via SMS with pricing breakdown and project timeline. We\'ll also send a confirmation email with all the details.',
                'time' => ' Within 24 hours',
                'icon' => 'default/Icon (8).png',
            ],
            [
                'title' => 'Review & Approve',
                'subtitle' => 'Take your time to review the estimate. Ask questions or request adjustments—we\'re here to help. When you\'re ready, simply approve the estimate online or via text.',
                'time' => 'Your timeline',
                'icon' => 'default/Icon (9).png',
            ],
            [
                'title' => 'Schedule Your Project',
                'subtitle' => 'Once approved, we\'ll contact you to schedule a convenient start date. Most bathroom remodels are completed in 5-10 days. Track your project status online anytime using your order ID.',
                'time' => '2-3 days',
                'icon' => 'default/Icon (10).png',
            ],
            [
                'title' => 'We Complete Your Bathroom',
                'subtitle' => 'Our licensed professionals arrive on schedule and complete your remodel with minimal disruption. We handle everything: demolition, plumbing, electrical, installation, and cleanup. Daily updates keep you informed of progress.',
                'time' => '5-10 days',
                'icon' => 'default/Icon (11).png',
            ],
        ]);
    }
}
