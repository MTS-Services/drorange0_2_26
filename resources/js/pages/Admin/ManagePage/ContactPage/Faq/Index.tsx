import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/ui/data-table';
import { useDataTable } from '@/hooks/use-data-table';
import AdminLayout from '@/layouts/admin-layout';
import { ActionConfig, ColumnConfig, PaginationData } from '@/types/data-table.types';
import { Head, Link, router } from '@inertiajs/react';
import { Eye, Pencil, Trash2 } from 'lucide-react';
import React from 'react';

type Item = Record<string, unknown> & {
  id: number;
  question: string;
  answer: string;
  created_at: string;
  updated_at: string;
};

interface Props {
  items: Item[];
  pagination: PaginationData;
  offset: number;
  filters: Record<string, string | number>;
  search: string;
  sortBy: string;
  sortOrder: 'asc' | 'desc';
}

export default function Index({ items, pagination, offset, filters, search, sortBy, sortOrder }: Props) {
  const { isLoading, handleSearch, handleFilterChange, handleSort, handlePerPageChange, handlePageChange } = useDataTable();

  const columns: ColumnConfig<Item>[] = [
    {
      key: 'question',
      label: 'Question',
      sortable: true,
      render: (item) => <div className="font-medium text-gray-900 dark:text-gray-100">{item.question}</div>,
    },
    {
      key: 'answer',
      label: 'Answer',
      sortable: true,
      render: (item) => <div className="text-gray-700 dark:text-gray-300">{item.answer}</div>,
    },
    {
      key: 'created_at',
      label: 'Created Date',
      sortable: true,
      render: (item) => <div className="text-gray-600 dark:text-gray-400">{new Date(item.created_at).toLocaleDateString()}</div>,
    },
    {
      key: 'updated_at',
      label: 'Updated Date',
      sortable: true,
      render: (item) => <div className="text-gray-600 dark:text-gray-400">{new Date(item.updated_at).toLocaleDateString()}</div>,
    },
  ];

  const actions: ActionConfig<Item>[] = [
    {
      label: 'Show',
      icon: <Eye className="h-4 w-4" />,
      onClick: (item) => router.visit(route('admin.pm.contact-faq.show', item.id)),
    },
    {
      label: 'Edit',
      icon: <Pencil className="h-4 w-4" />,
      onClick: (item) => router.visit(route('admin.pm.contact-faq.edit', item.id)),
    },
    {
      label: 'Delete',
      icon: <Trash2 className="h-4 w-4" />,
      onClick: (item) => {
        if (confirm(`Are you sure you want to delete ${item.title}?`)) {
          router.delete(route('admin.pm.contact-faq.destroy', item.id));
        }
      },
      variant: 'destructive',
    },
  ];

  return (
    <AdminLayout activeSlug="contact-faq">
      <Head title="Contact FAQ" />

      <div className="flex justify-end mb-6">
        <Link href={route('admin.pm.contact-faq.create')}>
          <Button>Create FAQ</Button>
        </Link>
      </div>

      <div className="mx-auto">
        <DataTable
          data={items as Record<string, unknown>[]}
          columns={columns as ColumnConfig<Record<string, unknown>>[]}
          pagination={pagination}
          offset={offset}
          showNumbering
          actions={actions as ActionConfig<Record<string, unknown>>[]}
          onSearch={handleSearch}
          onFilterChange={handleFilterChange}
          onSort={handleSort}
          onPerPageChange={handlePerPageChange}
          onPageChange={handlePageChange}
          searchValue={search}
          filterValues={filters}
          sortBy={sortBy}
          sortOrder={sortOrder}
          isLoading={isLoading}
          emptyMessage="No FAQs found"
          searchPlaceholder="Search FAQs..."
        />
      </div>
    </AdminLayout>
  );
}
