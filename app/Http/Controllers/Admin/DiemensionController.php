<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\StoreDiemensionRequest;
use App\Http\Requests\Admin\UpdateDiemensionRequest;
use App\Services\DiemensionService;
use App\Services\ServiceTypeService;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class DiemensionController extends Controller
{
    public function __construct(
        protected DiemensionService $service,
        protected ServiceTypeService $serviceTypeService
    ) {
    }

    /**
     * Display all ServiceTypes with dimension counts.
     */
    public function index(): Response
    {
        $serviceTypes = $this->serviceTypeService->getAll()->map(function ($serviceType) {
            $serviceType->dimensions_count = $this->service->getDimensionsCountByServiceType($serviceType->id);
            return $serviceType;
        });

        return Inertia::render('Admin/ManagePage/Diemensions/Index', [
            'serviceTypes' => $serviceTypes,
        ]);
    }

    /**
     * Show dimensions for a specific service type.
     */
    public function show(int $serviceTypeId): Response
    {
        $serviceType = $this->serviceTypeService->find($serviceTypeId)->firstOrFail();
        $dimensions = $this->service->getByServiceType($serviceTypeId);

        return Inertia::render('Admin/ManagePage/Diemensions/Show', [
            'serviceType' => $serviceType,
            'dimensions' => $dimensions,
        ]);
    }

    /**
     * Show the form for creating a new dimension.
     */
    public function create(): Response
    {
        return Inertia::render('Admin/ManagePage/Diemensions/Create', [
            'serviceTypes' => $this->serviceTypeService->getAll(),
        ]);
    }

    /**
     * Store a newly created dimension in storage.
     */
    public function store(StoreDiemensionRequest $request): RedirectResponse
    {
        $data = $request->validated();

        $this->service->create($data);

        return redirect()
            ->route('admin.sm.diemension.index')
            ->with('success', 'Dimension created successfully.');
    }

    /**
     * Show the form for editing the specified dimension.
     */
    public function edit(int $id): Response
    {
        $dimension = $this->service->find($id)->firstOrFail();

        return Inertia::render('Admin/ManagePage/Diemensions/Edit', [
            'dimension' => $dimension,
            'serviceTypes' => $this->serviceTypeService->getAll(),
        ]);
    }

    /**
     * Update the specified dimension in storage.
     */
    public function update(UpdateDiemensionRequest $request, int $id): RedirectResponse
    {
        $dimension = $this->service->find($id)->firstOrFail();

        $data = $request->validated();

        $this->service->update($id, $data);

        return redirect()
            ->route('admin.sm.diemension.index')
            ->with('success', 'Dimension updated successfully.');
    }

    /**
     * Remove the specified dimension from storage.
     */
    public function destroy(int $id): RedirectResponse
    {
        $dimension = $this->service->find($id)->firstOrFail();

        $this->service->delete($id);

        return redirect()
            ->route('admin.sm.diemension.index')
            ->with('success', 'Dimension deleted successfully.');
    }
}
