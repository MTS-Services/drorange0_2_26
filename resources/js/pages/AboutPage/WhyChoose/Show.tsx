import AdminLayout from '@/layouts/admin-layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
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
  item: Item;
}

export default function Show({ item }: Props) {
  return (
    <AdminLayout activeSlug="about-why-choose">
      <Head title="Why Choose Details" />

      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold text-primary">Why Choose Details</h1>
        <Link href={route('admin.pm.about-why-choose.index')}>
          <Button>Back</Button>
        </Link>
      </div>

      <Card className="shadow-sm">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Why Choose</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="space-y-6 lg:col-span-2">
              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg">Service Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-2">
                    <Label htmlFor="title">Title</Label>
                    <Input id="title" value={item.title} readOnly disabled className="bg-muted" />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="subtitle">Subtitle</Label>
                    <Input id="subtitle" value={item.subtitle} readOnly disabled className="bg-muted" />
                  </div>

                  <div className="grid gap-2">
                    <Label>Icon</Label>
                    {item.icon_url ? (
                      <img src={item.icon_url} alt={item.title} className="h-16 w-16 object-contain rounded" />
                    ) : (
                      <div className="text-sm text-muted-foreground">—</div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="shadow-sm">
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

              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg">Action</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-3">
                  <Link href={route('admin.pm.about-why-choose.edit', item.id)}>
                    <Button className="w-full">Edit</Button>
                  </Link>
                  <Link href={route('admin.pm.about-why-choose.index')}>
                    <Button variant="outline" className="w-full">Cancel</Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>
    </AdminLayout>
  );
}
