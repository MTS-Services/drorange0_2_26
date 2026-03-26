import React, { useState, useEffect } from 'react';
import { router, usePage } from '@inertiajs/react';
import FrontendLayout from '@/layouts/frontend-layout';
import Index from '@/components/frontend/estimates';

interface Estimate {
    id: number;
    estimate_id: string;
    service_type_id: number;
    option_ids: string;
    bathroom_size: string;
    current_setup_id: number;
    estimate_status: string;
    created_at: string;
    updated_at: string;
    contactInformation?: {
        first_name: string;
        last_name: string;
        email: string;
        phone: string;
        address: string;
        city: string;
        zip: string;
    };
    latestStatus?: {
        estimate_status: string;
        message?: string;
        created_at: string;
    };
    serviceType?: {
        id: number;
        name: string;
    };
    estimateImages?: Array<{
        id: number;
        image: string;
    }>;
}

interface PageProps {
    estimate: Estimate | null;
    error: string | null;
    searchParams: {
        estimate_id?: string;
        contact?: string;
    };
    [key: string]: any;
}

export type TrackOrderFormData = {
    orderId: string;
    contact: string;
};

export default function TrackOrderDetails() {
    const { props } = usePage<PageProps>();
    const [formData, setFormData] = useState<TrackOrderFormData>({
        orderId: props.searchParams?.estimate_id || '',
        contact: props.searchParams?.contact || ''
    });

    const handleSearch = () => {
        router.get('/track-order-details', {
            estimate_id: formData.orderId,
            contact: formData.contact
        }, {
            preserveState: false
        });
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    const getStatusColor = (status: string) => {
        switch (status?.toLowerCase()) {
            case 'estimate received':
                return 'bg-blue-50 text-blue-600';
            case 'in review':
                return 'bg-yellow-50 text-yellow-600';
            case 'approved':
                return 'bg-green-50 text-green-600';
            case 'rejected':
                return 'bg-red-50 text-red-600';
            default:
                return 'bg-gray-50 text-gray-600';
        }
    };

    console.log(props.estimate);

    return (
        <FrontendLayout>
            <Index
                formData={formData}
                updateFormData={(data) => setFormData(prev => ({ ...prev, ...data }))}
                nextStep={handleSearch}
            />

            <section className="py-10 flex items-center justify-center font-sans lg:px-4 md:px-2 px-2">
                <div className="w-full max-w-7xl space-y-6">
                    {props.error && (
                        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                            <p className="text-red-600">{props.error}</p>
                        </div>
                    )}

                    {props.estimate && (
                        <>
                            {/* Order Summary Card */}
                            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">

                                    <div>
                                        <h2 className="font-inter font-medium text-2xl text-gray-900">
                                            Order #{props.estimate.estimate_id || 'BR42675373'}
                                        </h2>
                                        <p className="mt-1 font-inter font-medium text-base text-gray-600">
                                            {props.estimate.contact_information?.first_name} {props.estimate.contact_information?.last_name || 'Mehedy Hasan'}
                                        </p>
                                    </div>

                                    <span className="inline-flex items-center justify-center sm:justify-start mx-auto sm:mx-0 rounded-full bg-blue-50 px-4 py-2 text-xs font-semibold text-blue-600">
                                        <p className="font-inter sm:font-semibold text-base text-[#193CB8] text-center">
                                            {props.estimate.latestStatus?.estimate_status || props.estimate.estimate_status || 'Estimate Received'}
                                        </p>
                                    </span>

                                </div>

                                <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div className="flex items-center gap-3">
                                        <svg className="w-4 h-4 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07A19.5 19.5 0 0 1 3.07 10.8 19.8 19.8 0 0 1 0 2.18 2 2 0 0 1 2 0h3a2 2 0 0 1 2 2c.12.9.35 1.77.68 2.6a2 2 0 0 1-.45 2.11L6.1 8.1a16 16 0 0 0 9.8 9.8l1.39-1.13a2 2 0 0 1 2.11-.45c.83.33 1.7.56 2.6.68a2 2 0 0 1 1.99 1.99z" />
                                        </svg>
                                        <p className="font-inter font-medium text-sm text-gray-600">{props.estimate.contact_information?.phone || '017163452565'}</p>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <svg className="w-4 h-4 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                            <polyline points="22,6 12,13 2,6" />
                                        </svg>
                                        <p className="font-inter font-medium text-sm text-gray-600">{props.estimate.contact_information?.email || 'mehedy@gmail.com'}</p>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <svg className="w-4 h-4 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M12 8v4l2 2" />
                                            <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
                                        </svg>
                                        <p className="font-inter font-medium text-sm text-gray-600">Submitted: {props.estimate.created_at ? formatDate(props.estimate.created_at) : 'March 1, 2026 at 11:24 AM'}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Need Help Card */}
                            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                                <h3 className="font-inter font-normal text-xl text-gray-900">Need Help?</h3>
                                <p className="mt-1 font-inter font-normal text-base text-gray-600">
                                    If you have questions about your order, please don't hesitate to contact us.
                                </p>

                                <div className="mt-4 flex flex-col sm:flex-row gap-3">

                                    <button
                                        type="submit"
                                        className="w-fit px-4 py-2 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold rounded-lg text-sm transition-colors flex items-center justify-center gap-2"
                                    >
                                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07A19.5 19.5 0 0 1 3.07 10.8 19.8 19.8 0 0 1 0 2.18 2 2 0 0 1 2 0h3a2 2 0 0 1 2 2c.12.9.35 1.77.68 2.6a2 2 0 0 1-.45 2.11L6.1 8.1a16 16 0 0 0 9.8 9.8l1.39-1.13a2 2 0 0 1 2.11-.45c.83.33 1.7.56 2.6.68a2 2 0 0 1 1.99 1.99z" />
                                        </svg>
                                        Call (555) 123-4567
                                    </button>

                                    <a
                                        href="mailto:info@bathproremodeling.com"
                                        className="inline-flex items-center justify-center gap-2 rounded-lg border border-blue-600 bg-white px-4 py-2.5 text-sm font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
                                    >
                                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                            <polyline points="22,6 12,13 2,6" />
                                        </svg>
                                        Send Email
                                    </a>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </section>
        </FrontendLayout>
    );
}