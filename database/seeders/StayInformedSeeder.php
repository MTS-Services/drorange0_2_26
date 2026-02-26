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
                'subtitle' => 'Check project status and review your estimate at any time via the link or app.',
                'icon' => null,
            ],
            [
                'title' => 'Missing Item Reminders',
                'subtitle' => 'We remind you automatically if information or documents are still needed.',
                'icon' => null,
            ],
            [
                'title' => 'SMS Updates',
                'subtitle' => 'Get text notifications for key milestones like estimate ready and progress updates.',
                'icon' => null,
            ],
            [
                'title' => 'No Surprises',
                'subtitle' => 'Detailed estimates keep costs transparent—no hidden fees or unexpected charges.',
                'icon' => null,
            ],
        ];

        foreach ($items as $item) {
            StayInformed::create($item);
        }
    }
}
