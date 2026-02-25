<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Services\HomePageHeroService;
use App\Services\HomeServiceService;
use App\Services\RemodelingHeroService;
use App\Services\RemodelingOptionService;
use App\Services\RemodelingWhatIncludeService;
use Inertia\Inertia;
use Inertia\Response;

class FrontendController extends Controller
{

   public  function __construct(
    protected HomePageHeroService $homePageHeroService,
    protected HomeServiceService $serviceService,
    protected RemodelingHeroService $remodelingHeroService,
    protected RemodelingWhatIncludeService $remodelingWhatIncludeService,
    protected RemodelingOptionService $remodelingOptionService
   )
   {
  
   }
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
        return Inertia::render('frontend/bathroom-remodeling',[
            'banner' => $banner,
            'includes' => $includes,
            'options' => $options,
        ]);
    }

    public function contact(): Response
    {
        return Inertia::render('frontend/contact');
    }

    public function willWriting(): Response
    {
        return Inertia::render('frontend/will-writing');
    }
    
    // public function willWritingStart(): Response
    // {
    //     return Inertia::render('frontend/will-writing-start');
    // }

    public function lpa(): Response
    {
        return Inertia::render('frontend/lpa');
    }

    public function lpaStart(): Response
    {
        return Inertia::render('frontend/lpa-start');
    }

    public function probate(): Response
    {
        return Inertia::render(component: 'frontend/probate');
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

    // public function photos(): Response
    // {
    //     return Inertia::render('frontend/photos');
    // }
}
