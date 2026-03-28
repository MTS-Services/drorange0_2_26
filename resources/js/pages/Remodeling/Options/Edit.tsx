import React, { useEffect, useState } from 'react';
import { Head, useForm } from '@inertiajs/react';
import { toast } from 'sonner';
import { Save } from 'lucide-react';
import AdminLayout from '@/layouts/admin-layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import InputError from '@/components/input-error';
import FileUpload from '@/components/file-upload';
import { Link } from '@inertiajs/react';
import { usePage } from '@inertiajs/react';

interface RemodelingOption {
    id: number;
    title?: string;
    subtitle?: string;
    icon?: string;
    icon_url?: string;
    created_at?: string;
    updated_at?: string;
}

export default function Edit() {
    const { props } = usePage<{ option: RemodelingOption }>();
    const option = props.option;

    const { data, setData, post, processing, errors } = useForm({
        title: option?.title ?? '',
        subtitle: option?.subtitle ?? '',
        icon: null as File | null,
        delete_existing_icon: false,
        _method: 'PUT',
    });

    const [existingIcons, setExistingIcons] = useState<any[]>([]);

    useEffect(() => {
        if (option?.icon_url) {
            setExistingIcons([
                {
                    id: option.id,
                    url: option.icon_url,
                    name: option?.icon?.split('/').pop() || 'icon',
                    mime_type: 'image/*',
                    path: option.icon_url,
                },
            ]);
        } else {
            setExistingIcons([]);
        }
    }, [option?.icon, option?.icon_url, option?.id]);

    const handleRemoveExistingIcon = () => {
        if (
            confirm(
                'Are you sure you want to remove this file? You must upload a new file to save the changes.',
            )
        ) {
            setExistingIcons([]);
            setData('delete_existing_icon', true);
            setData('icon', null);
        }
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        post(route('admin.pm.remodeling-option.update', option?.id ?? 1), {
            forceFormData: true,
            onSuccess: () => toast.success('Option updated successfully'),
            onError: () => toast.error('Failed to update option. Please check the form.'),
        });
    };

    return (
        <AdminLayout activeSlug="remodeling-option">
            <Head title="Edit Remodeling Option" />

            <div className="flex justify-between mb-6">
                <h1 className="text-2xl font-bold">Edit Remodeling Option</h1>
                <Link href={route('admin.pm.remodeling-option.index')}>
                    <Button>Back</Button>
                </Link>
            </div>

            <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>Option Details</CardTitle>
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
                                                onRemoveExisting={handleRemoveExistingIcon}
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
                                    <CardContent className="space-y-4">
                                        <div>
                                            <Label className="text-sm text-muted-foreground">Created At</Label>
                                            <p className="mt-1 text-sm font-medium">
                                                {option?.created_at
                                                    ? new Date(option.created_at).toLocaleDateString()
                                                    : 'N/A'}
                                            </p>
                                        </div>

                                        <div>
                                            <Label className="text-sm text-muted-foreground">Updated At</Label>
                                            <p className="mt-1 text-sm font-medium">
                                                {option?.updated_at
                                                    ? new Date(option.updated_at).toLocaleDateString()
                                                    : 'N/A'}
                                            </p>
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
                                                {processing ? 'Updating...' : 'Update Option'}
                                            </Button>
                                            <Link href={route('admin.pm.remodeling-option.index')}>
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