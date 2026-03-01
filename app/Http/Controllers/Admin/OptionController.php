<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\StoreOptionRequest;
use App\Http\Requests\Admin\UpdateOptionRequest;
use App\Services\DataTableService;
use App\Services\OptionService;
use App\Services\ServiceTypeService;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class OptionController extends Controller
{
    public function __construct(
        protected OptionService $service, 
        protected DataTableService $dataTableService,
        protected ServiceTypeService $serviceTypeService
    ) {
    }

    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        $query = $this->service->getQuery();
        $result = $this->dataTableService->process($query, request(), [
            'searchable' => ['name', 'description', 'serviceType.name'],
            'filterable' => ['name', 'description', 'service_type_id'],
            'sortable' => ['name', 'description', 'service_type_id', 'created_at', 'updated_at'],
        ]);
        
        return Inertia::render('Admin/ManagePage/Options/Index', [
            'options' => $result['data'],
            'pagination' => $result['pagination'],
            'offset' => $result['offset'],
            'filters' => $result['filters'],
            'search' => $result['search'],
            'sortBy' => $result['sort_by'],
            'sortOrder' => $result['sort_order'],
            'serviceTypes' => $this->serviceTypeService->getAll(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        return Inertia::render('Admin/ManagePage/Options/Create', [
            'serviceTypes' => $this->serviceTypeService->getAll(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreOptionRequest $request): RedirectResponse
    {
        $data = $request->validated();

        $this->service->create($data);

        return redirect()
            ->route('admin.sm.option.index')
            ->with('success', 'Option created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(int $id): Response
    {
        $option = $this->service->find($id)->firstOrFail();

        return Inertia::render('Admin/ManagePage/Options/Show', [
            'option' => $option,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(int $id): Response
    {
        $option = $this->service->find($id)->firstOrFail();

        return Inertia::render('Admin/ManagePage/Options/Edit', [
            'option' => $option,
            'serviceTypes' => $this->serviceTypeService->getAll(),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateOptionRequest $request, int $id): RedirectResponse
    {
        $option = $this->service->find($id)->firstOrFail();

        $data = $request->validated();

        $this->service->update($id, $data);

        return redirect()
            ->route('admin.sm.option.index')
            ->with('success', 'Option updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(int $id): RedirectResponse
    {
        $option = $this->service->find($id)->firstOrFail();

        $this->service->delete($id);

        return redirect()
            ->route('admin.sm.option.index')
            ->with('success', 'Option deleted successfully.');
    }
}
