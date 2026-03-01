import { Button } from '@/components/ui/button';
import AdminLayout from '@/layouts/admin-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Head, Link, router } from '@inertiajs/react';
import { ArrowLeft, Edit, Trash2, Plus } from 'lucide-react';
import { toast } from 'sonner';
import React from 'react';

interface Diemension {
    id: number;
    name: string;
    service_type_id: number;
    created_at: string;
    updated_at: string;
}

interface ServiceType {
    id: number;
    name: string;
    slug: string;
    price: number;
}

interface Props {
    serviceType: ServiceType;
    dimensions: Diemension[];
}

export default function Show({ serviceType, dimensions }: Props) {
    const handleDelete = (dimensionId: number, dimensionName: string) => {
        if (confirm(`Are you sure you want to delete "${dimensionName}"?`)) {
            router.delete(route('admin.sm.diemension.destroy', dimensionId), {
                onSuccess: () => toast.success('Dimension deleted successfully'),
                onError: () => toast.error('Failed to delete dimension'),
            });
        }
    };

    return (
        <AdminLayout activeSlug="diemension">
            <Head title={`Dimensions - ${serviceType.name}`} />

            <div className="flex justify-between mb-6">
                <div className="flex items-center gap-4">
                    <Link href={route('admin.sm.diemension.index')}>
                        <Button variant="outline" size="sm" className="gap-2">
                            <ArrowLeft className="h-4 w-4" />
                            Back
                        </Button>
                    </Link>
                    <h1 className="text-2xl font-bold">
                        Dimensions for {serviceType.name}
                    </h1>
                </div>
                <Link href={route('admin.sm.diemension.create')}>
                    <Button className="gap-2">
                        <Plus className="h-4 w-4" />
                        Create Dimension
                    </Button>
                </Link>
            </div>

            <Card className="mb-6">
                <CardHeader>
                    <CardTitle>Service Type Information</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <p className="text-sm text-muted-foreground">Name</p>
                            <p className="font-medium">{serviceType.name}</p>
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground">Price</p>
                            <p className="font-medium">${serviceType.price ? Number(serviceType.price).toFixed(2) : 'N/A'}</p>
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground">Total Dimensions</p>
                            <p className="font-medium">{dimensions.length}</p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <div className="grid grid-cols-1 gap-4">
                {dimensions.map((dimension) => (
                    <Card key={dimension.id}>
                        <CardContent className="flex items-center justify-between p-6">
                            <div>
                                <h3 className="font-semibold text-lg">{dimension.name}</h3>
                                <p className="text-sm text-muted-foreground">
                                    Created: {new Date(dimension.created_at).toLocaleDateString()}
                                </p>
                            </div>
                            <div className="flex gap-2">
                                <Link href={route('admin.sm.diemension.edit', dimension.id)}>
                                    <Button variant="outline" size="sm" className="gap-2">
                                        <Edit className="h-4 w-4" />
                                        Edit
                                    </Button>
                                </Link>
                                <Button
                                    variant="destructive"
                                    size="sm"
                                    className="gap-2"
                                    onClick={() => handleDelete(dimension.id, dimension.name)}
                                >
                                    <Trash2 className="h-4 w-4" />
                                    Delete
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {dimensions.length === 0 && (
                <Card>
                    <CardContent className="flex flex-col items-center justify-center py-12">
                        <div className="text-center space-y-4">
                            <h3 className="text-lg font-semibold">No Dimensions Found</h3>
                            <p className="text-muted-foreground">
                                No dimensions have been created for this service type yet.
                            </p>
                            <Link href={route('admin.sm.diemension.create')}>
                                <Button>Create First Dimension</Button>
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            )}
        </AdminLayout>
    );
}
