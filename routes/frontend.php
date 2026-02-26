<?php

use App\Http\Controllers\Frontend\FrontendController;
use Illuminate\Support\Facades\Route;

Route::get("/", [FrontendController::class, "index"])->name("home");
Route::get("/bathroom", [FrontendController::class, "BathroomRemodeling"])->name("bathroom");
Route::get("/how-it-works", [FrontendController::class, "HowItWorks"])->name("how-it-work");
Route::get("/about", [FrontendController::class, "About"])->name("lpa");
Route::get("/contact", action: [FrontendController::class, "contact"])->name("contact");

Route::get("/will-writing", [FrontendController::class, "willWriting"])->name("will-writing");

Route::get("/lpa/start", [FrontendController::class, "lpaStart"])->name("lpa.start");

Route::get("/privacy-policy", [FrontendController::class, "privacyPolicy"])->name("privacy");
Route::get("/terms-and-conditions", [FrontendController::class, "terms"])->name("terms");
Route::get("/consumer-rights-act-2015", [FrontendController::class, "consumerRights"])->name("consumer-rights");
Route::get("/cookie-policy", [FrontendController::class, "cookiePolicy"])->name("cookies");
Route::get("/track-orders", [FrontendController::class, "trackOrders"])->name("track-orders");