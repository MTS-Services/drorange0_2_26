<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\HowItWorksBanner;
use App\Services\HowItWorksBannerService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class HowItWorksBannerController extends Controller
{
    public function __construct(protected HowItWorksBannerService $service)
    {
    }

    public function edit(?HowItWorksBanner $howItWorksBanner = null): Response
    {
        $banner = $howItWorksBanner ?? $this->service->getFirst();

        return Inertia::render('Admin/ManagePage/HowItWorksPage/EditBanner', [
            'banner' => $banner,
        ]);
    }

    public function update(Request $request, ?HowItWorksBanner $howItWorksBanner = null): RedirectResponse
    {
        $data = $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'subtitle' => ['nullable', 'string', 'max:255'],
            'additionalInfo' => ['nullable', 'string'],
        ]);

        $this->service->update([
            'title' => $data['title'],
            'subtitle' => $data['subtitle'] ?? null,
            'additional_info' => $data['additionalInfo'] ?? null,
        ]);

        return back()->with('success', 'How It Works banner updated successfully');
    }
}
