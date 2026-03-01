import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/ui/data-table';
import { useDataTable } from '@/hooks/use-data-table';
import AdminLayout from '@/layouts/admin-layout';
import { ActionConfig, ColumnConfig, PaginationData } from '@/types/data-table.types';
import { Head, Link, router } from '@inertiajs/react';
import { Eye, Pencil, Trash2, Plus } from 'lucide-react';
import React from 'react'

interface CurrentSetup extends Record<string, unknown> {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
}

interface Props {
    currentSetups: CurrentSetup[];
    pagination: PaginationData;
    offset: number;
    filters: Record<string, string | number>;
    search: string;
    sortBy: string;
    sortOrder: "asc" | "desc";
}

export default function Index({currentSetups, pagination, offset, filters, search, sortBy, sortOrder}: Props) {
  const {
      isLoading,
      handleSearch,
      handleFilterChange,
      handleSort,
      handlePerPageChange,
      handlePageChange,
    } = useDataTable();

     const columns: ColumnConfig<CurrentSetup>[] = [
      {
          key: "name",  
          label: "Name",
          sortable: true,
          render: (currentSetup) => (
            <div className="font-medium text-gray-900 dark:text-gray-100">
              {currentSetup.name}
            </div>
          ),
        },
        {
          key: "created_at",
          label: "Created Date",
          sortable: true,
          render: (currentSetup) => (
            <div className="text-gray-600 dark:text-gray-400">
              {new Date(currentSetup.created_at).toLocaleDateString()}
            </div>
          ),
        },
        {
          key: "updated_at",
          label: "Updated Date",
          sortable: true,
          render: (currentSetup) => (
            <div className="text-gray-600 dark:text-gray-400">
              {new Date(currentSetup.updated_at).toLocaleDateString()}
            </div>
          ),
        }
      ];

    const actions: ActionConfig<CurrentSetup>[] = [
      {
        label: "Show",
        icon: <Eye className="h-4 w-4" />,
        onClick: (currentSetup) => {
          router.visit(route("admin.sm.current-setup.show", currentSetup.id));
        },
      },
    {
      label: "Edit",
      icon: <Pencil className="h-4 w-4" />,
      onClick: (currentSetup) => {
        router.visit(route("admin.sm.current-setup.edit", currentSetup.id));
      },
    },
    {
      label: "Delete",
      icon: <Trash2 className="h-4 w-4" />,
      onClick: (currentSetup) => {
        if (confirm(`Are you sure you want to delete ${currentSetup.name}?`)) {
          router.delete(route("admin.sm.current-setup.destroy", currentSetup.id));
        }
      },
      variant: "destructive",
    },
  ];

  return (
     <AdminLayout activeSlug="current-setup">
      <Head title="Current Setups" />

      <div className="flex justify-end mb-6">
        <Link href={route("admin.sm.current-setup.create")}>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Create Current Setup
          </Button>
        </Link>
      </div>
     <div className="mx-auto">
        <DataTable
          data={currentSetups}   
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
          emptyMessage="No Current Setups found"
          searchPlaceholder="Search Current Setups..."
        />
      </div>
    </AdminLayout>
  )
}
