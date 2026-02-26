<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\StoreStayInformedRequest;
use App\Http\Requests\Admin\UpdateStayInformedRequest;
use App\Services\DataTableService;
use App\Services\StayInformedService;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;

class StayInformedController extends Controller
{
    public function __construct(protected StayInformedService $service, protected DataTableService $dataTableService)
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

        return Inertia::render('Admin/ManagePage/HowItWorksPage/StayInFormed/Index', [
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
        return Inertia::render('Admin/ManagePage/HowItWorksPage/StayInFormed/Create');
    }

    public function store(StoreStayInformedRequest $request)
    {
        $data = $request->validated();

        if ($request->hasFile('icon')) {
            $iconName = 'stay_informed_' . time() . '_' . Str::random(8) . '.' . $request->file('icon')->getClientOriginalExtension();
            $data['icon'] = $request->file('icon')->storeAs('images', $iconName, 'public');
        }

        $this->service->create($data);

        return redirect()
            ->route('admin.pm.stay-informed.index')
            ->with('success', 'Item created successfully.');
    }

    public function show(int $id): Response
    {
        $item = $this->service->find($id)->firstOrFail();

        return Inertia::render('Admin/ManagePage/HowItWorksPage/StayInFormed/Show', [
            'item' => $item,
        ]);
    }

    public function edit(int $id): Response
    {
        $item = $this->service->find($id)->firstOrFail();

        return Inertia::render('Admin/ManagePage/HowItWorksPage/StayInFormed/Edit', [
            'item' => $item,
        ]);
    }

    public function update(UpdateStayInformedRequest $request, int $id)
    {
        $item = $this->service->find($id)->firstOrFail();
        $data = $request->validated();

        if ($request->hasFile('icon')) {
            if ($item->icon) {
                Storage::disk('public')->delete($item->icon);
            }
            $iconName = 'stay_informed_' . time() . '_' . Str::random(8) . '.' . $request->file('icon')->getClientOriginalExtension();
            $data['icon'] = $request->file('icon')->storeAs('images', $iconName, 'public');
        } elseif ($request->boolean('delete_existing_icon')) {
            if ($item->icon) {
                Storage::disk('public')->delete($item->icon);
            }
            $data['icon'] = null;
        }

        unset($data['delete_existing_icon']);

        $this->service->update($item->id, $data);

        return redirect()
            ->route('admin.pm.stay-informed.index')
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
            ->route('admin.pm.stay-informed.index')
            ->with('success', 'Item deleted successfully.');
    }
}
