import InputError from '@/components/input-error';
import AdminLayout from '@/layouts/admin-layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Head, Link, router, useForm } from '@inertiajs/react';
import { ArrowLeft, Save, User, Mail, Phone, MapPin, Calendar, Package, Settings, Image } from 'lucide-react';
import React from 'react';

interface EstimateStatus {
    id: number;
    estimate_status: string;
    message: string | null;
    created_at: string;
}

interface Estimate {
    id: number;
    estimate_id: string;
    estimate_status: string;
    service_type: { name: string };
    option: { name: string };
    diemension: { name: string };
    current_setup: { name: string };
    contact_information: {
        first_name: string;
        last_name: string;
        email: string;
        phone: string;
        address: string;
        city: string;
        zip_code: string;
    };
    otp_verification: {
        otp: string;
        expire_in: number;
    };
    estimate_images: Array<{ image: string }>;
    created_at: string;
    updated_at: string;
}

interface Props {
    estimate: Estimate;
    statusHistory: EstimateStatus[];
    statusOptions: Array<{ value: string; label: string }>;
    options: any;
    images: any; 
}

export default function Show({ estimate, statusHistory, statusOptions, options, images }: Props) {
    const { data, setData, patch, processing, errors, reset } = useForm({
        estimate_status: estimate.estimate_status,
        message: '',
    });

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        patch(route('admin.estimates.update-status', estimate.id), {
            onSuccess: () => {
                reset('message');
            },
        });
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'pending': return 'bg-yellow-100 text-yellow-800';
            case 'review': return 'bg-blue-100 text-blue-800';
            case 'estimate': return 'bg-green-100 text-green-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    const getStatusLabel = (status: string) => {
        const option = statusOptions.find(s => s.value === status);
        return option?.label || status;
    };

    return (
        <AdminLayout activeSlug="estimates">
            <Head title={`Estimate: ${estimate.estimate_id}`} />

            <div className="flex justify-between mb-6">
                <h1 className="text-2xl font-bold">Estimate Details</h1>
                <Link href={route('admin.estimates.index')}>
                    <Button variant="outline" className="gap-2">
                        <ArrowLeft className="h-4 w-4" />
                        Back to Estimates
                    </Button>
                </Link>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                {/* Main Content */}
                <div className="space-y-6 lg:col-span-2">
                    {/* Estimate Information */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Package className="h-5 w-5" />
                                Estimate Information
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <Label className="text-sm text-muted-foreground">Estimate ID</Label>
                                    <p className="font-medium">{estimate.estimate_id}</p>
                                </div>
                                <div>
                                    <Label className="text-sm text-muted-foreground">Current Status</Label>
                                    <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(estimate.estimate_status)}`}>
                                        {getStatusLabel(estimate.estimate_status)}
                                    </span>
                                </div>
                                <div>
                                    <Label className="text-sm text-muted-foreground">Service Type</Label>
                                    <p className="font-medium">{estimate.service_type?.name || 'N/A'}</p>
                                </div>
                                <div>
                                    <Label className="text-sm text-muted-foreground">Option</Label>
                                    {
                                        options.map((option: any) => (
                                            <p key={option.id} className="font-medium">{option.name}</p>
                                        ))
                                    }
                                    
                                </div>
                                <div>
                                    <Label className="text-sm text-muted-foreground">Dimension</Label>
                                    <p className="font-medium">{estimate.bathroom_size || 'N/A'}</p>
                                </div>
                                <div>
                                    <Label className="text-sm text-muted-foreground">Current Setup</Label>
                                    <p className="font-medium">{estimate.current_setup?.name || 'N/A'}</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Contact Information */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <User className="h-5 w-5" />
                                Contact Information
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <Label className="text-sm text-muted-foreground">Full Name</Label>
                                    <p className="font-medium">
                                        {estimate.contact_information?.first_name} {estimate.contact_information?.last_name}
                                    </p>
                                </div>
                                <div>
                                    <Label className="text-sm text-muted-foreground">Email</Label>
                                    <p className="font-medium flex items-center gap-1">
                                        <Mail className="h-4 w-4" />
                                        {estimate.contact_information?.email}
                                    </p>
                                </div>
                                <div>
                                    <Label className="text-sm text-muted-foreground">Phone</Label>
                                    <p className="font-medium flex items-center gap-1">
                                        <Phone className="h-4 w-4" />
                                        {estimate.contact_information?.phone}
                                    </p>
                                </div>
                                <div>
                                    <Label className="text-sm text-muted-foreground">Address</Label>
                                    <p className="font-medium flex items-center gap-1">
                                        <MapPin className="h-4 w-4" />
                                        {estimate.contact_information?.address}, {estimate.contact_information?.city}, {estimate.contact_information?.zip_code}
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Status History */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Calendar className="h-5 w-5" />
                                Status History
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-3">
                                {statusHistory.map((status) => (
                                    <div key={status.id} className="flex items-start gap-3 p-3 border rounded-lg">
                                        <div className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(status.estimate_status)}`}>
                                            {getStatusLabel(status.estimate_status)}
                                        </div>
                                        <div className="flex-1">
                                            {status.message && (
                                                <p className="text-sm text-gray-600 mb-1">{status.message}</p>
                                            )}
                                            <p className="text-xs text-gray-500">
                                                {new Date(status.created_at).toLocaleString()}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                    {/* Update Status */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Settings className="h-5 w-5" />
                                Update Status
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="estimate_status">Change Status</Label>
                                    <Select
                                        value={data.estimate_status}
                                        onValueChange={(value) => setData('estimate_status', value)}
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select status" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {statusOptions.map((option) => (
                                                <SelectItem key={option.value} value={option.value}>
                                                    {option.label}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <InputError message={errors.estimate_status} />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="message">Message</Label>
                                    <Textarea
                                        id="message"
                                        value={data.message}
                                        onChange={(e) => setData('message', e.target.value)}
                                        placeholder="Add a message about this status change..."
                                        rows={4}
                                    />
                                    <InputError message={errors.message} />
                                </div>

                                <Button type="submit" disabled={processing} className="w-full gap-2">
                                    <Save className="h-4 w-4" />
                                    {processing ? 'Updating...' : 'Update Status'}
                                </Button>
                            </form>
                        </CardContent>
                    </Card>

                    {/* Images */}
                    {images?.length > 0 && (
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Image className="h-5 w-5" />
                                    Images ({images.length})
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-2 gap-2">
                                    {images.map((img: any, index: number) => (
                                        <div key={index} className="border rounded-lg p-2">
                                            <img src={img.image_url} alt="" className='h-auto w-100 cursor-pointer' onClick={() => window.open(img.image_url, "_blank")} />
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    )}
                </div>
            </div>
        </AdminLayout>
    );
}
