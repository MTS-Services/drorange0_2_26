<?php

namespace Database\Seeders;

use App\Models\ContactInformation;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ContactInformationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        ContactInformation::insert([
            [
                'first_name' => 'John',
                'last_name' => 'Smith',
                'email' => 'john.smith@example.com',
                'phone' => '555-0101',
                'address' => '123 Main St',
                'city' => 'Springfield',
                'zip_code' => '12345',
                'estimate_id' => 1, // EST-2026-001
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'first_name' => 'Sarah',
                'last_name' => 'Johnson',
                'email' => 'sarah.johnson@example.com',
                'phone' => '555-0102',
                'address' => '456 Oak Ave',
                'city' => 'Riverside',
                'zip_code' => '23456',
                'estimate_id' => 2, // EST-2026-002
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'first_name' => 'Michael',
                'last_name' => 'Davis',
                'email' => 'michael.davis@example.com',
                'phone' => '555-0103',
                'address' => '789 Pine Rd',
                'city' => 'Hillside',
                'zip_code' => '34567',
                'estimate_id' => 3, // EST-2026-003
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'first_name' => 'Emily',
                'last_name' => 'Wilson',
                'email' => 'emily.wilson@example.com',
                'phone' => '555-0104',
                'address' => '321 Elm St',
                'city' => 'Lakeside',
                'zip_code' => '45678',
                'estimate_id' => 4, // EST-2026-004
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'first_name' => 'Robert',
                'last_name' => 'Brown',
                'email' => 'robert.brown@example.com',
                'phone' => '555-0105',
                'address' => '654 Maple Dr',
                'city' => 'Greenfield',
                'zip_code' => '56789',
                'estimate_id' => 5, // EST-2026-005
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
