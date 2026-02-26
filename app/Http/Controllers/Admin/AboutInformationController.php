<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Services\AboutInformationService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class AboutInformationController extends Controller
{
    public function __construct(protected AboutInformationService $service)
    {
    }

    public function edit(?\App\Models\AboutInformation $aboutInformation = null): Response
    {
        $info = $aboutInformation ?? $this->service->getFirst();

        return Inertia::render('AboutPage/AboutInformation/Edit', [
            'info' => $info,
        ]);
    }

    public function update(Request $request, ?\App\Models\AboutInformation $aboutInformation = null): RedirectResponse
    {
        $data = $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'content' => ['required', 'string'],
        ]);

        $this->service->updateOrCreate($data);

        return back()->with('success', 'About information updated successfully.');
    }
}
