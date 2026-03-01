<?php

namespace App\Http\Controllers\Admin;

use App\EstimateStatus;
use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\UpdateEstimateStatusRequest;
use App\Services\EstimateService;
use App\Services\DataTableService;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class EstimateController extends Controller
{
    public function __construct(
        protected EstimateService $service,
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
            'searchable' => ['estimate_id', 'service_type.name', 'option.name', 'diemension.name', 'current_setup.name'],
            'filterable' => ['estimate_status'],
            'sortable' => ['estimate_id', 'created_at', 'updated_at', 'estimate_status'],
        ]);
        
        return Inertia::render('Admin/ManagePage/Estimates/Index', [
            'estimates' => $result['data'],
            'pagination' => $result['pagination'],
            'offset' => $result['offset'],
            'filters' => $result['filters'],
            'search' => $result['search'],
            'sortBy' => $result['sort_by'],
            'sortOrder' => $result['sort_order'],
            'statusOptions' => collect(EstimateStatus::cases())->map(fn($status) => [
                'value' => $status->value,
                'label' => $status->getLabel(),
            ]),
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(int $id): Response
    {
        $estimate = $this->service->find($id)->firstOrFail();
        $statusHistory = $this->service->getStatusHistory($id);

        return Inertia::render('Admin/ManagePage/Estimates/Show', [
            'estimate' => $estimate,
            'statusHistory' => $statusHistory,
            'statusOptions' => collect(EstimateStatus::cases())->map(fn($status) => [
                'value' => $status->value,
                'label' => $status->getLabel(),
            ]),
        ]);
    }

    /**
     * Update the estimate status.
     */
    public function updateStatus(UpdateEstimateStatusRequest $request, int $id): RedirectResponse
    {
        $estimate = $this->service->find($id)->firstOrFail();

        $data = $request->validated();
        $status = EstimateStatus::from($data['estimate_status']);
        $message = $data['message'] ?? null;

        $this->service->updateStatus($id, $status, $message);

        return redirect()
            ->route('admin.estimates.show', $id)
            ->with('success', 'Estimate status updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(int $id): RedirectResponse
    {
        $estimate = $this->service->find($id)->firstOrFail();

        $this->service->delete($id);

        return redirect()
            ->route('admin.estimates.index')
            ->with('success', 'Estimate deleted successfully.');
    }
}
