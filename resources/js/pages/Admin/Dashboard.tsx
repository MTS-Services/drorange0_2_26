import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AdminLayout from '@/layouts/admin-layout';
import { Head, usePage } from '@inertiajs/react';
import { type SharedData } from '@/types';

export default function Dashboard() {
    const { auth } = usePage<SharedData>().props;
    const admin = auth.admin;

    return (
        <AdminLayout activeSlug={"dashboard"}>
            <Head title="Admin Dashboard" />

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                <Card className="col-span-1">
                    <CardHeader>
                        <CardTitle>Welcome back{admin?.name ? `, ${admin.name}` : ''}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground">
                        {admin?.email ?? 'You are logged in as admin.'}
                    </CardContent>
                </Card>
            </div>
        </AdminLayout>
    );
}