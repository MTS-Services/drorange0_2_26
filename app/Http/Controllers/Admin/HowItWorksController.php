<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Services\DataTableService;
use App\Services\HowItWorksService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;

class HowItWorksController extends Controller
{
    public function __construct(protected HowItWorksService $service, protected DataTableService $dataTableService)
    {
    }

    public function index(): Response
    {
        $query = $this->service->getQuery();
        $result = $this->dataTableService->process($query, request(), [
            'searchable' => ['title', 'subtitle', 'time'],
            'filterable' => ['title', 'subtitle', 'time'],
            'sortable' => ['title', 'subtitle', 'time', 'created_at', 'updated_at'],
        ]);

        return Inertia::render('HomePage/HowItWorksPage/HowItWorks/Index', [
            'items' => $result['data'],
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
        return Inertia::render('HomePage/HowItWorksPage/HowItWorks/Create');
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'subtitle' => ['required', 'string', 'max:255'],
            'time' => ['required', 'string', 'max:255'],
            'icon' => ['required', 'file', 'image', 'max:2048'],
        ]);

        if ($request->hasFile('icon')) {
            $iconName = 'how_it_works_' . time() . '_' . Str::random(8) . '.' . $request->file('icon')->getClientOriginalExtension();
            $data['icon'] = $request->file('icon')->storeAs('images', $iconName, 'public');
        }

        $this->service->create($data);

        return redirect()
            ->route('admin.pm.how-it-works.index')
            ->with('success', 'Item created successfully.');
    }

    public function show(int $id): Response
    {
        $item = $this->service->find($id)->firstOrFail();

        return Inertia::render('HomePage/HowItWorksPage/HowItWorks/Show', [
            'item' => $item,
        ]);
    }

    public function edit(int $id): Response
    {
        $item = $this->service->find($id)->firstOrFail();

        return Inertia::render('HomePage/HowItWorksPage/HowItWorks/Edit', [
            'item' => $item,
        ]);
    }

    public function update(Request $request, int $id)
    {
        $item = $this->service->find($id)->firstOrFail();

        $data = $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'subtitle' => ['required', 'string', 'max:255'],
            'time' => ['required', 'string', 'max:255'],
            'icon' => ['nullable', 'file', 'image', 'max:2048'],
            'delete_existing_icon' => ['nullable', 'boolean'],
        ]);

        if ($request->hasFile('icon')) {
            if ($item->icon) {
                Storage::disk('public')->delete($item->icon);
            }
            $iconName = 'how_it_works_' . time() . '_' . Str::random(8) . '.' . $request->file('icon')->getClientOriginalExtension();
            $data['icon'] = $request->file('icon')->storeAs('images', $iconName, 'public');
        } elseif ($request->boolean('delete_existing_icon')) {
            if ($item->icon) {
                Storage::disk('public')->delete($item->icon);
            }
            $data['icon'] = null;
        } else {
            unset($data['icon']);
        }

        unset($data['delete_existing_icon']);

        $this->service->update($item->id, $data);

        return redirect()
            ->route('admin.pm.how-it-works.index')
            ->with('success', 'Item updated successfully.');
    }

    public function destroy(int $id)
    {
        $item = $this->service->find($id)->firstOrFail();

        if ($item->icon) {
            Storage::disk('public')->delete($item->icon);
        }

        $this->service->delete($item->id);

        return redirect()
            ->route('admin.pm.how-it-works.index')
            ->with('success', 'Item deleted successfully.');
    }
}
