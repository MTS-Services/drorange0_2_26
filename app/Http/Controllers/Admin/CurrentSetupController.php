<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\StoreCurrentSetupRequest;
use App\Http\Requests\Admin\UpdateCurrentSetupRequest;
use App\Services\CurrentSetupService;
use App\Services\DataTableService;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class CurrentSetupController extends Controller
{
    public function __construct(
        protected CurrentSetupService $service,
        protected DataTableService $dataTableService
    ) {
    }

    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        $query = $this->service->getQuery();
        $result = $this->dataTableService->process($query, request(), [
            'searchable' => ['name'],
            'filterable' => ['name'],
            'sortable' => ['name', 'created_at', 'updated_at'],
        ]);
        
        return Inertia::render('Admin/ManagePage/CurrentSetups/Index', [
            'currentSetups' => $result['data'],
            'pagination' => $result['pagination'],
            'offset' => $result['offset'],
            'filters' => $result['filters'],
            'search' => $result['search'],
            'sortBy' => $result['sort_by'],
            'sortOrder' => $result['sort_order'],
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        return Inertia::render('Admin/ManagePage/CurrentSetups/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCurrentSetupRequest $request): RedirectResponse
    {
        $data = $request->validated();

        $this->service->create($data);

        return redirect()
            ->route('admin.sm.current-setup.index')
            ->with('success', 'Current setup created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(int $id): Response
    {
        $currentSetup = $this->service->find($id)->firstOrFail();

        return Inertia::render('Admin/ManagePage/CurrentSetups/Show', [
            'currentSetup' => $currentSetup,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(int $id): Response
    {
        $currentSetup = $this->service->find($id)->firstOrFail();

        return Inertia::render('Admin/ManagePage/CurrentSetups/Edit', [
            'currentSetup' => $currentSetup,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCurrentSetupRequest $request, int $id): RedirectResponse
    {
        $currentSetup = $this->service->find($id)->firstOrFail();

        $data = $request->validated();

        $this->service->update($id, $data);

        return redirect()
            ->route('admin.sm.current-setup.index')
            ->with('success', 'Current setup updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(int $id): RedirectResponse
    {
        $currentSetup = $this->service->find($id)->firstOrFail();

        $this->service->delete($id);

        return redirect()
            ->route('admin.sm.current-setup.index')
            ->with('success', 'Current setup deleted successfully.');
    }
}
