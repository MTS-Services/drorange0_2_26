import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/ui/data-table';
import { useDataTable } from '@/hooks/use-data-table';
import AdminLayout from '@/layouts/admin-layout';
import { ActionConfig, ColumnConfig, PaginationData } from '@/types/data-table.types';
import { Head, Link, router } from '@inertiajs/react';
import { Eye, Pencil, Trash2 } from 'lucide-react';
import React from 'react'

interface Option extends Record<string, unknown> {
    id: number;
    name: string;
    description: string | null;
    service_type_id: number;
    service_type: {
        id: number;
        name: string;
        slug: string;
    };
    created_at: string;
    updated_at: string;
}

interface Props {
    options: Option[];
    pagination: PaginationData;
    offset: number;
    filters: Record<string, string | number>;
    search: string;
    sortBy: string;
    sortOrder: "asc" | "desc";
    serviceTypes: Array<{id: number; name: string}>;
}

export default function Index({options, pagination, offset, filters, search, sortBy, sortOrder, serviceTypes}: Props) {
  const {
      isLoading,
      handleSearch,
      handleFilterChange,
      handleSort,
      handlePerPageChange,
      handlePageChange,
    } = useDataTable();

     const columns: ColumnConfig<Option>[] = [
      {
          key: "name",  
          label: "Name",
          sortable: true,
          render: (option) => (
            <div className="font-medium text-gray-900 dark:text-gray-100">
              {option.name}
            </div>
          ),
        },
        {
          key: "description",  
          label: "Description",
          sortable: true,
          render: (option) => (
            <div className="text-gray-600 dark:text-gray-400 max-w-xs truncate">
              {option.description || 'No description'}
            </div>
          ),
        },
        {
          key: "service_type",  
          label: "Service Type",
          sortable: true,
          render: (option) => (
            <div className="font-medium text-gray-900 dark:text-gray-100">
              {option.service_type?.name || 'N/A'}
            </div>
          ),
        },
        {
          key: "created_at",
          label: "Created Date",
          sortable: true,
          render: (option) => (
            <div className="text-gray-600 dark:text-gray-400">
              {new Date(option.created_at).toLocaleDateString()}
            </div>
          ),
        },
        {
          key: "updated_at",
          label: "Updated Date",
          sortable: true,
          render: (option) => (
            <div className="text-gray-600 dark:text-gray-400">
              {new Date(option.updated_at).toLocaleDateString()}
            </div>
          ),
        }
      ];

    const actions: ActionConfig<Option>[] = [
      {
        label: "Show",
        icon: <Eye className="h-4 w-4" />,
        onClick: (option) => {
          router.visit(route("admin.sm.option.show", option.id));
        },
      },
    {
      label: "Edit",
      icon: <Pencil className="h-4 w-4" />,
      onClick: (option) => {
        router.visit(route("admin.sm.option.edit", option.id));
      },
    },
    {
      label: "Delete",
      icon: <Trash2 className="h-4 w-4" />,
      onClick: (option) => {
        if (confirm(`Are you sure you want to delete ${option.name}?`)) {
          router.delete(route("admin.sm.option.destroy", option.id));
        }
      },
      variant: "destructive",
    },
  ];

  return (
     <AdminLayout activeSlug="option">
      <Head title="Options" />

      <div className="flex justify-end mb-6">
        <Link href={route("admin.sm.option.create")}>
          <Button>Create Option</Button>
        </Link>
      </div>
     <div className="mx-auto">
        <DataTable
          data={options}   
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
          emptyMessage="No Options found"
          searchPlaceholder="Search Options..."
        />
      </div>
    </AdminLayout>
  )
}
