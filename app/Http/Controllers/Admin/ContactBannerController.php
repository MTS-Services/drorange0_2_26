<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ContactBanner;
use App\Services\ContactBannerService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ContactBannerController extends Controller
{
    public function __construct(protected ContactBannerService $service)
    {
    }

    public function edit(?ContactBanner $contactBanner = null): Response
    {
        $banner = $contactBanner ?? $this->service->getFirst();

        return Inertia::render('Admin/ManagePage/ContactPage/Banner/Edit', [
            'banner' => $banner,
        ]);
    }

    public function update(Request $request, ?ContactBanner $contactBanner = null): RedirectResponse
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

        return back()->with('success', 'Contact banner updated successfully');
    }
}
