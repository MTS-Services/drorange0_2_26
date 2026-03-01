import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/ui/data-table';
import { useDataTable } from '@/hooks/use-data-table';
import AdminLayout from '@/layouts/admin-layout';
import { ActionConfig, ColumnConfig, PaginationData } from '@/types/data-table.types';
import { Head, Link, router } from '@inertiajs/react';
import { Eye, Pencil, Trash2 } from 'lucide-react';
import React from 'react'

interface ServiceType extends Record<string, unknown> {
    id: number;
    name: string;
    slug: string;
    price: number | null;
    created_at: string;
    updated_at: string;
}

interface Props {
    serviceTypes: ServiceType[];
    pagination: PaginationData;
    offset: number;
    filters: Record<string, string | number>;
    search: string;
    sortBy: string;
    sortOrder: "asc" | "desc";
}

export default function Index({serviceTypes, pagination, offset, filters, search, sortBy, sortOrder}: Props) {
  const {
      isLoading,
      handleSearch,
      handleFilterChange,
      handleSort,
      handlePerPageChange,
      handlePageChange,
    } = useDataTable();

     const columns: ColumnConfig<ServiceType>[] = [
      {
          key: "name",  
          label: "Name",
          sortable: true,
          render: (serviceType) => (
            <div className="font-medium text-gray-900 dark:text-gray-100">
              {serviceType.name}
            </div>
          ),
        },
        {
          key: "slug",  
          label: "Slug",
          sortable: true,
          render: (serviceType) => (
            <div className="font-mono text-sm text-gray-600 dark:text-gray-400">
              {serviceType.slug}
            </div>
          ),
        },
        {
          key: "price",  
          label: "Price",
          sortable: true,
          render: (serviceType) => (
            <div className="font-medium text-gray-900 dark:text-gray-100">
              ${serviceType.price ? Number(serviceType.price).toFixed(2) : 'N/A'}
            </div>
          ),
        },
        {
          key: "created_at",
          label: "Created Date",
          sortable: true,
          render: (serviceType) => (
            <div className="text-gray-600 dark:text-gray-400">
              {new Date(serviceType.created_at).toLocaleDateString()}
            </div>
          ),
        },
        {
          key: "updated_at",
          label: "Updated Date",
          sortable: true,
          render: (serviceType) => (
            <div className="text-gray-600 dark:text-gray-400">
              {new Date(serviceType.updated_at).toLocaleDateString()}
            </div>
          ),
        }
      ];

    const actions: ActionConfig<ServiceType>[] = [
      {
        label: "Show",
        icon: <Eye className="h-4 w-4" />,
        onClick: (serviceType) => {
          router.visit(route("admin.sm.service-type.show", serviceType.id));
        },
      },
    {
      label: "Edit",
      icon: <Pencil className="h-4 w-4" />,
      onClick: (serviceType) => {
        router.visit(route("admin.sm.service-type.edit", serviceType.id));
      },
    },
    {
      label: "Delete",
      icon: <Trash2 className="h-4 w-4" />,
      onClick: (serviceType) => {
        if (confirm(`Are you sure you want to delete ${serviceType.name}?`)) {
          router.delete(route("admin.sm.service-type.destroy", serviceType.id));
        }
      },
      variant: "destructive",
    },
  ];

  return (
     <AdminLayout activeSlug="service-type">
      <Head title="Service Types" />

      <div className="flex justify-end mb-6">
        <Link href={route("admin.sm.service-type.create")}>
          <Button>Create Service Type</Button>
        </Link>
      </div>
     <div className="mx-auto">
        <DataTable
          data={serviceTypes}   
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
          emptyMessage="No Service Types found"
          searchPlaceholder="Search Service Types..."
        />
      </div>
    </AdminLayout>
  )
}
