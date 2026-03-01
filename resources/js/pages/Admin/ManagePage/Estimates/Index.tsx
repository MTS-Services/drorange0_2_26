import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/ui/data-table';
import { useDataTable } from '@/hooks/use-data-table';
import AdminLayout from '@/layouts/admin-layout';
import { ActionConfig, ColumnConfig, PaginationData } from '@/types/data-table.types';
import { Head, Link, router } from '@inertiajs/react';
import { Eye, Trash2 } from 'lucide-react';
import React from 'react'

interface Estimate extends Record<string, unknown> {
    id: number;
    estimate_id: string;
    estimate_status: string;
    service_type: { name: string };
    option: { name: string };
    diemension: { name: string };
    current_setup: { name: string };
    created_at: string;
    updated_at: string;
}

interface Props {
    estimates: Estimate[];
    pagination: PaginationData;
    offset: number;
    filters: Record<string, string | number>;
    search: string;
    sortBy: string;
    sortOrder: "asc" | "desc";
    statusOptions: Array<{ value: string; label: string }>;
}

export default function Index({estimates, pagination, offset, filters, search, sortBy, sortOrder, statusOptions}: Props) {
  const {
      isLoading,
      handleSearch,
      handleFilterChange,
      handleSort,
      handlePerPageChange,
      handlePageChange,
    } = useDataTable();

     const columns: ColumnConfig<Estimate>[] = [
      {
          key: "estimate_id",  
          label: "Estimate ID",
          sortable: true,
          render: (estimate) => (
            <div className="font-medium text-gray-900 dark:text-gray-100">
              {estimate.estimate_id}
            </div>
          ),
        },
        {
          key: "service_type.name",
          label: "Service Type",
          sortable: false,
          render: (estimate) => (
            <div className="text-gray-600 dark:text-gray-400">
              {estimate.service_type?.name || 'N/A'}
            </div>
          ),
        },
        {
          key: "option.name",
          label: "Option",
          sortable: false,
          render: (estimate) => (
            <div className="text-gray-600 dark:text-gray-400">
              {estimate.option?.name || 'N/A'}
            </div>
          ),
        },
        {
          key: "diemension.name",
          label: "Dimension",
          sortable: false,
          render: (estimate) => (
            <div className="text-gray-600 dark:text-gray-400">
              {estimate.diemension?.name || 'N/A'}
            </div>
          ),
        },
        {
          key: "current_setup.name",
          label: "Current Setup",
          sortable: false,
          render: (estimate) => (
            <div className="text-gray-600 dark:text-gray-400">
              {estimate.current_setup?.name || 'N/A'}
            </div>
          ),
        },
        {
          key: "estimate_status",
          label: "Status",
          sortable: true,
          render: (estimate) => {
            const status = statusOptions.find(s => s.value === estimate.estimate_status);
            const colorClass = estimate.estimate_status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                              estimate.estimate_status === 'review' ? 'bg-blue-100 text-blue-800' :
                              'bg-green-100 text-green-800';
            return (
              <span className={`px-2 py-1 text-xs font-medium rounded-full ${colorClass}`}>
                {status?.label || estimate.estimate_status}
              </span>
            );
          },
        },
        {
          key: "created_at",
          label: "Created Date",
          sortable: true,
          render: (estimate) => (
            <div className="text-gray-600 dark:text-gray-400">
              {new Date(estimate.created_at).toLocaleDateString()}
            </div>
          ),
        }
      ];

    const actions: ActionConfig<Estimate>[] = [
      {
        label: "View Details",
        icon: <Eye className="h-4 w-4" />,
        onClick: (estimate) => {
          router.visit(route("admin.estimates.show", estimate.id));
        },
      },
    {
      label: "Delete",
      icon: <Trash2 className="h-4 w-4" />,
      onClick: (estimate) => {
        if (confirm(`Are you sure you want to delete estimate ${estimate.estimate_id}?`)) {
          router.delete(route("admin.estimates.destroy", estimate.id));
        }
      },
      variant: "destructive",
    },
  ];

  return (
     <AdminLayout activeSlug="estimates">
      <Head title="Estimates" />

      <div className="mx-auto">
        <DataTable
          data={estimates}   
          columns={columns}
          pagination={pagination}
          offset={offset}
          showNumbering={true}
          actions={actions}
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
          emptyMessage="No estimates found"
          searchPlaceholder="Search estimates..."
          filters={[
            {
              key: 'estimate_status',
              label: 'Status',
              type: 'select',
              options: statusOptions,
            },
          ]}
        />
      </div>
    </AdminLayout>
  )
}
