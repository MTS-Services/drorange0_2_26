import { Button } from '@/components/ui/button';
import AdminLayout from '@/layouts/admin-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Head, Link } from '@inertiajs/react';
import { Eye, Plus } from 'lucide-react';
import React from 'react';

interface ServiceType {
    id: number;
    name: string;
    slug: string;
    price: number;
    dimensions_count: number;
    created_at: string;
    updated_at: string;
}

interface Props {
    serviceTypes: ServiceType[];
}

export default function Index({ serviceTypes }: Props) {
    return (
        <AdminLayout activeSlug="diemension">
            <Head title="Dimensions" />

            <div className="flex justify-between mb-6">
                <h1 className="text-2xl font-bold">Dimensions</h1>
                <Link href={route('admin.sm.diemension.create')}>
                    <Button className="gap-2">
                        <Plus className="h-4 w-4" />
                        Create Dimension
                    </Button>
                </Link>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {serviceTypes.map((serviceType) => (
                    <Card key={serviceType.id} className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                            <CardTitle className="flex items-center justify-between">
                                <span>{serviceType.name}</span>
                                <span className="text-sm font-normal text-muted-foreground">
                                    {serviceType.dimensions_count} dimension{serviceType.dimensions_count !== 1 ? 's' : ''}
                                </span>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div className="text-sm text-muted-foreground">
                                    <div>Price: ${serviceType.price ? Number(serviceType.price).toFixed(2) : 'N/A'}</div>
                                    <div>Slug: {serviceType.slug}</div>
                                </div>
                                
                                <div className="flex gap-2">
                                    <Link href={route('admin.sm.diemension.show', serviceType.id)} className="flex-1">
                                        <Button variant="outline" size="sm" className="w-full gap-2">
                                            <Eye className="h-4 w-4" />
                                            View Dimensions
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {serviceTypes.length === 0 && (
                <Card>
                    <CardContent className="flex flex-col items-center justify-center py-12">
                        <div className="text-center space-y-4">
                            <h3 className="text-lg font-semibold">No Service Types Found</h3>
                            <p className="text-muted-foreground">
                                You need to create service types first before managing dimensions.
                            </p>
                            <Link href={route('admin.sm.service-type.create')}>
                                <Button>Create Service Type</Button>
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            )}
        </AdminLayout>
    );
}
