<?php

namespace Database\Seeders;

use App\Models\ContactBanner;
use Illuminate\Database\Seeder;

class ContactBannerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        ContactBanner::create([
            'title' => 'Contact Us',
            'subtitle' => 'Have questions? We\'re here to help! Reach out via phone, email, or the form below.',
            'additional_info' => '',
        ]);
    }
}
