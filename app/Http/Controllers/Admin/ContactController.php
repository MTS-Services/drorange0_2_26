<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Services\MessageService;
use App\Services\DataTableService;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class ContactController extends Controller
{
    public function __construct(protected MessageService $service, protected DataTableService $dataTableService)
    {
    }

    public function index(): Response
    {
        $query = $this->service->getQuery();
        $result = $this->dataTableService->process($query, request(), [
            'searchable' => ['name', 'email', 'subject'],
            'filterable' => ['name', 'email', 'subject', 'seen'],
            'sortable' => ['name', 'email', 'subject', 'seen', 'created_at', 'updated_at'],
        ]);

        return Inertia::render('Admin/ManagePage/ContactPage/Message/Index', [
            'items' => $result['data'],
            'pagination' => $result['pagination'],
            'offset' => $result['offset'],
            'filters' => $result['filters'],
            'search' => $result['search'],
            'sortBy' => $result['sort_by'],
            'sortOrder' => $result['sort_order'],
        ]);
    }

    public function show(int $id): Response
    {
        $message = $this->service->getById($id);
        
        // Mark as seen
        if (!$message->seen) {
            $this->service->update($id, ['seen' => true]);
            $message->refresh();
        }

        return Inertia::render('Admin/ManagePage/ContactPage/Message/Show', [
            'message' => $message,
        ]);
    }

    public function destroy(int $id): RedirectResponse
    {
        $this->service->delete($id);

        return back()->with('success', 'Message deleted successfully');
    }
}
