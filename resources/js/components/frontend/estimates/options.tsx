import React from 'react';

interface OptionsProps {
    formData: {
        options: Record<string, unknown>;
    };
    updateFormData: (data: Partial<OptionsProps['formData']>) => void;
    nextStep: () => void;
    prevStep: () => void;
}

export default function Options({ formData, updateFormData, nextStep, prevStep }: OptionsProps) {
    const options = formData.options || {};

    const toggleOption = (key: string) => {
        const currentValue = options[key];
        updateFormData({
            options: {
                ...options,
                [key]: !currentValue,
            },
        });
    };

    const isOptionSelected = (key: string): boolean => {
        return !!options[key];
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
                            {/* New Vanity */}
                            <div
                                className={`option-card border rounded-xl px-5 py-4 flex items-start gap-4 cursor-pointer transition-colors ${
                                    isOptionSelected('new_vanity')
                                        ? 'border-blue-500 bg-blue-50'
                                        : 'border-gray-200'
                                }`}
                                onClick={() => toggleOption('new_vanity')}
                            >
                                <div className={`check-box w-5 h-5 rounded border-2 flex-shrink-0 mt-0.5 flex items-center justify-center ${
                                    isOptionSelected('new_vanity') ? 'bg-blue-500 border-blue-500' : 'border-gray-300'
                                }`}>
                                    {isOptionSelected('new_vanity') && (
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
                                    <p className="text-sm font-semibold text-gray-900">New Vanity</p>
                                    <p className="text-xs text-gray-500 mt-0.5">
                                        Replace your existing vanity with a new one, including sink and
                                        faucet
                                    </p>
                                </div>
                            </div>
                            {/* New Toilet */}
                            <div
                                className={`option-card border rounded-xl px-5 py-4 flex items-start gap-4 cursor-pointer transition-colors ${
                                    isOptionSelected('new_toilet')
                                        ? 'border-blue-500 bg-blue-50'
                                        : 'border-gray-200'
                                }`}
                                onClick={() => toggleOption('new_toilet')}
                            >
                                <div className={`check-box w-5 h-5 rounded border-2 flex-shrink-0 mt-0.5 flex items-center justify-center ${
                                    isOptionSelected('new_toilet') ? 'bg-blue-500 border-blue-500' : 'border-gray-300'
                                }`}>
                                    {isOptionSelected('new_toilet') && (
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
                                    <p className="text-sm font-semibold text-gray-900">New Toilet</p>
                                    <p className="text-xs text-gray-500 mt-0.5">
                                        Install a new modern, water-efficient toilet
                                    </p>
                                </div>
                            </div>
                            {/* New Flooring */}
                            <div
                                className={`option-card border rounded-xl px-5 py-4 flex items-start gap-4 cursor-pointer transition-colors ${
                                    isOptionSelected('new_flooring')
                                        ? 'border-blue-500 bg-blue-50'
                                        : 'border-gray-200'
                                }`}
                                onClick={() => toggleOption('new_flooring')}
                            >
                                <div className={`check-box w-5 h-5 rounded border-2 flex-shrink-0 mt-0.5 flex items-center justify-center ${
                                    isOptionSelected('new_flooring') ? 'bg-blue-500 border-blue-500' : 'border-gray-300'
                                }`}>
                                    {isOptionSelected('new_flooring') && (
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
                                    <p className="text-sm font-semibold text-gray-900">
                                        New Flooring
                                    </p>
                                    <p className="text-xs text-gray-500 mt-0.5">
                                        Replace bathroom flooring with tile, vinyl, or your choice of
                                        material
                                    </p>
                                </div>
                            </div>
                            {/* Convert Tub to Shower */}
                            <div
                                className={`option-card border rounded-xl px-5 py-4 flex items-start gap-4 cursor-pointer transition-colors ${
                                    isOptionSelected('tub_to_shower')
                                        ? 'border-blue-500 bg-blue-50'
                                        : 'border-gray-200'
                                }`}
                                onClick={() => toggleOption('tub_to_shower')}
                            >
                                <div className={`check-box w-5 h-5 rounded border-2 flex-shrink-0 mt-0.5 flex items-center justify-center ${
                                    isOptionSelected('tub_to_shower') ? 'bg-blue-500 border-blue-500' : 'border-gray-300'
                                }`}>
                                    {isOptionSelected('tub_to_shower') && (
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
                                    <p className="text-sm font-semibold text-gray-900">
                                        Convert Tub to Shower
                                    </p>
                                    <p className="text-xs text-gray-500 mt-0.5">
                                        Remove existing tub and install a walk-in shower
                                    </p>
                                </div>
                            </div>
                            {/* Convert Shower to Tub */}
                            <div
                                className={`option-card border rounded-xl px-5 py-4 flex items-start gap-4 cursor-pointer transition-colors ${
                                    isOptionSelected('shower_to_tub')
                                        ? 'border-blue-500 bg-blue-50'
                                        : 'border-gray-200'
                                }`}
                                onClick={() => toggleOption('shower_to_tub')}
                            >
                                <div className={`check-box w-5 h-5 rounded border-2 flex-shrink-0 mt-0.5 flex items-center justify-center ${
                                    isOptionSelected('shower_to_tub') ? 'bg-blue-500 border-blue-500' : 'border-gray-300'
                                }`}>
                                    {isOptionSelected('shower_to_tub') && (
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
                                    <p className="text-sm font-semibold text-gray-900">
                                        Convert Shower to Tub
                                    </p>
                                    <p className="text-xs text-gray-500 mt-0.5">
                                        Remove existing shower and install a bathtub
                                    </p>
                                </div>
                            </div>
                            {/* Install New Tub or Shower */}
                            <div
                                className={`option-card border rounded-xl px-5 py-4 flex items-start gap-4 cursor-pointer transition-colors ${
                                    isOptionSelected('new_tub_or_shower')
                                        ? 'border-blue-500 bg-blue-50'
                                        : 'border-gray-200'
                                }`}
                                onClick={() => toggleOption('new_tub_or_shower')}
                            >
                                <div className={`check-box w-5 h-5 rounded border-2 flex-shrink-0 mt-0.5 flex items-center justify-center ${
                                    isOptionSelected('new_tub_or_shower') ? 'bg-blue-500 border-blue-500' : 'border-gray-300'
                                }`}>
                                    {isOptionSelected('new_tub_or_shower') && (
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
                                    <p className="text-sm font-semibold text-gray-900">
                                        Install New Tub or Shower
                                    </p>
                                    <p className="text-xs text-gray-500 mt-0.5">
                                        Replace your existing tub or shower with a new unit
                                    </p>
                                </div>
                            </div>
                            {/* Install Tile */}
                            <div
                                className={`option-card border rounded-xl px-5 py-4 flex items-start gap-4 cursor-pointer transition-colors ${
                                    isOptionSelected('install_tile')
                                        ? 'border-blue-500 bg-blue-50'
                                        : 'border-gray-200'
                                }`}
                                onClick={() => toggleOption('install_tile')}
                            >
                                <div className={`check-box w-5 h-5 rounded border-2 flex-shrink-0 mt-0.5 flex items-center justify-center ${
                                    isOptionSelected('install_tile') ? 'bg-blue-500 border-blue-500' : 'border-gray-300'
                                }`}>
                                    {isOptionSelected('install_tile') && (
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
                                    <p className="text-sm font-semibold text-gray-900">
                                        Install Tile
                                    </p>
                                    <p className="text-xs text-gray-500 mt-0.5">
                                        Tile installation for walls, shower, or backsplash
                                    </p>
                                </div>
                            </div>
                            {/* Install Wall Panels */}
                            <div
                                className={`option-card border rounded-xl px-5 py-4 flex items-start gap-4 cursor-pointer transition-colors ${
                                    isOptionSelected('wall_panels')
                                        ? 'border-blue-500 bg-blue-50'
                                        : 'border-gray-200'
                                }`}
                                onClick={() => toggleOption('wall_panels')}
                            >
                                <div className={`check-box w-5 h-5 rounded border-2 flex-shrink-0 mt-0.5 flex items-center justify-center ${
                                    isOptionSelected('wall_panels') ? 'bg-blue-500 border-blue-500' : 'border-gray-300'
                                }`}>
                                    {isOptionSelected('wall_panels') && (
                                        <svg
                                            className="check-icon w-3 h-3 text-white"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={3}
                                            viewBox="0 0 24 24"
                                        >
0 24                                             <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                    )}
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-gray-900">
                                        Install Wall Panels
                                    </p>
                                    <p className="text-xs text-gray-500 mt-0.5">
                                        Waterproof wall panels as an alternative to tile
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Dropdowns Row */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-semibold text-gray-800 mb-1.5">
                                    Bathroom Size{' '}
                                    <span className="text-gray-400 font-normal">(Optional)</span>
                                </label>
                                <div className="relative">
                                    <select className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-500 bg-white appearance-none transition-all pr-10">
                                        <option value="" disabled>
                                            Select Size
                                        </option>
                                        <option>small(5x8 OR SMALLER)</option>
                                        <option>medium(5x8 TO 6x8)</option>
                                        <option>large(6x8 TO 8x8)</option>
                                        <option>extra large(8x8 OR LARGER)</option>
                                    </select>
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
                                    <select className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-500 bg-white appearance-none transition-all pr-10">
                                        <option value="" disabled>
                                            Select Current Setup
                                        </option>
                                        <option>Tub only</option>
                                        <option>Shower only</option>
                                        <option>Tub/Shower combo</option>
                                        <option>Separate tub & shower</option>
                                    </select>
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
