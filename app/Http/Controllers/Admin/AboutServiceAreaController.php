<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Services\AboutServiceAreaService;
use App\Services\DataTableService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class AboutServiceAreaController extends Controller
{
    public function __construct(protected AboutServiceAreaService $service, protected DataTableService $dataTableService)
    {
    }

    public function index(): Response
    {
        $query = $this->service->getQuery();
        $result = $this->dataTableService->process($query, request(), [
            'searchable' => ['title'],
            'filterable' => ['title'],
            'sortable' => ['title', 'created_at', 'updated_at'],
        ]);

        return Inertia::render('AboutPage/ServiceArea/Index', [
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
        return Inertia::render('AboutPage/ServiceArea/Create');
    }

    public function store(Request $request): RedirectResponse
    {
        $data = $request->validate([
            'title' => ['required', 'string', 'max:255'],
        ]);

        $this->service->create($data);

        return redirect()
            ->route('admin.pm.about-service-area.index')
            ->with('success', 'Service area created successfully.');
    }

    public function show(int $id): Response
    {
        $item = $this->service->find($id)->firstOrFail();

        return Inertia::render('AboutPage/ServiceArea/Show', [
            'item' => $item,
        ]);
    }

    public function edit(int $id): Response
    {
        $item = $this->service->find($id)->firstOrFail();

        return Inertia::render('AboutPage/ServiceArea/Edit', [
            'item' => $item,
        ]);
    }

    public function update(Request $request, int $id): RedirectResponse
    {
        $item = $this->service->find($id)->firstOrFail();

        $data = $request->validate([
            'title' => ['required', 'string', 'max:255'],
        ]);

        $this->service->update($item->id, $data);

        return redirect()
            ->route('admin.pm.about-service-area.index')
            ->with('success', 'Service area updated successfully.');
    }

    public function destroy(int $id): RedirectResponse
    {
        $item = $this->service->find($id)->firstOrFail();
        $this->service->delete($item->id);

        return redirect()
            ->route('admin.pm.about-service-area.index')
            ->with('success', 'Service area deleted successfully.');
    }
}
