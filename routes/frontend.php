<?php

use App\Http\Controllers\Frontend\FrontendController;
use Illuminate\Support\Facades\Route;

Route::get("/", [FrontendController::class, "index"])->name("home");
Route::get("/bathroom", [FrontendController::class, "BathroomRemodeling"])->name("bathroom");
Route::get("/how-it-works", [FrontendController::class, "HowItWorks"])->name("how-it-work");
Route::get("/about", [FrontendController::class, "About"])->name("lpa");
Route::get("/contact", action: [FrontendController::class, "contact"])->name("contact");
Route::post("/contact/send-message", [FrontendController::class, "sendMessage"])->name("contact.send-message");

Route::get("/will-writing", [FrontendController::class, "willWriting"])->name("will-writing");

Route::get("/lpa/start", [FrontendController::class, "lpaStart"])->name("lpa.start");

Route::get("/privacy-policy", [FrontendController::class, "privacyPolicy"])->name("privacy");
Route::get("/terms-and-conditions", [FrontendController::class, "terms"])->name("terms");
Route::get("/consumer-rights-act-2015", [FrontendController::class, "consumerRights"])->name("consumer-rights");
Route::get("/cookie-policy", [FrontendController::class, "cookiePolicy"])->name("cookies");
Route::get("/track-orders", [FrontendController::class, "trackOrders"])->name("track-orders");
// Free Estimate Routes
Route::get("/free-estimate", [FrontendController::class, "freeEstimate"])->name("free-estimate");
Route::post("/free-estimate/store/step1", [FrontendController::class, "freeEstimateStoreStep1"])->name("free-estimate.store.step1");

// Free Estimate Step 2 Route
Route::get("/free-estimate/step2/{serviceTypeId}", [FrontendController::class, "freeEstimateStep2"])->name("frontend.free-estimate-step2");
Route::post("/free-estimate/store/step2", [FrontendController::class, "freeEstimateStoreStep2"])->name("free-estimate.store.step2");

// Free Estimate Step 3 Route
Route::get("/free-estimate/step3", [FrontendController::class, "freeEstimateStep3"])->name("frontend.free-estimate-step3");
Route::post("/free-estimate/store/step3", [FrontendController::class, "freeEstimateStoreStep3"])->name("free-estimate.store.step3");

// Free Estimate Step 4 Route
Route::get("/free-estimate/step4", [FrontendController::class, "freeEstimateStep4"])->name("frontend.free-estimate-step4");


// Free Estimate Resend OTP Route
Route::post("/estimates/resend-otp", [FrontendController::class, "freeEstimateResendOtp"])->name("frontend.free-estimate-resend-otp");
Route::post("/estimates/verify-otp", [FrontendController::class, "freeEstimateVerifyOtp"])->name("frontend.free-estimate-verify-otp");

// Free Estimate Step 5 Route
Route::get("/free-estimate/step5", [FrontendController::class, "freeEstimateStep5"])->name("frontend.free-estimate-step5");
Route::post("/free-estimate/store/step5", [FrontendController::class, "freeEstimateStoreStep5"])->name("free-estimate.store.step5");
// final Stepp
Route::get("/free-estimate/step6", [FrontendController::class, "freeEstimateStep6"])->name("frontend.free-estimate-step6");