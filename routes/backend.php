<?php

use App\Http\Controllers\Admin\HomePageController;
use App\Http\Controllers\Admin\HomeServiceController;
use App\Http\Controllers\Admin\RemodelingPageController;
use App\Http\Controllers\Admin\RemodelingWhatIncludeController;
use App\Http\Controllers\Admin\RemodelingOptionController;
use App\Http\Controllers\Backend\Admin\AdminDashboardController;
use App\Http\Controllers\Backend\Admin\SiteSettingsController;

use Illuminate\Support\Facades\Route;

Route::middleware(['auth:admin'])->prefix('admin')->name('admin.')->group(function () {
    Route::get('/dashboard', AdminDashboardController::class)->name('dashboard');

    Route::resource('site-settings', SiteSettingsController::class)->only(['index', 'update']);

    Route::prefix('page-management')
        ->as('pm.')
        ->group(function () {

            // Home Page Hero Section
            Route::get('hero-section', [HomePageController::class, 'editHeroSection'])->name('hero-section');
            Route::put('hero-section', [HomePageController::class, 'updateHeroSection'])->name('hero-section.update');
            //Home Page Service Section
            
            Route::resource('service-section', HomeServiceController::class)->only(['index', 'show', 'create', 'store', 'edit', 'update', 'destroy']);


            // Remodeling Page Hero Section
            Route::get('remodeling-hero', [RemodelingPageController::class, 'editRemodelingHeroSection'])->name('remodeling-hero');
            Route::put('remodeling-hero', [RemodelingPageController::class, 'updateRemodelingHeroSection'])->name('remodeling-hero.update');
      
            // Remodeling Page Service Section
            Route::resource('remodeling-what-include', RemodelingWhatIncludeController::class)->only(['index', 'show', 'create', 'store', 'edit', 'update', 'destroy']);

            // Remodeling Options Section
            Route::resource('remodeling-option', RemodelingOptionController::class)->only(['index', 'show', 'create', 'store', 'edit', 'update', 'destroy']);
        });
});
