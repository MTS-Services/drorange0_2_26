<?php

namespace Database\Seeders;

use App\Models\AboutLicense;
use Illuminate\Database\Seeder;

class AboutLicenseSeeder extends Seeder
{
    public function run(): void
    {
        AboutLicense::query()->delete();

        AboutLicense::insert([
            [
                'title' => 'Ohio State Contractor License',
                'subtitle' => 'License #12345678.',
            ],
            [
                'title' => 'General Liability Insurance',
                'subtitle' => '$2M coverage',
            ],
            [
                'title' => 'Workers\' Compensation',
                'subtitle' => 'All employees covered',
            ],
            [
                'title' => 'Better Business Bureau',
                'subtitle' => 'A+ Rating',
            ],
            [
                'title' => 'EPA Lead-Safe Certified',
                'subtitle' => 'Firm #12345',
            ],
            [
                'title' => '10-Year Warranty',
                'subtitle' => 'On all workmanship',
            ],
        ]);
    }
}
