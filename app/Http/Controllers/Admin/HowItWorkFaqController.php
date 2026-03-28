<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Services\DataTableService;
use App\Services\HowItWorkFaqService;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class HowItWorkFaqController extends Controller
{
    public function __construct(protected HowItWorkFaqService $service, protected DataTableService $dataTableService)
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

        return Inertia::render('HomePage/HowItWorksPage/HowItWorkFaq/Index', [
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
        return Inertia::render('HomePage/HowItWorksPage/HowItWorkFaq/Create');
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'subtitle' => ['required', 'string', 'max:500'],
        ]);

        $this->service->create($data);

        return redirect()
            ->route('admin.pm.how-it-work-faq.index')
            ->with('success', 'FAQ created successfully.');
    }

    public function show(int $id): Response
    {
        $item = $this->service->find($id)->firstOrFail();

        return Inertia::render('HomePage/HowItWorksPage/HowItWorkFaq/Show', [
            'item' => $item,
        ]);
    }

    public function edit(int $id): Response
    {
        $item = $this->service->find($id)->firstOrFail();

        return Inertia::render('HomePage/HowItWorksPage/HowItWorkFaq/Edit', [
            'item' => $item,
        ]);
    }

    public function update(Request $request, int $id)
    {
        $item = $this->service->find($id)->firstOrFail();

        $data = $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'subtitle' => ['required', 'string', 'max:500'],
        ]);

        $this->service->update($item->id, $data);

        return redirect()
            ->route('admin.pm.how-it-work-faq.index')
            ->with('success', 'FAQ updated successfully.');
    }

    public function destroy(int $id)
    {
        $item = $this->service->find($id)->firstOrFail();

        $this->service->delete($item->id);

        return redirect()
            ->route('admin.pm.how-it-work-faq.index')
            ->with('success', 'FAQ deleted successfully.');
    }
}
