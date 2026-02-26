<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\AboutBanner;
use App\Services\AboutBannerService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class AboutBannerController extends Controller
{
    public function __construct(protected AboutBannerService $service)
    {
    }

    public function edit(?AboutBanner $aboutBanner = null): Response
    {
        $banner = $aboutBanner ?? $this->service->getFirst();

        return Inertia::render('AboutPage/Banner/Edit', [
            'banner' => $banner,
        ]);
    }

    public function update(Request $request, ?AboutBanner $aboutBanner = null): RedirectResponse
    {
        $data = $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'subtitle' => ['nullable', 'string', 'max:255'],
            'additional_info' => ['nullable', 'string'],
        ]);

        $banner = $aboutBanner ?? $this->service->getFirst();

        if ($banner) {
            $this->service->update($banner->id, $data);
        } else {
            $this->service->create($data);
        }

        return back()->with('success', 'About banner updated successfully.');
    }
}
