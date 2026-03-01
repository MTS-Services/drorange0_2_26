<?php

use App\Http\Controllers\Admin\HomePageController;
use App\Http\Controllers\Admin\HomeServiceController;
use App\Http\Controllers\Admin\HowItWorksController;
use App\Http\Controllers\Admin\HowItWorksBannerController;
use App\Http\Controllers\Admin\RemodelingPageController;
use App\Http\Controllers\Admin\RemodelingWhatIncludeController;
use App\Http\Controllers\Admin\RemodelingOptionController;
use App\Http\Controllers\Admin\RemodelingWhyChooseController;
use App\Http\Controllers\Admin\HowItWorkFaqController;
use App\Http\Controllers\Admin\StayInformedController;
use App\Http\Controllers\Admin\AboutBannerController;
use App\Http\Controllers\Admin\AboutInformationController;
use App\Http\Controllers\Admin\AboutWhyChooseController;
use App\Http\Controllers\Admin\AboutLicenseController;
use App\Http\Controllers\Admin\AboutServiceAreaController;
use App\Http\Controllers\Admin\ContactBannerController;
use App\Http\Controllers\Admin\ContactFaqController;
use App\Http\Controllers\Backend\Admin\AdminDashboardController;
use App\Http\Controllers\Backend\Admin\SiteSettingsController;
use App\Http\Controllers\Admin\ContactController;
use App\Http\Controllers\Admin\CurrentSetupController;
use App\Http\Controllers\Admin\DiemensionController;
use App\Http\Controllers\Admin\OptionController;
use App\Http\Controllers\Admin\ServiceTypeController;
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
            // Remodeling Why Choose Section
            Route::resource('remodeling-why-choose', RemodelingWhyChooseController::class)->only(['index', 'show', 'create', 'store', 'edit', 'update', 'destroy']);

            // How it Works Section
            Route::resource('how-it-works-banner', HowItWorksBannerController::class)->only(['edit', 'update']);
            Route::resource('how-it-works', HowItWorksController::class)->only(['index', 'show', 'create', 'store', 'edit', 'update', 'destroy']);
            Route::resource('stay-informed', StayInformedController::class)->only(['index', 'show', 'create', 'store', 'edit', 'update', 'destroy']);
            Route::resource('how-it-work-faq', HowItWorkFaqController::class)->only(['index', 'show', 'create', 'store', 'edit', 'update', 'destroy']);

            // About Page
            Route::resource('about-banner', AboutBannerController::class)->only(['edit', 'update']);
            Route::resource('about-information', AboutInformationController::class)->only(['edit', 'update']);
            Route::resource('about-why-choose', AboutWhyChooseController::class)->only(['index', 'show', 'create', 'store', 'edit', 'update', 'destroy']);
            Route::resource('about-license', AboutLicenseController::class)->only(['index', 'show', 'create', 'store', 'edit', 'update', 'destroy']);
            Route::resource('about-service-area', AboutServiceAreaController::class)->only(['index', 'show', 'create', 'store', 'edit', 'update', 'destroy']);
       
            // Contact Page
            Route::resource('contact-banner', ContactBannerController::class)->only(['edit', 'update']);
            Route::resource('contact-faq', ContactFaqController::class)->only(['index', 'show', 'create', 'store', 'edit', 'update', 'destroy']);
            Route::resource('contact', ContactController::class)->only(['index', 'show','destroy']);
        });

        Route::prefix('service-management')
        ->as('sm.')
        ->group(function () {
             Route::resource('service-type', ServiceTypeController::class)->only(['index', 'show', 'create', 'store', 'edit', 'update', 'destroy']);
             Route::resource('option', OptionController::class)->only(['index', 'show', 'create', 'store', 'edit', 'update', 'destroy']);
             Route::resource('diemension', DiemensionController::class)->only(['index', 'show', 'create', 'store', 'edit', 'update', 'destroy']);
             Route::resource('current-setup', CurrentSetupController::class)->only(['index', 'show', 'create', 'store', 'edit', 'update', 'destroy']);
        });
    });
