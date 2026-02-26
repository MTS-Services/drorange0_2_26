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
                'title' => 'Schedule a Call',
                'subtitle' => 'Book a time that fits your calendar so we can learn your goals.',
                'time' => 'Step 1',
                'icon' => 'default/images/icon/schedule.png',
            ],
            [
                'title' => 'On-Site Assessment',
                'subtitle' => 'We walk the space, capture measurements, and discuss priorities.',
                'time' => 'Step 2',
                'icon' => 'default/images/icon/assessment.png',
            ],
            [
                'title' => 'Design & Estimate',
                'subtitle' => 'Receive a tailored plan with transparent pricing and options.',
                'time' => 'Step 3',
                'icon' => 'default/images/icon/design.png',
            ],
            [
                'title' => 'Select Materials',
                'subtitle' => 'Choose finishes and fixtures that match your style and budget.',
                'time' => 'Step 4',
                'icon' => 'default/images/icon/materials.png',
            ],
            [
                'title' => 'Project Kickoff',
                'subtitle' => 'We lock schedule, prepare permits, and set milestones.',
                'time' => 'Step 5',
                'icon' => 'default/images/icon/kickoff.png',
            ],
            [
                'title' => 'Build & Updates',
                'subtitle' => 'Our crews execute with weekly progress check-ins.',
                'time' => 'Step 6',
                'icon' => 'default/images/icon/build.png',
            ],
            [
                'title' => 'Final Walkthrough',
                'subtitle' => 'We review every detail and hand over your refreshed space.',
                'time' => 'Step 7',
                'icon' => 'default/images/icon/walkthrough.png',
            ],
        ]);
    }
}
