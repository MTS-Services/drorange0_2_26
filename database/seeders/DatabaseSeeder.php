<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Database\Seeders\HomeServiceSeeder;
use Database\Seeders\RemodelingWhatIncludeSeeder;
use Database\Seeders\RemodelingOptionSeeder;
use Database\Seeders\RemodelingWhyChooseSeeder;
use Database\Seeders\HowItWorksSeeder;
use Database\Seeders\HowItWorksBannerSeeder;
use Database\Seeders\StayInformedSeeder;
use Database\Seeders\HowItWorkFaqSeeder;
use Database\Seeders\AboutBannerSeeder;
use Database\Seeders\AboutInformationSeeder;
use Database\Seeders\AboutWhyChooseSeeder;
use Database\Seeders\AboutLicenseSeeder;
use Database\Seeders\AboutServiceAreaSeeder;

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
            HowItWorksBannerSeeder::class,
            HowItWorksSeeder::class,
            StayInformedSeeder::class,
            HowItWorkFaqSeeder::class,
            AboutBannerSeeder::class,
            AboutInformationSeeder::class,
            AboutWhyChooseSeeder::class,
            AboutLicenseSeeder::class,
            AboutServiceAreaSeeder::class,

        ]);
    }
}
