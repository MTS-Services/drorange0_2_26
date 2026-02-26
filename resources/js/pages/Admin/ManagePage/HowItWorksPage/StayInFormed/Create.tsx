import AdminLayout from '@/layouts/admin-layout';
import FileUpload from '@/components/file-upload';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Head, Link, useForm } from '@inertiajs/react';
import { Save } from 'lucide-react';
import React from 'react';

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        subtitle: '',
        icon: null as File | null,
    });

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        post(route('admin.pm.stay-informed.store'), {
            forceFormData: true,
        });
    };

    return (
        <AdminLayout activeSlug="stay-informed">
            <Head title="Add Stay Informed" />

            <div className="flex justify-between mb-6">
                <h1 className="text-2xl font-bold">Add Stay Informed Item</h1>
                <Link href={route('admin.pm.stay-informed.index')}>
                    <Button variant="outline">Back</Button>
                </Link>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Item Details</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid gap-4">
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
                                    onChange={(file) => setData('icon', file as File)}
                                />
                                <InputError message={errors.icon} />
                            </div>
                        </div>

                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
                            <Button type="submit" disabled={processing} className="gap-2">
                                <Save className="h-4 w-4" />
                                {processing ? 'Saving...' : 'Save Item'}
                            </Button>
                            <Link href={route('admin.pm.stay-informed.index')}>
                                <Button type="button" variant="outline">
                                    Cancel
                                </Button>
                            </Link>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </AdminLayout>
    );
}
