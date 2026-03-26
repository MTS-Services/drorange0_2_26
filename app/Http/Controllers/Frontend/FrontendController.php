<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Services\AboutBannerService;
use App\Services\AboutInformationService;
use App\Services\AboutLicenseService;
use App\Services\AboutServiceAreaService;
use App\Services\AboutWhyChooseService;
use App\Services\ContactBannerService;
use App\Services\ContactFaqService;
use App\Services\CurrentSetupService;
use App\Services\EstimateService;
use App\Services\HomePageHeroService;
use App\Services\HomeServiceService;
use App\Services\HowItWorkFaqService;
use App\Services\HowItWorksBannerService;
use App\Services\MessageService;
use App\Services\RemodelingHeroService;
use App\Services\RemodelingOptionService;
use App\Services\RemodelingWhatIncludeService;
use App\Services\RemodelingWhyChooseService;
use App\Services\HowItWorksService;
use App\Services\OptionService;
use App\Services\OtpService;
use App\Services\ServiceTypeService;
use App\Services\StayInformedService;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class FrontendController extends Controller
{

    public  function __construct(
        protected HomePageHeroService $homePageHeroService,
        protected HomeServiceService $serviceService,
        protected RemodelingHeroService $remodelingHeroService,
        protected RemodelingWhatIncludeService $remodelingWhatIncludeService,
        protected RemodelingOptionService $remodelingOptionService,
        protected RemodelingWhyChooseService $remodelingWhyChooseService,
        protected HowItWorksService $howItWorksService,
        protected StayInformedService $stayInformedService,
        protected HowItWorkFaqService $howItWorkFaqService,
        protected HowItWorksBannerService $howItWorksBannerService,
        protected AboutBannerService $aboutBannerService,
        protected AboutInformationService $aboutInfromationService,
        protected AboutLicenseService $aboutLicenseService,
        protected AboutServiceAreaService $aboutServiceAreaService,
        protected AboutWhyChooseService $aboutWhyChooseService,
        protected ContactBannerService $contactBannerService,
        protected ContactFaqService $contactFaqService,
        protected MessageService $messageService,
        protected ServiceTypeService $serviceTypeService,
        protected OptionService $optionService,
        protected CurrentSetupService $currentSetupService,
        protected OtpService $otpService,
        protected EstimateService $estimateService
    ) {}
    public function index(): Response
    {
        $services = $this->serviceService->latest(4);

        $banner = $this->homePageHeroService->first();

        return Inertia::render('frontend/home', [
            'banner' => $banner,
            'services' => $services,
        ]);
    }

    public function BathroomRemodeling(): Response
    {
        $banner = $this->remodelingHeroService->first();
        $includes = $this->remodelingWhatIncludeService->latest(6);
        $options = $this->remodelingOptionService->latest(4);
        $whychooses = $this->remodelingWhyChooseService->latest(3);
        return Inertia::render('frontend/bathroom-remodeling', [
            'banner' => $banner,
            'includes' => $includes,
            'options' => $options,
            'whychooses' => $whychooses,
        ]);
    }


    public function About(): Response
    {
        $banner = $this->aboutBannerService->getFirst();
        $about = $this->aboutInfromationService->getFirst();
        $aboutLicense = $this->aboutLicenseService->latest(6);
        $aboutServiceArea = $this->aboutServiceAreaService->latest();
        $aboutWhyChoose = $this->aboutWhyChooseService->latest();

        return Inertia::render('frontend/about', [
            'banner' => $banner,
            'about' => $about,
            'aboutLicense' => $aboutLicense,
            'aboutServiceArea' => $aboutServiceArea,
            'aboutWhyChoose' => $aboutWhyChoose,
        ]);
    }


    public function contact(): Response
    {
        $banner = $this->contactBannerService->getFirst();
        $faqs = $this->contactFaqService->latest(20);
        return Inertia::render('frontend/contact', [
            'banner' => $banner,
            'faqs' => $faqs,
        ]);
    }

    public function willWriting(): Response
    {
        return Inertia::render('frontend/will-writing');
    }

    // public function willWritingStart(): Response
    // {
    //     return Inertia::render('frontend/will-writing-start');
    // }


    public function lpaStart(): Response
    {

        return Inertia::render('frontend/lpa-start');
    }

    public function HowItWorks(): Response
    {
        $howItWorks = $this->howItWorksService->latest(7);

        $stayInforms = $this->stayInformedService->latest(4);

        $faqs = $this->howItWorkFaqService->latest(4);

        $banner = $this->howItWorksBannerService->getFirst();

        return Inertia::render('frontend/how-it-works', [
            'howItWorks' => $howItWorks,
            'stayInforms' => $stayInforms,
            'faqs' => $faqs,
            'banner' => $banner,
        ]);
    }

    public function privacyPolicy(): Response
    {
        return Inertia::render('frontend/privacy-policy');
    }

    public function terms(): Response
    {
        return Inertia::render('frontend/terms-and-conditions');
    }

    public function consumerRights(): Response
    {
        return Inertia::render('frontend/consumer-rights-act');
    }

    public function cookiePolicy(): Response
    {
        return Inertia::render('frontend/cookie-policy');
    }
    public function trackOrders(): Response
    {
        return Inertia::render('frontend/track-order');
    }

    public function sendMessage(Request $request): RedirectResponse
    {
        // Get user identifier (IP address)
        $identifier = $request->ip();

        // Check for successful submission block (1 hour)
        $successBlockKey = "message_success_block:{$identifier}";
        if (Cache::has($successBlockKey)) {
            $remainingTime = Cache::get($successBlockKey) - time();
            $minutes = ceil($remainingTime / 60);
            return Redirect::back()->with('error', "You have already sent a response. Please try again after {$minutes} minutes.");
        }

        // Check for failed attempts block (15 minutes after 5 failures)
        $failedAttemptsKey = "message_failed_attempts:{$identifier}";
        $failedBlockKey = "message_failed_block:{$identifier}";

        if (Cache::has($failedBlockKey)) {
            $remainingTime = Cache::get($failedBlockKey) - time();
            $minutes = ceil($remainingTime / 60);
            return Redirect::back()->with('error', "Too many attempts. Please try again after {$minutes} minutes.");
        }

        // Validate request
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'nullable|string|max:20',
            'subject' => 'nullable|string|max:255',
            'message' => 'required|string|max:2000',
        ]);

        try {
            // Store message using service
            $this->messageService->storeMessage($validated);

            // Clear failed attempts on successful submission
            Cache::forget($failedAttemptsKey);
            Cache::forget($failedBlockKey);

            // Block successful submissions for 1 hour
            Cache::put($successBlockKey, time() + 3600, 3600);

            return Redirect::back()->with('success', 'Message sent successfully!');
        } catch (\Exception $e) {
            // Increment failed attempts
            $failedAttempts = Cache::get($failedAttemptsKey, 0) + 1;
            Cache::put($failedAttemptsKey, $failedAttempts, 900); // Store for 15 minutes

            // Block after 5 failed attempts
            if ($failedAttempts >= 5) {
                Cache::put($failedBlockKey, time() + 900, 900); // Block for 15 minutes
                return Redirect::back()->with('error', 'Too many attempts. Please try again after 15 minutes.');
            }

            return Redirect::back()->with('error', 'Failed to send message. Please try again.');
        }
    }

    public function freeEstimate(): Response
    {

        
        $serviceTypes =  $this->serviceTypeService->getAll();

        return Inertia::render('frontend/free-estimate', ['service_types' => $serviceTypes]);
    }

    public function freeEstimateStoreStep1(Request $request)
    {

        $request->validate([
            'service_type' => 'required|exists:service_types,id',
            'files' => 'required|nullable|array',
            'files.*' => 'file|max:10240', // 10MB max per file
        ]);


        $files = $request->file('files');
        $tempFiles = [];
        if ($files) {
            foreach ($files as $file) {

                $tempFiles[] = Storage::disk('public')->put('temp', $file);
            }
        }

        if (!session()->has('estimate_data')) {
            session()->put('estimate_data', [
                'service_type_id' => $request->service_type,
                'files' => $tempFiles,
            ]);
        }

        return redirect()->route('frontend.free-estimate-step2', ['serviceTypeId' => $request->service_type]);
    }

    public function freeEstimateStep2(int $serviceTypeId)
    {

        $options = $this->optionService->getAll();
        $currentSetups = $this->currentSetupService->getAll();



        return Inertia::render('frontend/free-estimate-step2', ['options' => $options, 'currentSetups' => $currentSetups, 'serviceTypeId' => $serviceTypeId]);
    }

    public function freeEstimateStoreStep2(Request $request)
    {
        $validate =  $request->validate([
            'options' => 'required|array',
            'bathroom_size' => 'nullable|string',
            'current_setup' => 'required|exists:current_setups,id',
        ]);



        $estimateData = session()->get('estimate_data');
        session()->put('estimate_data', [...$estimateData, ...$validate]);

        return redirect()->route('frontend.free-estimate-step3', ['serviceTypeId' => $request->service_type]);
    }


    // Step 3

    public function freeEstimateStep3()
    {
        return Inertia::render('frontend/free-estimate-step3');
    }

    public function freeEstimateStoreStep3(Request $request)
    {
        $validate = $request->validate([
            'first_name' => 'required|string',
            'last_name' => 'required|string',
            'email' => 'required|email',
            'phone' => 'required|string',
            'address' => 'required|string',
            'city' => 'required|string',
            'zip' => 'required|string',
        ]);

        $estimateData = session()->get('estimate_data');
        session()->put('estimate_data', [...$estimateData, ...$validate]);

        $this->otpService->generateOtp($request->phone);

        return redirect()->route('frontend.free-estimate-step4');
    }

    // Step 4

    public function freeEstimateStep4()
    {
        return Inertia::render('frontend/free-estimate-step4');
    }

    public function freeEstimateResendOtp(Request $request)
    {
        $request->validate([
            'phone' => 'required|string',
        ]);

        $this->otpService->resendOtp($request->phone);

        return back()->with('success', 'OTP has been resent.');
    }

    public function freeEstimateVerifyOtp(Request $request)
    {
        $request->validate([
            'otp' => 'required|string',
            'phone' => 'required|string',
        ]);

        $otpVerified = $this->otpService->verifyOtp($request->otp, $request->phone,);

        if ($otpVerified) {
            return redirect()->route('frontend.free-estimate-step5');
        }
    }

    public function freeEstimateStep5()
    {
         if(!session()->has('estimate_data')) {
            return redirect()->route('frontend.free-estimate');
        }
        $estimateData = session()->get('estimate_data');

        $service = $this->serviceTypeService->find($estimateData['service_type_id'])->first();

        $totalFile = count($estimateData['files']);

        $currentSetup = $this->currentSetupService->find($estimateData['current_setup'])->first();

        $options = $this->optionService->findByIds($estimateData['options']);





        return Inertia::render('frontend/free-estimate-step5', ['service' => $service, 'totalFile' => $totalFile, 'options' => $options, 'currentSetup' => $currentSetup, 'estimateData' => $estimateData]);
    }

    public function freeEstimateStoreStep5(Request $request)
    {


        //    Inertia::render('frontend/free-estimate-step6');
    }


    public function freeEstimateStep6()
    {
       if(!session()->has('estimate_data')) {
            return redirect()->route('free-estimate');
        }
        $estimateData = session()->get('estimate_data');

     

       $estimate =  $this->estimateService->create($estimateData);

        return Inertia::render('frontend/free-estimate-step6', compact('estimate'));
    }

    public function trackOrderDetails(): Response
    {
        return Inertia::render('frontend/track-order-details');
    }
}
