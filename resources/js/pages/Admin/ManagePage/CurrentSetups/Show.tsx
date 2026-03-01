import AdminLayout from '@/layouts/admin-layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Head, Link } from '@inertiajs/react';
import React from 'react';

interface CurrentSetup {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
}

interface Props {
    currentSetup: CurrentSetup;
}

export default function Show({ currentSetup }: Props) {
    return (
        <AdminLayout activeSlug="current-setup">
            <Head title="Current Setup Details" />

            <div className="flex justify-between mb-6">
                <h1 className="text-2xl font-bold">Current Setup Details</h1>
                <Link href={route('admin.sm.current-setup.index')}>
                    <Button>Back</Button>
                </Link>
            </div>

            <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                    <h2 className="text-2xl font-bold">Current Setup Section</h2>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                        <div className="space-y-6 lg:col-span-2">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Setup Details</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="grid gap-2">
                                        <p className="text-sm text-muted-foreground">Name</p>
                                        <p className="font-medium">{currentSetup.name}</p>
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
                                            {currentSetup.created_at ? new Date(currentSetup.created_at).toLocaleDateString() : 'N/A'}
                                        </div>
                                    </div>
                                    <div>
                                        <div>Updated At</div>
                                        <div className="font-medium text-foreground">
                                            {currentSetup.updated_at ? new Date(currentSetup.updated_at).toLocaleDateString() : 'N/A'}
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
                                        <Link href={route('admin.sm.current-setup.edit', currentSetup.id)} className="flex-1">
                                            <Button className="w-full">Edit</Button>
                                        </Link>
                                        <Link href={route('admin.sm.current-setup.index')} className="flex-1">
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
