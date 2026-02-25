
import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/ui/data-table';
import { useDataTable } from '@/hooks/use-data-table';
import AdminLayout from '@/layouts/admin-layout';
import { ActionConfig, ColumnConfig, PaginationData } from '@/types/data-table.types';
import { Head, Link, router } from '@inertiajs/react';
import { Eye, Pencil, Trash2 } from 'lucide-react';
import React from 'react'

interface Service {
    id: number;
    title: string;
    subtitle: string;
    icon: string;
    icon_url: string;
    created_at: string;
    updated_at: string;
}
interface Props {
    services: Service[];
    pagination: PaginationData;
    offset: number;
    filters: Record<string, string | number>;
    search: string;
    sortBy: string;
    sortOrder: "asc" | "desc";
}
export default function Index({services,pagination,offset,filters,search,sortBy,sortOrder}:Props) {
  const {
      isLoading,
      handleSearch,
      handleFilterChange,
      handleSort,
      handlePerPageChange,
      handlePageChange,
    } = useDataTable();

     const columns: ColumnConfig<Service>[] = [
      {
          key: "title",  
          label: "Title",
          sortable: true,
          render: (service) => (
            <div className="font-medium text-gray-900 dark:text-gray-100">
              {service.title}
            </div>
          ),
        },
        {
          key: "subtitle",  
          label: "Subtitle",
          sortable: true,
          render: (service) => (
            <div className="font-medium text-gray-900 dark:text-gray-100">
              {service.subtitle}
            </div>
          ),
        },
        {
          key: "icon",  
          label: "Icon",
          sortable: true,
          render: (service) => (
            <div className="font-medium text-gray-900 dark:text-gray-100">
            <img src={service.icon_url} alt={service.icon} />
            </div>
          ),
        },
        {
          key: "created_at",
          label: "Created Date",
          sortable: true,
          render: (service) => (
            <div className="text-gray-600 dark:text-gray-400">
              {new Date(service.created_at).toLocaleDateString()}
            </div>
          ),
        },
        {
          key: "updated_at",
          label: "Updated Date",
          sortable: true,
          render: (service) => (
            <div className="text-gray-600 dark:text-gray-400">
              {new Date(service.updated_at).toLocaleDateString()}
            </div>
          ),
        }
      ];

    const actions: ActionConfig<Service>[] = [
      {
        label: "Show",
        icon: <Eye className="h-4 w-4" />,
        onClick: (service) => {
          router.visit(route("admin.pm.service-section.show", service.id));
        },
      },
    {
      label: "Edit",
      icon: <Pencil className="h-4 w-4" />,
      onClick: (service) => {
        router.visit(route("admin.pm.service-section.edit", service.id));
      },
    },
    {
      label: "Delete",
      icon: <Trash2 className="h-4 w-4" />,
      onClick: (service) => {
        if (confirm(`Are you sure you want to delete ${service.id}?`)) {
          router.delete(route("admin.pm.service-section.destroy", service.id));
        }
      },
      variant: "destructive",
    },
  ];
  return (
     <AdminLayout activeSlug="service-section">
      <Head title="Antonyms" />

      <div className="flex justify-end mb-6">
        <Link href={route("admin.pm.service-section.create")}>
          <Button>Create Service</Button>
        </Link>
      </div>
     <div className="mx-auto">
        <DataTable
          data={services}   
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
          emptyMessage="No Service found"
          searchPlaceholder="Search Service..."
        />
      </div>
    </AdminLayout>
  )
}
