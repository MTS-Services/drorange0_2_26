import AdminLayout from '@/layouts/admin-layout';
import FileUpload from '@/components/file-upload';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Head, Link, useForm } from '@inertiajs/react';
import { Save } from 'lucide-react';
import React, { useEffect, useMemo, useState } from 'react';

interface Item {
    id: number;
    title: string;
    subtitle: string;
    icon?: string | null;
    icon_url?: string | null;
    created_at?: string;
    updated_at?: string;
}

interface Props {
    item: Item;
}

export default function Edit({ item }: Props) {
    const existingFile = useMemo(() => {
        if (!item.icon_url) return [] as any[];
        const name = item.icon?.split('/').pop() || 'icon';
        return [{ id: item.id, url: item.icon_url, name, mime_type: 'image/*', path: item.icon_url }];
    }, [item]);

    const [existingIcons, setExistingIcons] = useState<any[]>(existingFile);

    const { data, setData, post, processing, errors, wasSuccessful } = useForm({
        _method: 'put',
        title: item.title ?? '',
        subtitle: item.subtitle ?? '',
        icon: null as File | null,
        delete_existing_icon: false,
    });

    useEffect(() => {
        if (wasSuccessful) {
            setData('icon', null);
        }
    }, [wasSuccessful, setData]);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        post(route('admin.pm.stay-informed.update', item.id), {
            forceFormData: true,
        });
    };

    return (
        <AdminLayout activeSlug="stay-informed">
            <Head title="Edit Stay Informed" />

            <div className="flex justify-between mb-6">
                <h1 className="text-2xl font-bold">Edit Stay Informed Item</h1>
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
                        <div className="grid gap-4 lg:grid-cols-3">
                            <div className="lg:col-span-2 space-y-4">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Content</CardTitle>
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

                            <div className="space-y-4">
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-lg">Action</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-3">
                                        <Button type="submit" disabled={processing} className="w-full gap-2">
                                            <Save className="h-4 w-4" />
                                            {processing ? 'Updating...' : 'Update Item'}
                                        </Button>
                                        <Link href={route('admin.pm.stay-informed.index')}>
                                            <Button type="button" variant="outline" className="w-full">
                                                Cancel
                                            </Button>
                                        </Link>
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
