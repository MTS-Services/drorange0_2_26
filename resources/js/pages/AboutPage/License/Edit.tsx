import InputError from '@/components/input-error';
import AdminLayout from '@/layouts/admin-layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Head, Link, useForm } from '@inertiajs/react';
import { Save } from 'lucide-react';
import { toast } from 'sonner';
import React from 'react';

interface Item {
  id: number;
  title: string;
  subtitle: string | null;
  created_at?: string;
  updated_at?: string;
}

interface Props {
  item: Item;
}

export default function Edit({ item }: Props) {
  const { data, setData, post, processing, errors } = useForm({
    title: item.title ?? '',
    subtitle: item.subtitle ?? '',
    _method: 'PUT',
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    post(route('admin.pm.about-license.update', item.id), {
      onSuccess: () => toast.success('Item updated successfully'),
      onError: () => toast.error('Failed to update item. Please check the form.'),
    });
  };

  return (
    <AdminLayout activeSlug="about-license">
      <Head title="Edit License Item" />

      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold">Edit License Item</h1>
        <Link href={route('admin.pm.about-license.index')}>
          <Button>Back</Button>
        </Link>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>License / Certification</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              <div className="space-y-6 lg:col-span-2">
                <Card>
                  <CardContent className="space-y-4 pt-6">
                    <div className="grid gap-2">
                      <Label htmlFor="title">Title</Label>
                      <Input
                        id="title"
                        name="title"
                        value={data.title}
                        onChange={(event) => setData('title', event.target.value)}
                        required
                      />
                      <InputError message={errors.title} />
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="subtitle">Subtitle</Label>
                      <Input
                        id="subtitle"
                        name="subtitle"
                        value={data.subtitle}
                        onChange={(event) => setData('subtitle', event.target.value)}
                      />
                      <InputError message={errors.subtitle} />
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Action</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 pt-2">
                    <div className="flex flex-col gap-3">
                      <Button type="submit" disabled={processing} className="gap-2 w-full">
                        <Save className="h-4 w-4" />
                        {processing ? 'Updating...' : 'Update Item'}
                      </Button>
                      <Link href={route('admin.pm.about-license.index')}>
                        <Button type="button" variant="outline" className="w-full">
                          Cancel
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </AdminLayout>
  );
}
