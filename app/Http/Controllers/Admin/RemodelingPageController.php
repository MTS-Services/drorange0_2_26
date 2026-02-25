<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Services\RemodelingHeroService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class RemodelingPageController extends Controller
{
     public function __construct(
        protected RemodelingHeroService $remodelingService,
    ) {
    }
    public function editRemodelingHeroSection(): Response
    {
        $hero = $this->remodelingService->first();

        return Inertia::render('Admin/ManagePage/Remodeling/EditHeroSection', [
            'hero' => $hero,
        ]);
    }

    public function updateRemodelingHeroSection(Request $request): Response|\Illuminate\Http\RedirectResponse
    {
        $hero = $this->remodelingService->first();

        if (! $hero) {
            return back()->with('error', 'Remodeling hero section not found');
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
            $data['background_image'] = $request->file('background_image')->store('remodeling-hero', 'public');

            if ($hero->background_image && Storage::disk('public')->exists($hero->background_image)) {
                Storage::disk('public')->delete($hero->background_image);
            }
        } elseif ($request->boolean('delete_existing_background')) {
            if ($hero->background_image && Storage::disk('public')->exists($hero->background_image)) {
                Storage::disk('public')->delete($hero->background_image);
            }
            $data['background_image'] = null;
        } else {
            unset($data['background_image']);
        }

        $this->remodelingService->update($hero, $data);

        return back()->with('success', 'Remodeling hero section updated successfully');
    }
}
