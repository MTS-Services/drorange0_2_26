<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Services\DataTableService;
use App\Services\RemodelingWhatIncludeService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;

class RemodelingWhatIncludeController extends Controller
{
    public function __construct(
        protected RemodelingWhatIncludeService $service,
        protected DataTableService $dataTableService,
    ) {
    }

    public function index(): Response
    {
        $query = $this->service->getQuery();
        $result = $this->dataTableService->process($query, request(), [
            'searchable' => ['title', 'subtitle'],
            'filterable' => ['title', 'subtitle'],
            'sortable' => ['title', 'subtitle', 'created_at', 'updated_at'],
        ]);

        return Inertia::render('Admin/ManagePage/Remodeling/WhatInclude/Index', [
            'includes' => $result['data'],
            'pagination' => $result['pagination'],
            'offset' => $result['offset'],
            'filters' => $result['filters'],
            'search' => $result['search'],
            'sortBy' => $result['sort_by'],
            'sortOrder' => $result['sort_order'],
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('Admin/ManagePage/Remodeling/WhatInclude/Create');
    }

    public function store(Request $request): RedirectResponse
    {
        $data = $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'subtitle' => ['required', 'string', 'max:255'],
            'icon' => ['required', 'file', 'image', 'max:2048'],
        ]);

        if ($request->hasFile('icon')) {
            $iconName = 'remodel_include_' . time() . '_' . Str::random(8) . '.' . $request->file('icon')->getClientOriginalExtension();
            $data['icon'] = $request->file('icon')->storeAs('images', $iconName, 'public');
        }

        $this->service->create($data);

        return redirect()->route('admin.pm.remodeling-what-include.index')->with('success', 'Item created successfully.');
    }

    public function show(int $id): Response
    {
        $include = $this->service->find($id)->firstOrFail();

        return Inertia::render('Admin/ManagePage/Remodeling/WhatInclude/Show', [
            'include' => $include,
        ]);
    }

    public function edit(int $id): Response
    {
        $include = $this->service->find($id)->firstOrFail();

        return Inertia::render('Admin/ManagePage/Remodeling/WhatInclude/Edit', [
            'include' => $include,
        ]);
    }

    public function update(Request $request, int $id): RedirectResponse
    {
        $include = $this->service->find($id)->firstOrFail();

        $data = $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'subtitle' => ['required', 'string', 'max:255'],
            'icon' => ['nullable', 'file', 'image', 'max:2048'],
            'delete_existing_icon' => ['nullable', 'boolean'],
        ]);

        if ($request->hasFile('icon')) {
            if ($include->icon) {
                Storage::disk('public')->delete($include->icon);
            }
            $iconName = 'remodel_include_' . time() . '_' . Str::random(8) . '.' . $request->file('icon')->getClientOriginalExtension();
            $data['icon'] = $request->file('icon')->storeAs('images', $iconName, 'public');
        } elseif ($request->boolean('delete_existing_icon')) {
            if ($include->icon) {
                Storage::disk('public')->delete($include->icon);
            }
            $data['icon'] = null;
        }

        $include->update($data);

        return redirect()->route('admin.pm.remodeling-what-include.index')->with('success', 'Item updated successfully.');
    }

    public function destroy(int $id): RedirectResponse
    {
        $include = $this->service->find($id)->firstOrFail();

        if ($include->icon) {
            Storage::disk('public')->delete($include->icon);
        }

        $include->delete();

        return redirect()->route('admin.pm.remodeling-what-include.index')->with('success', 'Item deleted successfully.');
    }
}
