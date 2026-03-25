import React, { useState } from 'react';
import FrontendLayout from '@/layouts/frontend-layout';
import Index from '@/components/frontend/estimates';

export type TrackOrderFormData = {
    orderId: string;
    contact: string;
};

export default function TrackOrder() {
    const [formData, setFormData] = useState<TrackOrderFormData>({
        orderId: '',
        contact: ''
    });

    const nextStep = () => {
        // Handle next step logic if needed
    };

    const updateFormData = <K extends keyof TrackOrderFormData>(data: Partial<Pick<TrackOrderFormData, K>>) => 
        setFormData(prev => ({ ...prev, ...data }));

    return (
        <FrontendLayout>
            <Index 
                formData={formData} 
                updateFormData={updateFormData} 
                nextStep={nextStep}
            />
        </FrontendLayout>
    );
}