<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Database\Seeders\HomeServiceSeeder;
use Database\Seeders\RemodelingWhatIncludeSeeder;
use Database\Seeders\RemodelingOptionSeeder;

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

        ]);
    }
}
