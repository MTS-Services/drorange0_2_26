import AdminLayout from '@/layouts/admin-layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Head, Link } from '@inertiajs/react';
import React from 'react';

interface ServiceType {
    id: number;
    name: string;
    slug: string;
    price: number | null;
    created_at: string;
    updated_at: string;
}

interface Props {
    serviceType: ServiceType;
}

export default function Show({ serviceType }: Props) {
    return (
        <AdminLayout activeSlug="service-type">
            <Head title="Service Type Details" />

            <div className="flex justify-between mb-6">
                <h1 className="text-2xl font-bold">Service Type Details</h1>
                <Link href={route('admin.sm.service-type.index')}>
                    <Button>Back</Button>
                </Link>
            </div>

            <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                    <h2 className="text-2xl font-bold">Service Type Section</h2>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                        <div className="space-y-6 lg:col-span-2">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Service Type Details</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="grid gap-2">
                                        <p className="text-sm text-muted-foreground">Name</p>
                                        <p className="font-medium">{serviceType.name}</p>
                                    </div>

                                    <div className="grid gap-2">
                                        <p className="text-sm text-muted-foreground">Slug</p>
                                        <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-sm">
                                            {serviceType.slug}
                                        </code>
                                    </div>

                                    <div className="grid gap-2">
                                        <p className="text-sm text-muted-foreground">Price</p>
                                        <p className="font-medium">
                                            {serviceType.price ? `$${Number(serviceType.price).toFixed(2)}` : 'Not set'}
                                        </p>
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
                                            {serviceType.created_at ? new Date(serviceType.created_at).toLocaleDateString() : 'N/A'}
                                        </div>
                                    </div>
                                    <div>
                                        <div>Updated At</div>
                                        <div className="font-medium text-foreground">
                                            {serviceType.updated_at ? new Date(serviceType.updated_at).toLocaleDateString() : 'N/A'}
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
                                        <Link href={route('admin.sm.service-type.edit', serviceType.id)} className="flex-1">
                                            <Button className="w-full">Edit</Button>
                                        </Link>
                                        <Link href={route('admin.sm.service-type.index')} className="flex-1">
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
