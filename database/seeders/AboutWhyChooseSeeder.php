<?php

namespace Database\Seeders;

use App\Models\AboutWhyChoose;
use Illuminate\Database\Seeder;

class AboutWhyChooseSeeder extends Seeder
{
    public function run(): void
    {
        AboutWhyChoose::query()->delete();

        AboutWhyChoose::insert([
            [
                'title' => 'Licensed & Insured',
                'subtitle' => 'Fully licensed contractors with comprehensive insurance coverage for your complete protection and peace of mind.',
                'icon' => 'default/Vector-6.png',
            ],
            [
                'title' => 'Quality Craftsmanship',
                'subtitle' => 'We use only premium materials and employ skilled professionals who take pride in every detail of their work.',
                'icon' => 'default/Icon-4.png',
            ],
            [
                'title' => 'Customer-Focused',
                'subtitle' => 'Your satisfaction is our priority. We listen to your needs, communicate clearly, and deliver on our promises.',
                'icon' => 'default/Icon3.png',
            ],
        ]);
    }
}
