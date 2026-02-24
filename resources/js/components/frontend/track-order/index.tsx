import React, { FormEvent } from 'react';

interface IndexProps {
    formData: {
        orderId: string;
        contact: string;
    };
    updateFormData: (data: Partial<IndexProps['formData']>) => void;
    nextStep: () => void;
}

export default function Index({ formData, updateFormData, nextStep }: IndexProps) {
    const [errors, setErrors] = React.useState<Record<string, string>>({});

    const validate = (): boolean => {
        const newErrors: Record<string, string> = {};
        
        if (!formData.orderId.trim()) {
            newErrors.orderId = 'Order ID is required';
        }
        
        if (!formData.contact.trim()) {
            newErrors.contact = 'Phone number or email is required';
        } else {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const phoneRegex = /^[\d\s\-()]+$/;
            const isValidEmail = emailRegex.test(formData.contact);
            const isValidPhone = phoneRegex.test(formData.contact) && formData.contact.replace(/\D/g, '').length >= 10;
            
            if (!isValidEmail && !isValidPhone) {
                newErrors.contact = 'Please enter a valid email or phone number';
            }
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (validate()) {
            nextStep();
        }
    };
    return (
        <div className="py-12 flex items-center justify-center font-sans lg:px-4 md:px-2 px-2">
            <div className="w-full max-w-6xl bg-gray-50 rounded lg:px-8 lg:py-16  px-2 py-6">
                {/* Header */}
                <div className="flex flex-col items-center mb-10">
                    {/* Box Icon */}
                    <div className="mb-4">
                        <svg
                            className="w-14 h-14 text-blue-600"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M21 8l-9-5-9 5v8l9 5 9-5V8z" />
                            <path d="M3 8l9 5 9-5" />
                            <path d="M12 13v8" />
                            <path d="M7.5 5.5l9 5" />
                        </svg>
                    </div>
                    <h1 className="lg:text-5xl text-3xl font-extrabold text-gray-900 mb-2 font-inter">
                        Track Your Order
                    </h1>
                    <p className="text-gray-500 text-lg text-center">
                        Enter your order ID and contact information to view your project status
                    </p>
                </div>
                {/* Form Card */}
                <div className="bg-white rounded-xl shadow-md border border-gray-200 px-8 py-8 max-w-3xl mx-auto">
                    <form onSubmit={handleSubmit}>
                        {/* Order ID */}
                        <div className="mb-5">
                            <label className="block text-sm font-medium text-gray-800 mb-1">
                                Order ID <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="orderId"
                                value={formData.orderId}
                                onChange={(e) => updateFormData({ orderId: e.target.value })}
                                placeholder="BR12345678"
                                className={`w-full border rounded-lg px-4 py-3 text-gray-700 text-sm transition-all ${errors.orderId ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'} focus:ring-2 focus:outline-none`}
                            />
                            {errors.orderId && <p className="text-xs text-red-500 mt-1">{errors.orderId}</p>}
                            <p className="text-xs text-gray-400 mt-1.5">
                                You received this in your confirmation email/SMS
                            </p>
                        </div>
                        {/* Phone or Email */}
                        <div className="mb-6">
                            <label className="block text-sm font-normal text-gray-800 mb-1">
                                Phone Number or Email <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="contact"
                                value={formData.contact}
                                onChange={(e) => updateFormData({ contact: e.target.value })}
                                placeholder="(555) 123-4567 or email@example.com"
                                className={`w-full border rounded-lg px-4 py-3 text-gray-700 text-sm transition-all ${errors.contact ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'} focus:ring-2 focus:outline-none`}
                            />
                            {errors.contact && <p className="text-xs text-red-500 mt-1">{errors.contact}</p>}
                        </div>
                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold py-3.5 rounded-lg text-sm transition-colors flex items-center justify-center gap-2"
                        >
                            <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                viewBox="0 0 24 24"
                            >
                                <circle cx={11} cy={11} r={8} />
                                <path d="M21 21l-4.35-4.35" />
                            </svg>
                            <span>Track Order</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>

    );
}