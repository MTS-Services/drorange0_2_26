import React, { useState } from 'react';
import { router, useForm } from '@inertiajs/react';
import InputError from '@/components/input-error';

interface Props {
    options: {
        id: number;
        name: string;
        description: string;
    }[];
    currentSetups: {
        id: number;
        name: string;
    }[];
    serviceTypeId: number;
}

export default function Options({options, currentSetups, serviceTypeId}: Props) {
    const [selectedOptions, setSelectedOptions] = useState<number[]>([]);
    
    const { data, setData, post, processing, errors } = useForm({
        serviceTypeId: serviceTypeId,
        options: [] as number[],
        bathroom_size: '',
        current_setup: '',
    });

    const isOptionSelected = (optionId: number) => selectedOptions.includes(optionId);

    const toggleOption = (optionId: number) => {
        const newSelected = selectedOptions.includes(optionId)
            ? selectedOptions.filter(item => item !== optionId)
            : [...selectedOptions, optionId];
        
        setSelectedOptions(newSelected);
        setData('options', newSelected);
    };

    const nextStep = () => {
      post('/free-estimate/store/step2') 
    };

    const prevStep = () => {
       router.visit('/free-estimate');

    };
   
    return (
        <div className="flex items-start justify-center py-10 px-4">
            <div className="w-full max-w-6xl bg-gray-100 p-6">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-semibold text-gray-900 mb-2">
                        Request Your Free Estimate
                    </h1>
                    <p className="text-gray-500 text-base">
                        Complete the form below to receive your detailed estimate within 24
                        hours
                    </p>
                </div>
                {/* Stepper */}
                <div className="flex items-center justify-between mb-8 px-2">
                    {/* Step 1 – Completed */}
                    <div className="flex flex-col items-center">
                        <div className="w-9 h-9 rounded-full bg-green-500 text-white text-sm font-bold flex items-center justify-center z-10">
                            <svg
                                className="w-4 h-4"
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
                        <span className="text-xs text-gray-600 font-medium mt-1.5">Photos</span>
                    </div>
                    <div className="flex-1 h-px bg-green-400 mx-1 mb-4" />
                    {/* Step 2 – Active */}
                    <div className="flex flex-col items-center">
                        <div className="w-9 h-9 rounded-full bg-blue-600 text-white text-sm font-bold flex items-center justify-center z-10">
                            2
                        </div>
                        <span className="text-xs text-gray-700 font-semibold mt-1.5">
                            Options
                        </span>
                    </div>
                    <div className="flex-1 h-px bg-gray-300 mx-1 mb-4" />
                    {/* Step 3 */}
                    <div className="flex flex-col items-center">
                        <div className="w-9 h-9 rounded-full border-2 border-gray-300 text-gray-400 text-sm font-semibold flex items-center justify-center bg-white">
                            3
                        </div>
                        <span className="text-xs text-gray-400 mt-1.5">Contact</span>
                    </div>
                    <div className="flex-1 h-px bg-gray-300 mx-1 mb-4" />
                    {/* Step 4 */}
                    <div className="flex flex-col items-center">
                        <div className="w-9 h-9 rounded-full border-2 border-gray-300 text-gray-400 text-sm font-semibold flex items-center justify-center bg-white">
                            4
                        </div>
                        <span className="text-xs text-gray-400 mt-1.5">Verify</span>
                    </div>
                    <div className="flex-1 h-px bg-gray-300 mx-1 mb-4" />
                    {/* Step 5 */}
                    <div className="flex flex-col items-center">
                        <div className="w-9 h-9 rounded-full border-2 border-gray-300 text-gray-400 text-sm font-semibold flex items-center justify-center bg-white">
                            5
                        </div>
                        <span className="text-xs text-gray-400 mt-1.5">Review</span>
                    </div>
                </div>
                {/* Card */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                    {/* Card Body */}
                    <div className="px-8 py-8">
                        <h2 className="text-xl font-medium text-gray-900 mb-1">
                            Select Your Options
                        </h2>
                        <p className="text-sm text-gray-500 mb-6">
                            Choose all the services and upgrades you'd like included in your
                            bathroom remodel.
                        </p>
                        {/* Option Cards */}
                        <div className="space-y-3 mb-7" id="optionsList">
                            {errors.options && (
                                <InputError message={errors.options} className="mb-4" />
                            )}
                            {options.map((option) => (
                                <div
                                    key={option.id}
                                    className={`option-card border rounded-xl px-5 py-4 flex items-start gap-4 cursor-pointer transition-colors ${
                                        selectedOptions.includes(option.id)
                                            ? 'border-blue-500 bg-blue-50'
                                            : 'border-gray-200'
                                    }`}
                                    onClick={() => toggleOption(option.id)}
                                >
                                    <div className={`check-box w-5 h-5 rounded border-2 shrink-0 mt-0.5 flex items-center justify-center ${
                                        selectedOptions.includes(option.id) ? 'bg-blue-500 border-blue-500' : 'border-gray-300'
                                    }`}>
                                        {selectedOptions.includes(option.id) && (
                                            <svg
                                                className="check-icon w-3 h-3 text-white"
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
                                        )}
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-gray-900">{option.name}</p>
                                        <p className="text-xs text-gray-500 mt-0.5">
                                            {option.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* Dropdowns Row */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-semibold text-gray-800 mb-1.5">
                                    Bathroom Size{' '}
                                    <span className="text-gray-400 font-normal">(Optional)</span>
                                </label>
                                <div className="relative">
                                    <select 
                                        value={data.bathroom_size}
                                        onChange={(e) => setData('bathroom_size', e.target.value)}
                                        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-500 bg-white appearance-none transition-all pr-10"
                                    >
                                        <option value="">Select Size</option>
                                        <option value="small">small(5x8 OR SMALLER)</option>
                                        <option value="medium">medium(5x8 TO 6x8)</option>
                                        <option value="large">large(6x8 TO 8x8)</option>
                                        <option value="extra_large">extra large(8x8 OR LARGER)</option>
                                    </select>
                                    {errors.bathroom_size && (
                                        <InputError message={errors.bathroom_size} className="mt-1" />
                                    )}
                                    <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                                        <svg
                                            className="w-4 h-4 text-gray-400"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M19 9l-7 7-7-7"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-800 mb-1.5">
                                    Current Setup{' '}
                                    <span className="text-gray-400 font-normal">(Optional)</span>
                                </label>
                                <div className="relative">
                                    <select 
                                        value={data.current_setup}
                                        onChange={(e) => setData('current_setup', e.target.value)}
                                        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-500 bg-white appearance-none transition-all pr-10"
                                    >
                                        <option value="">Select Current Setup</option>
                                        {currentSetups.map((setup) => (
                                            <option key={setup.id} value={setup.id}>
                                                {setup.name}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.current_setup && (
                                        <InputError message={errors.current_setup} className="mt-1" />
                                    )}
                                    <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                                        <svg
                                            className="w-4 h-4 text-gray-400"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M19 9l-7 7-7-7"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Card Footer */}
                    <div className="border-t border-gray-100 px-8 py-5 flex justify-between items-center bg-gray-50">
                        <button
                            onClick={prevStep}
                            className="border border-gray-300 text-gray-700 hover:bg-gray-100 font-semibold px-5 py-2.5 rounded-lg text-sm flex items-center gap-1.5 transition-colors"
                        >
                            <svg
                                className="w-4 h-4"
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
                            onClick={nextStep}
                            className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold px-6 py-2.5 rounded-lg text-sm flex items-center gap-1.5 transition-colors"
                        >
                            Continue
                            <svg
                                className="w-4 h-4"
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
                </div>
            </div>
        </div>
    );
}
