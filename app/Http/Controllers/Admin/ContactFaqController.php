<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Services\ContactFaqService;
use App\Services\DataTableService;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ContactFaqController extends Controller
{
    public function __construct(protected ContactFaqService $service, protected DataTableService $dataTableService)
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

        return Inertia::render('Admin/ManagePage/ContactPage/Faq/Index', [
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
        return Inertia::render('Admin/ManagePage/ContactPage/Faq/Create');
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'question' => ['required', 'string', 'max:255'],
            'answer' => ['required', 'string', 'max:500'],
        ]);

        $this->service->create($data);

        return redirect()
            ->route('admin.pm.contact-faq.index')
            ->with('success', 'FAQ created successfully.');
    }

    public function show(int $id): Response
    {
        $item = $this->service->find($id)->firstOrFail();

        return Inertia::render('Admin/ManagePage/ContactPage/Faq/Show', [
            'item' => $item,
        ]);
    }

    public function edit(int $id): Response
    {
        $item = $this->service->find($id)->firstOrFail();

        return Inertia::render('Admin/ManagePage/ContactPage/Faq/Edit', [
            'item' => $item,
        ]);
    }

    public function update(Request $request, int $id)
    {
        $item = $this->service->find($id)->firstOrFail();

        $data = $request->validate([
            'question' => ['required', 'string', 'max:255'],
            'answer' => ['required', 'string', 'max:500'],
        ]);

        $this->service->update($item->id, $data);

        return redirect()
            ->route('admin.pm.contact-faq.index')
            ->with('success', 'FAQ updated successfully.');
    }

    public function destroy(int $id)
    {
        $item = $this->service->find($id)->firstOrFail();

        $this->service->delete($item->id);

        return redirect()
            ->route('admin.pm.contact-faq.index')
            ->with('success', 'FAQ deleted successfully.');
    }
}
