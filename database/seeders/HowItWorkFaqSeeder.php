<?php

namespace Database\Seeders;

use App\Models\HowItWorkFaq;
use Illuminate\Database\Seeder;

class HowItWorkFaqSeeder extends Seeder
{
    public function run(): void
    {
        $items = [
            ['title' => 'How accurate are the online estimates?', 'subtitle' => 'Our estimates are very accurate because they\'re based on your actual photos and specific selections. We review every detail before sending your quote. If any adjustments are needed after an in-person visit, we\'ll communicate them clearly before starting work.'],
            ['title' => 'What if I need to add or change something?', 'subtitle' => 'No problem! Before approving your estimate, you can request changes or additions. Even after approval, we can discuss modifications, though they may adjust the timeline and pricing.'],
            ['title' => 'What photos should I take?', 'subtitle' => 'Take clear photos showing: (1) full bathroom views from each corner, (2) close-ups of the tub/shower area, (3) vanity and sink, (4) toilet, (5) flooring, and (6) any problem areas or special features. Stand back and use good lighting. The more we can see, the more accurate your estimate will be.'],
            ['title' => 'Is the mobile verification required?', 'subtitle' => 'Yes, mobile verification helps us prevent spam and ensures we can reach you with your estimate. We take your privacy seriously and will never share your phone number with third parties.'],
            // ['title' => 'Is my data secure?', 'subtitle' => 'We secure your data and never share it with third parties.'],
        ];

        foreach ($items as $item) {
            HowItWorkFaq::firstOrCreate([
                'title' => $item['title'],
            ], $item);
        }
    }
}
