<?php

use App\Models\Admin;

test('guests are redirected to the admin login page', function () {
    $this->get('/admin/dashboard')->assertRedirect('/admin/login');
});

test('authenticated admins can visit the dashboard', function () {
    $admin = Admin::factory()->create();

    $this->actingAs($admin, 'admin')
        ->get('/admin/dashboard')
        ->assertOk();
});
