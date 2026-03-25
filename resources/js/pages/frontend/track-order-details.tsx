import React, { useState } from 'react';
import FrontendLayout from '@/layouts/frontend-layout';
import Index from '@/components/frontend/track-order';

export type TrackOrderFormData = {
    orderId: string;
    contact: string;
};

export default function TrackOrderDetails() {
    const [formData, setFormData] = useState<TrackOrderFormData>({
        orderId: '',
        contact: ''
    });

    const nextStep = () => {
        // Handle next step logic if needed
    };

    const updateFormData = <K extends keyof TrackOrderFormData>(data: Partial<Pick<TrackOrderFormData, K>>) => 
        setFormData(prev => ({ ...prev, ...data }));

    const orderIdForUi = formData.orderId.trim() || 'BR42675373';
    const contactForUi = formData.contact.trim();
    const customerNameForUi = (() => {
        if (!contactForUi) return 'Mehedy Hasan';
        if (contactForUi.includes('@')) return contactForUi.split('@')[0] || 'Mehedy Hasan';
        return 'Mehedy Hasan';
    })();
    const phoneForUi = (() => {
        if (!contactForUi) return '017163452565';
        if (contactForUi.includes('@')) return '017163452565';
        return contactForUi;
    })();
    const emailForUi = (() => {
        if (!contactForUi) return 'mehedy@gmail.com';
        if (contactForUi.includes('@')) return contactForUi;
        return 'mehedy@gmail.com';
    })();

    return (
        <FrontendLayout>
            <Index 
                formData={formData} 
                updateFormData={updateFormData} 
                nextStep={nextStep}
            />

            <section className="py-10 flex items-center justify-center font-sans lg:px-4 md:px-2 px-2">
                <div className="w-full max-w-7xl space-y-6">
                    {/* Order Summary Card */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                        <div className="flex items-start justify-between gap-4">
                            <div>
                                <h2 className="font-inter font-medium text-2xl text-gray-900">
                                    Order #{orderIdForUi}
                                </h2>
                                <p className="mt-1 font-inter font-medium text-base text-gray-600">
                                    {customerNameForUi}
                                </p>
                            </div>
                            <span className="inline-flex items-center rounded-full bg-blue-50 px-4 py-2 text-xs font-semibold text-blue-600">
                                <p className="font-inter font-semibold text-base text-[#193CB8]">Estimate Received</p>
                            </span>
                        </div>

                        <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="flex items-center gap-3">
                                <svg className="w-4 h-4 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07A19.5 19.5 0 0 1 3.07 10.8 19.8 19.8 0 0 1 0 2.18 2 2 0 0 1 2 0h3a2 2 0 0 1 2 2c.12.9.35 1.77.68 2.6a2 2 0 0 1-.45 2.11L6.1 8.1a16 16 0 0 0 9.8 9.8l1.39-1.13a2 2 0 0 1 2.11-.45c.83.33 1.7.56 2.6.68a2 2 0 0 1 1.99 1.99z"/>
                                </svg>
                                <p className="font-inter font-medium text-sm text-gray-600">{phoneForUi}</p>
                            </div>

                            <div className="flex items-center gap-3">
                                <svg className="w-4 h-4 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                                    <polyline points="22,6 12,13 2,6"/>
                                </svg>
                                <p className="font-inter font-medium text-sm text-gray-600">{emailForUi}</p>
                            </div>

                            <div className="flex items-center gap-3">
                                <svg className="w-4 h-4 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 8v4l2 2"/>
                                    <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"/>
                                </svg>
                                <p className="font-inter font-medium text-sm text-gray-600">Submitted: March 1, 2026 at 11:24 AM</p>
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
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07A19.5 19.5 0 0 1 3.07 10.8 19.8 19.8 0 0 1 0 2.18 2 2 0 0 1 2 0h3a2 2 0 0 1 2 2c.12.9.35 1.77.68 2.6a2 2 0 0 1-.45 2.11L6.1 8.1a16 16 0 0 0 9.8 9.8l1.39-1.13a2 2 0 0 1 2.11-.45c.83.33 1.7.56 2.6.68a2 2 0 0 1 1.99 1.99z"/>
                                </svg>
                                Call (555) 123-4567
                        </button>

                            <a
                                href="mailto:info@bathproremodeling.com"
                                className="inline-flex items-center justify-center gap-2 rounded-lg border border-blue-600 bg-white px-4 py-2.5 text-sm font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
                            >
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                                    <polyline points="22,6 12,13 2,6"/>
                                </svg>
                                Send Email
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </FrontendLayout>
    );
}