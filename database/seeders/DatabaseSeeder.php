<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Database\Seeders\HomeServiceSeeder;
use Database\Seeders\RemodelingWhatIncludeSeeder;
use Database\Seeders\RemodelingOptionSeeder;
use Database\Seeders\RemodelingWhyChooseSeeder;
use Database\Seeders\HowItWorksSeeder;
use Database\Seeders\StayInformedSeeder;
use Database\Seeders\HowItWorkFaqSeeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            AdminSeeder::class,
            SiteSettingSeeder::class,
            HomePageHeroSeeder::class,
            RemodelingHeroSeeder::class,
            HomeServiceSeeder::class,
            RemodelingWhatIncludeSeeder::class,
            RemodelingOptionSeeder::class,
            RemodelingWhyChooseSeeder::class,
            HowItWorksSeeder::class,
            StayInformedSeeder::class,
            HowItWorkFaqSeeder::class,

        ]);
    }
}
