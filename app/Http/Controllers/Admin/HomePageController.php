<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Services\HomePageHeroService;
use App\Services\RemodelingHeroService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;

class HomePageController extends Controller
{
    public function __construct(
        protected HomePageHeroService $service,
        protected RemodelingHeroService $remodelingService,
    ) {
    }

    public function editHeroSection(): Response
    {
        $hero = $this->service->first();

       

        return Inertia::render('Admin/ManagePage/HomePage/EditHeroSection', [
            'hero' => $hero,
        ]);
    }

    public function updateHeroSection(Request $request): Response|\Illuminate\Http\RedirectResponse
    {
        $hero = $this->service->first();

        if (! $hero) {
            return back()->with('error', 'Hero section not found');
        }

        $data = $request->validate([
            'title' => 'nullable|string|max:255',
            'subtitle' => 'nullable|string|max:255',
            'button1_text' => 'nullable|string|max:255',
            'button1_url' => 'nullable|string|max:255',
            'button2_text' => 'nullable|string|max:255',
            'button2_url' => 'nullable|string|max:255',
            'background_image' => 'nullable|image|mimes:jpeg,png,jpg|max:4096',
            'aditional_information' => 'nullable|string',
            'delete_existing_background' => 'nullable|boolean',
        ]);

        if ($request->hasFile('background_image')) {
            if ($hero->background_image && Storage::disk('public')->exists($hero->background_image)) {
                Storage::disk('public')->delete($hero->background_image);
            }

            $file = $request->file('background_image');
            $fileName = 'hero_' . time() . '_' . Str::random(8) . '.' . $file->getClientOriginalExtension();
            $data['background_image'] = $file->storeAs('images', $fileName, 'public');
        } elseif ($request->boolean('delete_existing_background')) {
            if ($hero->background_image && Storage::disk('public')->exists($hero->background_image)) {
                Storage::disk('public')->delete($hero->background_image);
            }
            $data['background_image'] = null;
        } else {
            unset($data['background_image']);
        }

        $this->service->update($hero, $data);

        return back()->with('success', 'Hero section updated successfully');
    }

    
}
