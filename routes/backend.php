<?php

use App\Http\Controllers\Backend\Admin\AdminDashboardController;
use App\Http\Controllers\Backend\Admin\SiteSettingsController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth:admin'])->prefix('admin')->name('admin.')->group(function () {
    Route::get('/dashboard', AdminDashboardController::class)->name('dashboard');

    Route::resource('site-settings', SiteSettingsController::class)->only(['index', 'update']);
});