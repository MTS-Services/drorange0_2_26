import React, { useState } from 'react';
import FrontendLayout from '@/layouts/frontend-layout';
import Index from '@/components/frontend/track-order';
import Photos from '@/components/frontend/track-order/photos';
import Options from '@/components/frontend/track-order/options';
import Contact from '@/components/frontend/track-order/contact';
import Verify from '@/components/frontend/track-order/verify';
import Review from '@/components/frontend/track-order/review';

export type TrackOrderFormData = {
    orderId: string;
    contact: string;
    photos: File[];
    options: Record<string, unknown>;
    contactInfo: Record<string, unknown>;
    verification: Record<string, unknown>;
};

export default function TrackOrder() {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState<TrackOrderFormData>({
        orderId: '',
        contact: '',
        photos: [],
        options: {},
        contactInfo: {},
        verification: {}
    });

    const nextStep = () => setCurrentStep(prev => prev + 1);
    const prevStep = () => setCurrentStep(prev => prev - 1);
    const updateFormData = <K extends keyof TrackOrderFormData>(data: Partial<Pick<TrackOrderFormData, K>>) => 
        setFormData(prev => ({ ...prev, ...data }));

    const renderStep = () => {
        switch(currentStep) {
            case 1: return (
                <Index 
                    formData={{ orderId: formData.orderId, contact: formData.contact }} 
                    updateFormData={updateFormData} 
                    nextStep={nextStep} 
                />
            );
            case 2: return (
                <Photos 
                    formData={{ photos: formData.photos, options: formData.options }} 
                    updateFormData={updateFormData} 
                    nextStep={nextStep} 
                    prevStep={prevStep} 
                />
            );
            case 3: return (
                <Options 
                    formData={{ options: formData.options }} 
                    updateFormData={updateFormData} 
                    nextStep={nextStep} 
                    prevStep={prevStep} 
                />
            );
            case 4: return (
                <Contact 
                    formData={{ contactInfo: formData.contactInfo }} 
                    updateFormData={updateFormData} 
                    nextStep={nextStep} 
                    prevStep={prevStep} 
                />
            );
            case 5: return (
                <Verify 
                    formData={{ verification: formData.verification }} 
                    updateFormData={updateFormData} 
                    nextStep={nextStep} 
                    prevStep={prevStep} 
                />
            );
            case 6: return (
                <Review 
                    formData={formData} 
                    updateFormData={updateFormData} 
                    nextStep={nextStep} 
                    prevStep={prevStep} 
                />
            );
            default: return (
                <Index 
                    formData={{ orderId: formData.orderId, contact: formData.contact }} 
                    updateFormData={updateFormData} 
                    nextStep={nextStep} 
                />
            );
        }
    };

    return (
        <FrontendLayout>
            {renderStep()}
        </FrontendLayout>
    );
}