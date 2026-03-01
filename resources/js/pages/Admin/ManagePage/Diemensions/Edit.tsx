import InputError from '@/components/input-error';
import AdminLayout from '@/layouts/admin-layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Head, Link, useForm } from '@inertiajs/react';
import { Save } from 'lucide-react';
import { toast } from 'sonner';
import React from 'react';

interface ServiceType {
    id: number;
    name: string;
}

interface Diemension {
    id: number;
    name: string;
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
    dimension: Diemension;
    serviceTypes: ServiceType[];
}

export default function Edit({ dimension, serviceTypes }: Props) {
  const { data, setData, put, processing, errors } = useForm({
    name: dimension.name,
    service_type_id: dimension.service_type_id.toString(),
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    put(route('admin.sm.diemension.update', dimension.id), {
      onSuccess: () => toast.success('Dimension updated successfully'),
      onError: () => toast.error('Failed to update dimension. Please check the form.'),
    });
  };

  return (
    <AdminLayout activeSlug="diemension">
      <Head title={`Edit Dimension: ${dimension.name}`} />

      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold">Edit Dimension</h1>
        <Link href={route('admin.sm.diemension.index')}>
          <Button>Back</Button>
        </Link>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <h2 className="text-2xl font-bold">Dimension Details</h2>
          <div className="text-sm text-gray-500">
            ID: {dimension.id}
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              <div className="space-y-6 lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Basic Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid gap-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={data.name}
                        onChange={(event) => setData('name', event.target.value)}
                        required
                        placeholder="e.g., Small (5x8 or smaller)"
                      />
                      <InputError message={errors.name} />
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="service_type_id">Service Type</Label>
                      <Select
                        value={data.service_type_id}
                        onValueChange={(value) => setData('service_type_id', value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service type" />
                        </SelectTrigger>
                        <SelectContent>
                          {serviceTypes.map((serviceType) => (
                            <SelectItem key={serviceType.id} value={serviceType.id.toString()}>
                              {serviceType.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <InputError message={errors.service_type_id} />
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 pt-2">
                    <div className="flex flex-col gap-3">
                      <Button type="submit" disabled={processing} className="gap-2 w-full">
                        <Save className="h-4 w-4" />
                        {processing ? 'Updating...' : 'Update Dimension'}
                      </Button>
                      <Link href={route('admin.sm.diemension.index')}>
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
