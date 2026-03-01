import AdminLayout from '@/layouts/admin-layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Head, Link } from '@inertiajs/react';
import React from 'react';

interface Option {
    id: number;
    name: string;
    description: string | null;
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
    option: Option;
}

export default function Show({ option }: Props) {
    return (
        <AdminLayout activeSlug="option">
            <Head title="Option Details" />

            <div className="flex justify-between mb-6">
                <h1 className="text-2xl font-bold">Option Details</h1>
                <Link href={route('admin.sm.option.index')}>
                    <Button>Back</Button>
                </Link>
            </div>

            <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                    <h2 className="text-2xl font-bold">Option Section</h2>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                        <div className="space-y-6 lg:col-span-2">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Option Details</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="grid gap-2">
                                        <p className="text-sm text-muted-foreground">Name</p>
                                        <p className="font-medium">{option.name}</p>
                                    </div>

                                    <div className="grid gap-2">
                                        <p className="text-sm text-muted-foreground">Description</p>
                                        <p className="text-gray-700 dark:text-gray-300">
                                            {option.description || 'No description provided'}
                                        </p>
                                    </div>

                                    <div className="grid gap-2">
                                        <p className="text-sm text-muted-foreground">Service Type</p>
                                        <p className="font-medium">
                                            {option.service_type?.name || 'N/A'}
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
                                            {option.created_at ? new Date(option.created_at).toLocaleDateString() : 'N/A'}
                                        </div>
                                    </div>
                                    <div>
                                        <div>Updated At</div>
                                        <div className="font-medium text-foreground">
                                            {option.updated_at ? new Date(option.updated_at).toLocaleDateString() : 'N/A'}
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
                                        <Link href={route('admin.sm.option.edit', option.id)} className="flex-1">
                                            <Button className="w-full">Edit</Button>
                                        </Link>
                                        <Link href={route('admin.sm.option.index')} className="flex-1">
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
