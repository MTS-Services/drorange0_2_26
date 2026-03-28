import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AdminLayout from '@/layouts/admin-layout';
import { Head, usePage } from '@inertiajs/react';
import { type SharedData } from '@/types';
import { Link } from '@inertiajs/react';
import { Users, FileText, Phone, Mail, TrendingUp, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import React from 'react';

export default function Dashboard() {
    const { auth } = usePage<SharedData>().props;
    const admin = auth.admin;

    return (
        <AdminLayout activeSlug={"dashboard"}>
            <Head title="Admin Dashboard" />

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {/* Welcome Card */}
                <Card className="col-span-1 xl:col-span-2">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Users className="h-5 w-5 text-blue-600" />
                            Welcome back{admin?.name ? `, ${admin.name}` : ''}
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground">
                        {admin?.email ?? 'You are logged in as admin.'}
                    </CardContent>
                </Card>


                {/* Quick Actions */}
                <Card className="col-span-1 xl:col-span-1">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <FileText className="h-5 w-5 text-purple-600" />
                            Quick Actions
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        <Link 
                            href={route('admin.estimates.index')}
                            className="flex items-center gap-3 p-3 rounded-lg border hover:bg-gray-50 transition-colors"
                        >
                            <FileText className="h-4 w-4" />
                            <div>
                                <div className="font-medium">Manage Estimates</div>
                                <div className="text-xs text-muted-foreground">View and manage all estimates</div>
                            </div>
                        </Link>
                        
                        <Link 
                            href={route('admin.pm.contact.index')}
                            className="flex items-center gap-3 p-3 rounded-lg border hover:bg-gray-50 transition-colors"
                        >
                            <Phone className="h-4 w-4" />
                            <div>
                                <div className="font-medium">Contact Messages</div>
                                <div className="text-xs text-muted-foreground">View contact inquiries</div>
                            </div>
                        </Link>

                        <Link 
                            href={route('admin.site-settings.index')}
                            className="flex items-center gap-3 p-3 rounded-lg border hover:bg-gray-50 transition-colors"
                        >
                            <AlertCircle className="h-4 w-4" />
                            <div>
                                <div className="font-medium">Site Settings</div>
                                <div className="text-xs text-muted-foreground">Configure website settings</div>
                            </div>
                        </Link>
                    </CardContent>
                </Card>

            </div>
        </AdminLayout>
    );
}