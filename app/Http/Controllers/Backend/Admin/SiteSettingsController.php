<?php

namespace App\Http\Controllers\Backend\Admin;

use App\Http\Controllers\Controller;
use App\Services\SiteSettingService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;

class SiteSettingsController extends Controller
{

    public function __construct(protected SiteSettingService $service) {}
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $siteSetting = $this->service->getSiteSetting();



        return Inertia::render('Admin/SiteSettings/Index', [
            'SiteSetting' => $siteSetting
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $siteSetting = $this->service->find($id);

        if (!$siteSetting) {
            return back()->with('error', 'Site Setting not found');
        }

        $data =  $request->validate([
            'site_name' => 'nullable|string|max:255',
            'site_title' => 'nullable|string|max:255',
            'site_logo' => 'nullable|image|mimes:jpeg,png,jpg|max:2048',
            'site_favicon' => 'nullable|image|mimes:jpeg,png,jpg|max:2048',
            'delete_existing_logo' => 'nullable|boolean',
            'delete_existing_favicon' => 'nullable|boolean',
        ]);

        // Handle logo upload
        if ($request->hasFile('site_logo')) {
            if ($siteSetting->site_logo && Storage::disk('public')->exists($siteSetting->site_logo)) {
                Storage::disk('public')->delete($siteSetting->site_logo);
            }

            $logoFile = $request->file('site_logo');
            $logoName = 'logo_' . time() . '_' . Str::random(8) . '.' . $logoFile->getClientOriginalExtension();
            $data['site_logo'] = $logoFile->storeAs('images', $logoName, 'public');
        } elseif ($request->boolean('delete_existing_logo')) {
            if ($siteSetting->site_logo && Storage::disk('public')->exists($siteSetting->site_logo)) {
                Storage::disk('public')->delete($siteSetting->site_logo);
            }
            $data['site_logo'] = null;
        } else {
            unset($data['site_logo']);
        }

        // Handle favicon upload
        if ($request->hasFile('site_favicon')) {
            if ($siteSetting->site_favicon && Storage::disk('public')->exists($siteSetting->site_favicon)) {
                Storage::disk('public')->delete($siteSetting->site_favicon);
            }

            $faviconFile = $request->file('site_favicon');
            $faviconName = 'favicon_' . time() . '_' . Str::random(8) . '.' . $faviconFile->getClientOriginalExtension();
            $data['site_favicon'] = $faviconFile->storeAs('images', $faviconName, 'public');
        } elseif ($request->boolean('delete_existing_favicon')) {
            if ($siteSetting->site_favicon && Storage::disk('public')->exists($siteSetting->site_favicon)) {
                Storage::disk('public')->delete($siteSetting->site_favicon);
            }
            $data['site_favicon'] = null;
        } else {
            unset($data['site_favicon']);
        }

        $siteSetting->update($data);

        return back()->with('success', 'Site settings updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
