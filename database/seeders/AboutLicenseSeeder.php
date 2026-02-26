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
                'title' => 'Licensed General Contractor',
                'subtitle' => 'State-certified with full compliance documentation.',
            ],
            [
                'title' => 'EPA Lead-Safe Certified',
                'subtitle' => 'Trained and certified for safe renovation practices.',
            ],
        ]);
    }
}
