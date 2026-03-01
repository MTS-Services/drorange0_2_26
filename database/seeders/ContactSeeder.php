<?php

namespace Database\Seeders;

use App\Models\Contact;
use Illuminate\Database\Seeder;

class ContactSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Contact::insert([
            [
                'name' => 'John Smith',
                'email' => 'john.smith@email.com',
                'phone' => '+1-555-0123',
                'subject' => 'General Inquiry',
                'message' => 'I am interested in learning more about your services and would like to schedule a consultation to discuss my project requirements.',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Sarah Johnson',
                'email' => 'sarah.j@company.com',
                'phone' => '+1-555-0124',
                'subject' => 'Service Request',
                'message' => 'We need assistance with our home renovation project. Please contact us to discuss the scope and timeline.',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Michael Davis',
                'email' => 'm.davis@email.com',
                'phone' => '+1-555-0125',
                'subject' => 'Quote Request',
                'message' => 'I would like to request a detailed quote for kitchen remodeling services. We have a medium-sized kitchen that needs complete renovation including cabinets, countertops, and flooring.',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Emily Wilson',
                'email' => 'emily.w@email.com',
                'phone' => '+1-555-0126',
                'subject' => 'Technical Support',
                'message' => 'I am having issues with the online booking system. It keeps showing an error message when I try to select dates for my appointment.',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Robert Brown',
                'email' => 'rbrown@business.com',
                'phone' => '+1-555-0127',
                'subject' => 'Partnership Inquiry',
                'message' => 'Our company is interested in exploring partnership opportunities. We believe our services complement yours well.',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Lisa Anderson',
                'email' => 'lisa.a@email.com',
                'phone' => '+1-555-0128',
                'subject' => 'Feedback',
                'message' => 'I wanted to thank you for the excellent service we received. The team was professional and the work was completed on time.',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'David Martinez',
                'email' => 'd.martinez@email.com',
                'phone' => '+1-555-0129',
                'subject' => 'Appointment Request',
                'message' => 'I would like to schedule an appointment for next week to discuss our bathroom remodeling project.',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Jennifer Taylor',
                'email' => 'j.taylor@email.com',
                'phone' => '+1-555-0130',
                'subject' => 'Billing Question',
                'message' => 'I have a question about my recent invoice. There seems to be a discrepancy in the charges that needs clarification.',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'William Garcia',
                'email' => 'w.garcia@email.com',
                'phone' => '+1-555-0131',
                'subject' => 'Product Information',
                'message' => 'I need more information about the materials you use for kitchen cabinets. Are they eco-friendly and what are the warranty options available?',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Amanda Rodriguez',
                'email' => 'a.rodriguez@email.com',
                'phone' => '+1-555-0132',
                'subject' => 'Complaint',
                'message' => 'I am writing to express my dissatisfaction with the recent service. The project was delayed beyond the promised timeline.',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
