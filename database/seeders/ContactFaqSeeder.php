<?php

namespace Database\Seeders;

use App\Models\ContactFaq;
use Illuminate\Database\Seeder;

class ContactFaqSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        ContactFaq::insert([
            [
                'question' => 'How quickly will I get a response?',
                'answer' => 'We respond to all inquiries within 24 hours, usually much faster. For urgent matters, please call us directly at (555) 123-4567.',
            ],
            [
                'question' => 'Can I schedule a consultation?',
                'answer' => 'Yes! After submitting an estimate request, we can schedule an in-home consultation if needed. Most estimates can be completed accurately using your photos.',
            ],
            [
                'question' => 'Do you offer emergency services?',
                'answer' => 'For emergency bathroom repairs (plumbing issues, water damage, etc.), please call us immediately at (555) 123-4567. We have emergency response available.',
            ],
            [
                'question' => 'What\'s your service area?',
                'answer' => 'We serve Columbus, Cleveland, Cincinnati, and surrounding Ohio communities. Contact us to confirm we service your specific location.',
            ],

        ]);
    }
}
