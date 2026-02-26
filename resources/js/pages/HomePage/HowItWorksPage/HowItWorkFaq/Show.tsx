import AdminLayout from '@/layouts/admin-layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Head, Link } from '@inertiajs/react';
import React from 'react';

interface Item {
  id: number;
  title: string;
  subtitle: string;
  created_at?: string;
  updated_at?: string;
}

interface Props {
  item: Item;
}

export default function Show({ item }: Props) {
  return (
    <AdminLayout activeSlug="how-it-work-faq">
      <Head title="FAQ Details" />

      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold">FAQ Details</h1>
        <Link href={route('admin.pm.how-it-work-faq.index')}>
          <Button>Back</Button>
        </Link>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <h2 className="text-2xl font-bold">FAQ Section</h2>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="space-y-6 lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>FAQ Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-2">
                    <p className="text-sm text-muted-foreground">Title</p>
                    <p className="font-medium">{item.title}</p>
                  </div>

                  <div className="grid gap-2">
                    <p className="text-sm text-muted-foreground">Subtitle</p>
                    <p className="font-medium">{item.subtitle}</p>
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
                      {item.created_at ? new Date(item.created_at).toLocaleDateString() : 'N/A'}
                    </div>
                  </div>
                  <div>
                    <div>Updated At</div>
                    <div className="font-medium text-foreground">
                      {item.updated_at ? new Date(item.updated_at).toLocaleDateString() : 'N/A'}
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
                    <Link href={route('admin.pm.how-it-work-faq.edit', item.id)} className="flex-1">
                      <Button className="w-full">Edit</Button>
                    </Link>
                    <Link href={route('admin.pm.how-it-work-faq.index')} className="flex-1">
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
