import React, { useState } from 'react';
import FrontendLayout from '@/layouts/frontend-layout';
import Photos from '@/components/frontend/track-order/photos';
import Options from '@/components/frontend/track-order/options';
import Contact from '@/components/frontend/track-order/contact';
import Verify from '@/components/frontend/track-order/verify';
import Review from '@/components/frontend/track-order/review';

export type FreeEstimateFormData = {
    photos: File[];
    options: Record<string, unknown>;
    contactInfo: Record<string, unknown>;
    verification: Record<string, unknown>;
};

export default function FreeEstimate() {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState<FreeEstimateFormData>({
        photos: [],
        options: {},
        contactInfo: {},
        verification: {}
    });

    const nextStep = () => setCurrentStep(prev => prev + 1);
    const prevStep = () => setCurrentStep(prev => prev - 1);
    const updateFormData = <K extends keyof FreeEstimateFormData>(data: Partial<Pick<FreeEstimateFormData, K>>) => 
        setFormData(prev => ({ ...prev, ...data }));

    const renderStep = () => {
        switch(currentStep) {
            case 1: return (
                <Photos 
                    formData={{ photos: formData.photos, options: formData.options }} 
                    updateFormData={updateFormData} 
                    nextStep={nextStep} 
                    prevStep={prevStep}
                />
            );
            case 2: return (
                <Options 
                    formData={{ options: formData.options }} 
                    updateFormData={updateFormData} 
                    nextStep={nextStep} 
                    prevStep={prevStep} 
                />
            );
            case 3: return (
                <Contact 
                    formData={{ contactInfo: formData.contactInfo }} 
                    updateFormData={updateFormData} 
                    nextStep={nextStep} 
                    prevStep={prevStep} 
                />
            );
            case 4: return (
                <Verify 
                    formData={{ verification: formData.verification }} 
                    updateFormData={updateFormData} 
                    nextStep={nextStep} 
                    prevStep={prevStep} 
                />
            );
            case 5: return (
                <Review 
                    formData={{
                        orderId: '',
                        contact: '',
                        photos: formData.photos,
                        options: formData.options,
                        contactInfo: formData.contactInfo,
                        verification: formData.verification
                    }} 
                    updateFormData={updateFormData} 
                    nextStep={nextStep} 
                    prevStep={prevStep} 
                />
            );
            default: return (
                <Photos 
                    formData={{ photos: formData.photos, options: formData.options }} 
                    updateFormData={updateFormData} 
                    nextStep={nextStep} 
                    prevStep={prevStep}
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