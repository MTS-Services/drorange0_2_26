<?php

namespace Database\Seeders;

use App\Models\RemodelingOption;
use Illuminate\Database\Seeder;

class RemodelingOptionSeeder extends Seeder
{
    public function run(): void
    {
        RemodelingOption::insert([
            [
                'title' => 'Tub to Shower Conversion',
                'subtitle' => 'Replace your old bathtub with a modern, accessible walk-in shower. Perfect for improving safety and creating more space.',
                'icon' => 'default/2.png',
            ],
            [
                'title' => 'Complete Remodel',
                'subtitle' => 'Full bathroom transformation including flooring, walls, fixtures, and lighting. Start fresh with a brand new bathroom.',
                'icon' => 'default/5.png',
            ],
            [
                'title' => 'Vanity & Fixture Upgrade',
                'subtitle' => 'Update your bathroom with new vanities, sinks, toilets, and faucets without a full remodel.',
                'icon' => 'default/3.png',
            ],
            [
                'title' => 'Tile Installation',
                'subtitle' => 'Beautiful tile work for floors, shower walls, and backsplashes. Choose from countless styles and patterns.',
                'icon' => 'default/4.png',
            ],
            [
                'title' => 'Project Tracking',
                'subtitle' => 'Transparent updates and milestone check-ins.',
                'icon' => 'default/images/icon/tracking.png',
            ],
            [
                'title' => 'Final Walkthrough',
                'subtitle' => 'Detailed punch-list and handover so everything is perfect.',
                'icon' => 'default/images/icon/walkthrough.png',
            ],
        ]);
    }
}
