import InputError from '@/components/input-error';
import AdminLayout from '@/layouts/admin-layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Head, useForm } from '@inertiajs/react';
import { Save } from 'lucide-react';
import { toast } from 'sonner';
import React from 'react';

interface Banner {
  id: number;
  title: string;
  subtitle: string | null;
  additional_info: string | null;
}

interface Props {
  banner: Banner | null;
}

export default function Edit({ banner }: Props) {
  const { data, setData, post, processing, errors } = useForm({
    title: banner?.title ?? '',
    subtitle: banner?.subtitle ?? '',
    additional_info: banner?.additional_info ?? '',
    _method: 'PUT',
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    post(route('admin.pm.about-banner.update', banner?.id ?? 1), {
      onSuccess: () => toast.success('Banner updated successfully'),
      onError: () => toast.error('Failed to update banner. Please check the form.'),
    });
  };

  return (
    <AdminLayout activeSlug="about-banner">
      <Head title="Edit About Banner" />

      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold">Edit About Banner</h1>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Banner</CardTitle>
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

                    <div className="grid gap-2">
                      <Label htmlFor="additional_info">Additional Info</Label>
                      <Textarea
                        id="additional_info"
                        name="additional_info"
                        value={data.additional_info}
                        onChange={(event) => setData('additional_info', event.target.value)}
                        rows={6}
                      />
                      <InputError message={errors.additional_info} />
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
                        {processing ? 'Saving...' : 'Save Banner'}
                      </Button>
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
