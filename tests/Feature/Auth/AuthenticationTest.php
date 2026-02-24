<?php

use App\Models\Admin;

test('admin login screen can be rendered', function () {
    $response = $this->get('/admin/login');

    $response->assertOk();
});

test('admin can authenticate using the login screen', function () {
    $admin = Admin::factory()->create();

    $response = $this->post('/admin/login', [
        'email' => $admin->email,
        'password' => 'password',
    ]);

    $this->assertAuthenticatedAs($admin, 'admin');
    $response->assertRedirect('/admin/dashboard');
});

test('admin cannot authenticate with invalid password', function () {
    $admin = Admin::factory()->create();

    $this->post('/admin/login', [
        'email' => $admin->email,
        'password' => 'wrong-password',
    ]);

    $this->assertGuest('admin');
});

test('admin can logout', function () {
    $admin = Admin::factory()->create();

    $response = $this->actingAs($admin, 'admin')->post('/admin/logout');

    $this->assertGuest('admin');
    $response->assertRedirect('/');
});
