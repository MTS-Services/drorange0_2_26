<?php

namespace Database\Seeders;

use App\Models\HowItWorkFaq;
use Illuminate\Database\Seeder;

class HowItWorkFaqSeeder extends Seeder
{
    public function run(): void
    {
        $items = [
            ['title' => 'How accurate are the estimates?', 'subtitle' => 'Our estimates are based on your details and photos for high accuracy.'],
            ['title' => 'Can I change my request later?', 'subtitle' => 'Yes, you can request changes before approval and we will adjust accordingly.'],
            ['title' => 'Do I get updates during the process?', 'subtitle' => 'We keep you informed at every milestone from start to finish.'],
            ['title' => 'How long does it take to get a response?', 'subtitle' => 'You typically receive a response within 24 hours on business days.'],
            ['title' => 'Is my data secure?', 'subtitle' => 'We secure your data and never share it with third parties.'],
        ];

        foreach ($items as $item) {
            HowItWorkFaq::firstOrCreate([
                'title' => $item['title'],
            ], $item);
        }
    }
}
