import FileUpload from '@/components/file-upload';
import InputError from '@/components/input-error';
import AdminLayout from '@/layouts/admin-layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Head, Link, useForm } from '@inertiajs/react';
import { Save } from 'lucide-react';
import { toast } from 'sonner';
import React, { useMemo, useState } from 'react';

interface IncludeItem {
  id: number;
  title: string;
  subtitle: string;
  icon: string | null;
  icon_url?: string | null;
  created_at?: string;
  updated_at?: string;
}

interface Props {
  include: IncludeItem;
}

export default function Edit({ include }: Props) {
  const existingFile = useMemo(() => {
    if (!include.icon_url) {
      return [] as any[];
    }
    const name = include.icon?.split('/').pop() || 'icon';
    return [
      {
        id: include.id,
        url: include.icon_url,
        name,
        mime_type: 'image/*',
        path: include.icon_url,
      },
    ];
  }, [include]);

  const [existingIcons, setExistingIcons] = useState<any[]>(existingFile);

  const { data, setData, post, processing, errors } = useForm({
    title: include.title ?? '',
    subtitle: include.subtitle ?? '',
    icon: null as File | null,
    _method: 'PUT',
    delete_existing_icon: false,
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    post(route('admin.pm.remodeling-what-include.update', include.id), {
      forceFormData: true,
      onSuccess: () => toast.success('Item updated successfully'),
      onError: () => toast.error('Failed to update item. Please check the form.'),
    });
  };

  return (
    <AdminLayout activeSlug="remodeling-what-include">
      <Head title="Edit Remodeling Item" />

      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold">Edit Remodeling Item</h1>
        <Link href={route('admin.pm.remodeling-what-include.index')}>
          <Button>Back</Button>
        </Link>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <h2 className="text-2xl font-bold">What Include Section</h2>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              <div className="space-y-6 lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Item Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
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
                        required
                      />
                      <InputError message={errors.subtitle} />
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="icon">Icon</Label>
                      <FileUpload
                        accept="image/*"
                        multiple={false}
                        existingFiles={existingIcons}
                        onChange={(file) => {
                          setData('icon', file as File);
                          setData('delete_existing_icon', false);
                        }}
                        onRemoveExisting={() => {
                          setExistingIcons([]);
                          setData('icon', null);
                          setData('delete_existing_icon', true);
                        }}
                      />
                      <InputError message={errors.icon} />
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
                        {include.created_at ? new Date(include.created_at).toLocaleDateString() : 'N/A'}
                      </div>
                    </div>
                    <div>
                      <div>Updated At</div>
                      <div className="font-medium text-foreground">
                        {include.updated_at ? new Date(include.updated_at).toLocaleDateString() : 'N/A'}
                      </div>
                    </div>
                  </CardContent>
                </Card>

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
                      <Link href={route('admin.pm.remodeling-what-include.index')}>
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
