import React from 'react';
import { router, useForm } from '@inertiajs/react';
import InputError from '@/components/input-error';

export default function Contact({ serviceTypeId }: { serviceTypeId: number }) {
    const { data, setData, post, processing, errors } = useForm({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        zip: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(data);
        post('/free-estimate/store/step3');
    };

    const prevStep = () => {
       router.visit(route('frontend.free-estimate-step2', { serviceTypeId }));
    };
    return (
        <div className="flex items-start justify-center px-2 py-6 lg:px-4 lg:py-10">
            <div className="mx-auto w-full max-w-6xl bg-gray-100 p-3 lg:p-6">
                {/* Header */}
                <div className="mb-8 text-center">
                    <h1 className="mb-2 font-inter text-4xl font-semibold text-gray-900">
                        Request Your Free Estimate
                    </h1>
                    <p className="text-base text-gray-500">
                        Complete the form below to receive your detailed
                        estimate within 24 hours
                    </p>
                </div>
                {/* Stepper */}
                <div className="mb-8 flex items-center justify-between px-2">
                    {/* Step 1 – Completed */}
                    <div className="flex flex-col items-center">
                        <div className="z-10 flex h-9 w-9 items-center justify-center rounded-full bg-green-500 text-white">
                            <svg
                                className="h-4 w-4"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={3}
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                        </div>
                        <span className="mt-1.5 text-xs font-medium text-gray-600">
                            Photos
                        </span>
                    </div>
                    <div className="mx-1 mb-4 h-px flex-1 bg-green-400" />
                    {/* Step 2 – Completed */}
                    <div className="flex flex-col items-center">
                        <div className="z-10 flex h-9 w-9 items-center justify-center rounded-full bg-green-500 text-white">
                            <svg
                                className="h-4 w-4"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={3}
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                        </div>
                        <span className="mt-1.5 text-xs font-medium text-gray-600">
                            Options
                        </span>
                    </div>
                    <div className="mx-1 mb-4 h-px flex-1 bg-green-400" />
                    {/* Step 3 – Active */}
                    <div className="flex flex-col items-center">
                        <div className="z-10 flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                            3
                        </div>
                        <span className="mt-1.5 text-xs font-semibold text-gray-700">
                            Contact
                        </span>
                    </div>
                    <div className="mx-1 mb-4 h-px flex-1 bg-gray-300" />
                    {/* Step 4 */}
                    <div className="flex flex-col items-center">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-gray-300 bg-white text-sm font-semibold text-gray-400">
                            4
                        </div>
                        <span className="mt-1.5 text-xs text-gray-400">
                            Verify
                        </span>
                    </div>
                    <div className="mx-1 mb-4 h-px flex-1 bg-gray-300" />
                    {/* Step 5 */}
                    <div className="flex flex-col items-center">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-gray-300 bg-white text-sm font-semibold text-gray-400">
                            5
                        </div>
                        <span className="mt-1.5 text-xs text-gray-400">
                            Review
                        </span>
                    </div>
                </div>
                {/* Card */}
                <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
                    {/* Card Body */}
                    <div className="px-4 py-8 lg:px-8 lg:py-12">
                        <h2 className="mb-1 text-xl font-medium text-gray-900">
                            Your Contact Information
                        </h2>
                        <p className="mb-6 text-sm text-gray-500">
                            We'll use this information to send you your estimate
                            and keep you updated on your project.
                        </p>
                        <form onSubmit={handleSubmit} className="space-y-5" id="contact-form">
                            {/* First Name / Last Name */}
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <label className="mb-1 block text-sm font-medium text-gray-800">
                                        First Name{' '}
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        value={data.first_name}
                                        onChange={(e) => setData('first_name', e.target.value)}
                                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-700 transition-all"
                                    />
                                    {errors.first_name && (
                                        <InputError message={errors.first_name} />
                                    )}
                                </div>
                                <div>
                                    <label className="mb-1 block text-sm font-medium text-gray-800">
                                        Last Name{' '}
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        value={data.last_name}
                                        onChange={(e) => setData('last_name', e.target.value)}
                                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-700 transition-all"
                                    />
                                    {errors.last_name && (
                                        <InputError message={errors.last_name} />
                                    )}
                                </div>
                            </div>
                            {/* Mobile Phone */}
                            <div>
                                <label className="mb-1 block text-sm font-medium text-gray-800">
                                    Mobile Phone Number{' '}
                                    <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="tel"
                                    value={data.phone}
                                    onChange={(e) => setData('phone', e.target.value)}
                                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-700 transition-all"
                                />
                                {errors.phone && (
                                    <InputError message={errors.phone} />
                                )}
                                <p className="mt-1.5 text-xs text-gray-400">
                                    We'll send your estimate via SMS to this
                                    number
                                </p>
                            </div>
                            {/* Email */}
                            <div>
                                <label className="mb-1 block text-sm font-medium text-gray-800">
                                    Email Address{' '}
                                    <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-700 transition-all"
                                />
                                {errors.email && (
                                    <InputError message={errors.email} />
                                )}
                            </div>
                            {/* Property Address */}
                            <div>
                                <label className="mb-1 block text-sm font-medium text-gray-800">
                                    Property Address{' '}
                                    <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    value={data.address}
                                    onChange={(e) => setData('address', e.target.value)}
                                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-700 transition-all"
                                />
                                {errors.address && (
                                    <InputError message={errors.address} />
                                )}
                            </div>
                            {/* City / ZIP */}
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <label className="mb-1 block text-sm font-medium text-gray-800">
                                        City{' '}
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        value={data.city}
                                        onChange={(e) => setData('city', e.target.value)}
                                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-700 transition-all"
                                    />
                                    {errors.city && (
                                        <InputError message={errors.city} />
                                    )}
                                </div>
                                <div>
                                    <label className="mb-1 block text-sm font-medium text-gray-800">
                                        ZIP Code{' '}
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        value={data.zip}
                                        onChange={(e) => setData('zip', e.target.value)}
                                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-700 transition-all"
                                    />
                                    {errors.zip && (
                                        <InputError message={errors.zip} />
                                    )}
                                </div>
                            </div>
                            {/* SMS Consent Checkbox */}
                            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-gray-200 px-5 py-4 transition-colors hover:bg-gray-50">
                                <div className="relative mt-0.5 flex-shrink-0">
                                    <input
                                        type="checkbox"
                                        id="smsConsent"
                                        defaultChecked={true}
                                        className="peer sr-only"
                                    />
                                    <div className="flex h-5 w-5 items-center justify-center rounded border-2 border-blue-600 bg-blue-600 peer-checked:bg-blue-600">
                                        <svg
                                            className="h-3 w-3 text-white"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={3}
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <span className="text-sm leading-relaxed text-gray-600">
                                    <span className="text-red-500">*</span> I
                                    agree to receive text messages about my
                                    estimate and project status. Standard
                                    message and data rates may apply.
                                </span>
                            </label>
                            {/* Card Footer */}
                            <div className="flex flex-col sm:flex-row justify-between items-center border-t border-gray-100 bg-gray-50 px-8 py-5 gap-3 sm:gap-0">
                                <button 
                                    type="button"
                                    onClick={prevStep}
                                    className="flex items-center justify-center gap-1.5 rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-100 w-full sm:w-auto"
                                >
                                    <svg
                                        className="h-4 w-4"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2.5"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15 19l-7-7 7-7"
                                        />
                                    </svg>
                                    Back
                                </button>
                                <button 
                                    type="submit"
                                    disabled={processing}
                                    className="flex items-center justify-center gap-1.5 rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700 active:bg-blue-800 disabled:opacity-50 w-full sm:w-auto"
                                >
                                    Continue
                                    <svg
                                        className="h-4 w-4"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2.5"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
