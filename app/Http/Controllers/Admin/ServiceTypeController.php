<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\StoreServiceTypeRequest;
use App\Http\Requests\Admin\UpdateServiceTypeRequest;
use App\Services\DataTableService;
use App\Services\ServiceTypeService;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class ServiceTypeController extends Controller
{
    public function __construct(protected ServiceTypeService $service, protected DataTableService $dataTableService)
    {
    }
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        $query = $this->service->getQuery();
        $result = $this->dataTableService->process($query, request(), [
            'searchable' => ['name', 'slug', 'price'],
            'filterable' => ['name', 'slug', 'price'],
            'sortable' => ['name', 'slug', 'price', 'created_at', 'updated_at'],
        ]);
        
        return Inertia::render('Admin/ManagePage/ServiceTypes/Index', [
            'serviceTypes' => $result['data'],
            'pagination' => $result['pagination'],
            'offset' => $result['offset'],
            'filters' => $result['filters'],
            'search' => $result['search'],
            'sortBy' => $result['sort_by'],
            'sortOrder' => $result['sort_order']
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        return Inertia::render('Admin/ManagePage/ServiceTypes/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreServiceTypeRequest $request): RedirectResponse
    {
        $data = $request->validated();

        $data['slug'] = $this->service->createUniqueSlug($data['name']);

        $this->service->create($data);

        return redirect()
            ->route('admin.sm.service-type.index')
            ->with('success', 'Service type created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(int $id): Response
    {
        $serviceType = $this->service->find($id)->firstOrFail();

        return Inertia::render('Admin/ManagePage/ServiceTypes/Show', [
            'serviceType' => $serviceType,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(int $id): Response
    {
        $serviceType = $this->service->find($id)->firstOrFail();

        return Inertia::render('Admin/ManagePage/ServiceTypes/Edit', [
            'serviceType' => $serviceType,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateServiceTypeRequest $request, int $id): RedirectResponse
    {
        $serviceType = $this->service->find($id)->firstOrFail();

        $data = $request->validated();

        $data['slug'] = $this->service->createUniqueSlug($data['name'], $id);

        $this->service->update($id, $data);

        return redirect()
            ->route('admin.sm.service-type.index')
            ->with('success', 'Service type updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(int $id): RedirectResponse
    {
        $serviceType = $this->service->find($id)->firstOrFail();

        $this->service->delete($id);

        return redirect()
            ->route('admin.sm.service-type.index')
            ->with('success', 'Service type deleted successfully.');
    }
}
