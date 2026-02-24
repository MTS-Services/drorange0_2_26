<?php

use App\Models\Admin;
use Illuminate\Auth\Notifications\ResetPassword;
use Illuminate\Support\Facades\Notification;

test('admin forgot password screen can be rendered', function () {
    $response = $this->get('/admin/forgot-password');

    $response->assertOk();
});

test('admin reset password link can be requested', function () {
    Notification::fake();

    $admin = Admin::factory()->create();

    $this->post('/admin/forgot-password', ['email' => $admin->email]);

    Notification::assertSentTo($admin, ResetPassword::class);
});

test('admin reset password screen can be rendered', function () {
    Notification::fake();

    $admin = Admin::factory()->create();

    $this->post('/admin/forgot-password', ['email' => $admin->email]);

    Notification::assertSentTo($admin, ResetPassword::class, function ($notification) {
        $response = $this->get('/admin/reset-password/'.$notification->token);

        $response->assertOk();

        return true;
    });
});

test('admin password can be reset with valid token', function () {
    Notification::fake();

    $admin = Admin::factory()->create();

    $this->post('/admin/forgot-password', ['email' => $admin->email]);

    Notification::assertSentTo($admin, ResetPassword::class, function ($notification) use ($admin) {
        $response = $this->post('/admin/reset-password', [
            'token' => $notification->token,
            'email' => $admin->email,
            'password' => 'password',
            'password_confirmation' => 'password',
        ]);

        $response
            ->assertSessionHasNoErrors()
            ->assertRedirect('/admin/login');

        return true;
    });
});

test('admin password cannot be reset with invalid token', function () {
    $admin = Admin::factory()->create();

    $response = $this->post('/admin/reset-password', [
        'token' => 'invalid-token',
        'email' => $admin->email,
        'password' => 'newpassword123',
        'password_confirmation' => 'newpassword123',
    ]);

    $response->assertSessionHasErrors('email');
});
