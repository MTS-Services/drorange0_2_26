<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Services\DataTableService;
use App\Services\RemodelingWhyChooseService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;

class RemodelingWhyChooseController extends Controller
{
    public function __construct(protected RemodelingWhyChooseService $service, protected DataTableService $dataTableService)
    {
    }

    public function index(): Response
    {
        $query = $this->service->getQuery();
        $result = $this->dataTableService->process($query, request(), [
            'searchable' => ['title', 'subtitle'],
            'filterable' => ['title', 'subtitle'],
            'sortable' => ['title', 'subtitle', 'created_at', 'updated_at'],
        ]);

        return Inertia::render('Remodeling/WhyChoose/Index', [
            'options' => $result['data'],
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
        return Inertia::render('Remodeling/WhyChoose/Create');
    }

    public function store(Request $request): RedirectResponse
    {
        $data = $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'subtitle' => ['required', 'string', 'max:255'],
            'icon' => ['required', 'file', 'image', 'max:2048'],
        ]);

        if ($request->hasFile('icon')) {
            $iconName = 'remodeling_why_choose_' . time() . '_' . Str::random(8) . '.' . $request->file('icon')->getClientOriginalExtension();
            $data['icon'] = $request->file('icon')->storeAs('images', $iconName, 'public');
        }

        $this->service->create($data);

        return redirect()
            ->route('admin.pm.remodeling-why-choose.index')
            ->with('success', 'Why Choose item created successfully.');
    }

    public function show(int $id): Response
    {
        $option = $this->service->find($id)->firstOrFail();

        return Inertia::render('Remodeling/WhyChoose/Show', [
            'option' => $option,
        ]);
    }

    public function edit(int $id): Response
    {
        $option = $this->service->find($id)->firstOrFail();

        return Inertia::render('Remodeling/WhyChoose/Edit', [
            'option' => $option,
        ]);
    }

    public function update(Request $request, int $id): RedirectResponse
    {
        $option = $this->service->find($id)->firstOrFail();

        $data = $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'subtitle' => ['required', 'string', 'max:255'],
            'icon' => ['nullable', 'file', 'image', 'max:2048'],
            'delete_existing_icon' => ['nullable', 'boolean'],
        ]);

        if ($request->hasFile('icon')) {
            if ($option->icon) {
                Storage::disk('public')->delete($option->icon);
            }
            $iconName = 'remodeling_why_choose_' . time() . '_' . Str::random(8) . '.' . $request->file('icon')->getClientOriginalExtension();
            $data['icon'] = $request->file('icon')->storeAs('images', $iconName, 'public');
        } elseif ($request->boolean('delete_existing_icon')) {
            if ($option->icon) {
                Storage::disk('public')->delete($option->icon);
            }
            $data['icon'] = null;
        } else {
            unset($data['icon']);
        }

        unset($data['delete_existing_icon']);

        $option->update($data);

        return redirect()
            ->route('admin.pm.remodeling-why-choose.index')
            ->with('success', 'Why Choose item updated successfully.');
    }

    public function destroy(int $id): RedirectResponse
    {
        $option = $this->service->find($id)->firstOrFail();

        if ($option->icon) {
            Storage::disk('public')->delete($option->icon);
        }

        $option->delete();

        return redirect()
            ->route('admin.pm.remodeling-why-choose.index')
            ->with('success', 'Why Choose item deleted successfully.');
    }
}
