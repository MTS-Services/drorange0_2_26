<?php

use App\Http\Controllers\Admin\HomePageController;
use App\Http\Controllers\Backend\Admin\AdminDashboardController;
use App\Http\Controllers\Backend\Admin\SiteSettingsController;

use Illuminate\Support\Facades\Route;

Route::middleware(['auth:admin'])->prefix('admin')->name('admin.')->group(function () {
    Route::get('/dashboard', AdminDashboardController::class)->name('dashboard');

    Route::resource('site-settings', SiteSettingsController::class)->only(['index', 'update']);

    Route::prefix('page-management')
        ->as('pm.')
        ->group(function () {

            Route::get('hero-section', [HomePageController::class, 'editHeroSection'])->name('hero-section');
            Route::put('hero-section', [HomePageController::class, 'updateHeroSection'])->name('hero-section.update');

            Route::get('remodeling-hero', [HomePageController::class, 'editRemodelingHeroSection'])->name('remodeling-hero');
            Route::put('remodeling-hero', [HomePageController::class, 'updateRemodelingHeroSection'])->name('remodeling-hero.update');
        });
});
