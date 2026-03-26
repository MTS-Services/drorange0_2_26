<?php

namespace Database\Seeders;

use App\Models\StayInformed;
use Illuminate\Database\Seeder;

class StayInformedSeeder extends Seeder
{
    public function run(): void
    {
        $items = [
            [
                'title' => 'Track Your Project Online',
                'subtitle' => 'Use your unique order ID to check project status anytime, view updates, and see what stage your remodel is in.',
                'icon' => 'default/10.png',
            ],
            [
                'title' => 'Missing Items Reminders',
                'subtitle' => 'If we need additional photos or information, you\'ll see it clearly on your tracking page with easy ways to provide what we need.',
                'icon' => 'default/13.png',
            ],
            [
                'title' => 'SMS Updates',
                'subtitle' => 'Get text message notifications at key milestones: estimate sent, project scheduled, work started, and completion.',
                'icon' => 'default/12.png',
            ],
            [
                'title' => 'No Surprises',
                'subtitle' => 'Our detailed estimates include everything, so you know exactly what to expect. No hidden fees or surprise charges.',
                'icon' => 'default/11.png',
            ],
        ];

        foreach ($items as $item) {
            StayInformed::create($item);
        }
    }
}
