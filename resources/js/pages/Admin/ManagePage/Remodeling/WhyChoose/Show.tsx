import AdminLayout from '@/layouts/admin-layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Head, Link } from '@inertiajs/react';
import React from 'react';

interface Item {
  id: number;
  title: string;
  subtitle: string;
  icon_url?: string | null;
  created_at?: string;
  updated_at?: string;
}

interface Props {
  option: Item;
}

export default function Show({ option }: Props) {
  return (
    <AdminLayout activeSlug="remodeling-why-choose">
      <Head title="Remodeling Why Choose Details" />

      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold">Remodeling Why Choose Details</h1>
        <Link href={route('admin.pm.remodeling-why-choose.index')}>
          <Button>Back</Button>
        </Link>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <h2 className="text-2xl font-bold">Why Choose Section</h2>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="space-y-6 lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Item Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-2">
                    <p className="text-sm text-muted-foreground">Title</p>
                    <p className="font-medium">{option.title}</p>
                  </div>

                  <div className="grid gap-2">
                    <p className="text-sm text-muted-foreground">Subtitle</p>
                    <p className="font-medium">{option.subtitle}</p>
                  </div>

                  <div className="grid gap-2">
                    <p className="text-sm text-muted-foreground">Icon</p>
                    {option.icon_url ? (
                      <img src={option.icon_url} alt={option.title} className="h-16 w-16 rounded border object-contain" />
                    ) : (
                      <span className="text-sm text-muted-foreground">No icon uploaded</span>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Insights</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <div>
                    <div>Created At</div>
                    <div className="font-medium text-foreground">
                      {option.created_at ? new Date(option.created_at).toLocaleDateString() : 'N/A'}
                    </div>
                  </div>
                  <div>
                    <div>Updated At</div>
                    <div className="font-medium text-foreground">
                      {option.updated_at ? new Date(option.updated_at).toLocaleDateString() : 'N/A'}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Action</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 pt-2">
                  <div className="flex flex-col gap-3 lg:flex-row lg:gap-2">
                    <Link href={route('admin.pm.remodeling-why-choose.edit', option.id)} className="flex-1">
                      <Button className="w-full">Edit</Button>
                    </Link>
                    <Link href={route('admin.pm.remodeling-why-choose.index')} className="flex-1">
                      <Button type="button" variant="outline" className="w-full">
                        Cancel
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>
    </AdminLayout>
  );
}
