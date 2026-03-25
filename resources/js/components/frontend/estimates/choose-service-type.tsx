import FileUpload from '@/components/file-upload';
import React, { useState } from 'react';

interface ServiceType {
    id: number | string;
    name: string;
}

interface Props {
    serviceTypes: ServiceType[];
}

export default function ChooseServiceType({ serviceTypes }: Props) {
    const getDefaultValue = () => {
        const queryParams = new URLSearchParams(window.location.search);
        return queryParams.get('service') ?? '';
    };

    const [selectedService, setSelectedService] =
        useState<string>(getDefaultValue);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // handle submission logic here
    };

    return (
        <div className="flex items-start justify-center bg-white px-4 py-10">
            <div className="w-full max-w-6xl bg-gray-100 px-4 pb-8 lg:px-8">
                {/* Header */}
                <div className="mb-8 pt-4 text-center">
                    <h1 className="font-arial mb-2 text-3xl font-bold text-gray-900 lg:text-4xl">
                        Request Your Free Estimate
                    </h1>
                    <p className="font-arial text-base text-gray-500">
                        Complete the form below to receive your detailed
                        estimate within 24 hours
                    </p>
                </div>

                {/* Stepper */}
                <div className="mb-8 flex items-center justify-between px-2">
                    {/* Step 1 */}
                    <div className="flex flex-col items-center">
                        <div className="z-10 flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                            1
                        </div>
                        <span className="mt-1.5 text-xs font-medium text-gray-700">
                            Photos
                        </span>
                    </div>
                    <div className="mx-1 mb-4 h-px flex-1 bg-gray-300" />
                    {/* Step 2 */}
                    <div className="flex flex-col items-center">
                        <div className="z-10 flex h-9 w-9 items-center justify-center rounded-full border-2 border-gray-300 bg-white text-sm font-semibold text-gray-400">
                            2
                        </div>
                        <span className="mt-1.5 text-xs text-gray-400">
                            Options
                        </span>
                    </div>
                    <div className="mx-1 mb-4 h-px flex-1 bg-gray-300" />
                    {/* Step 3 */}
                    <div className="flex flex-col items-center">
                        <div className="z-10 flex h-9 w-9 items-center justify-center rounded-full border-2 border-gray-300 bg-white text-sm font-semibold text-gray-400">
                            3
                        </div>
                        <span className="mt-1.5 text-xs text-gray-400">
                            Contact
                        </span>
                    </div>
                    <div className="mx-1 mb-4 h-px flex-1 bg-gray-300" />
                    {/* Step 4 */}
                    <div className="flex flex-col items-center">
                        <div className="z-10 flex h-9 w-9 items-center justify-center rounded-full border-2 border-gray-300 bg-white text-sm font-semibold text-gray-400">
                            4
                        </div>
                        <span className="mt-1.5 text-xs text-gray-400">
                            Verify
                        </span>
                    </div>
                    <div className="mx-1 mb-4 h-px flex-1 bg-gray-300" />
                    {/* Step 5 */}
                    <div className="flex flex-col items-center">
                        <div className="z-10 flex h-9 w-9 items-center justify-center rounded-full border-2 border-gray-300 bg-white text-sm font-semibold text-gray-400">
                            5
                        </div>
                        <span className="mt-1.5 text-xs text-gray-400">
                            Review
                        </span>
                    </div>
                </div>

                {/* Card */}
                <form onSubmit={handleSubmit}>
                    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
                        {/* Card Body */}
                        <div className="px-4 py-8 lg:px-8">
                            <h2 className="font-arial mb-2 text-xl font-medium text-gray-900">
                                Upload Bathroom Photos
                            </h2>
                            <p className="font-arial mb-6 text-sm leading-relaxed text-wrap text-gray-500">
                                Please upload 3–10 clear photos of your
                                bathroom. Include wide shots showing the entire
                                space, close-ups of the tub/shower, vanity, and
                                flooring.
                            </p>

                            {/* Project Type */}
                            <div className="mb-5">
                                <label className="mb-1.5 block text-sm font-medium text-gray-800">
                                    Project Type
                                </label>
                                <div className="relative">
                                    <select
                                        value={selectedService}
                                        onChange={(e) =>
                                            setSelectedService(e.target.value)
                                        }
                                        className="w-full appearance-none rounded-lg border border-gray-300 bg-white px-4 py-3 pr-10 text-sm text-gray-700 transition-all"
                                    >
                                        <option value="">
                                            Select a project type
                                        </option>
                                        {serviceTypes.map((value, index) => (
                                            <option
                                                key={index}
                                                value={value?.id}
                                            >
                                                {value?.name}
                                            </option>
                                        ))}
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                                        <svg
                                            className="h-4 w-4 text-gray-400"
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

                            <div className="mb-3">
                                <FileUpload
                                    onChange={(file) =>
                                        setData(
                                            'background_image',
                                            file as File,
                                        )
                                    }
                                    existingFiles={background}
                                    multiple={true}
                                    accept="image/*"
                                />
                            </div>

                            {/* Tips Box */}
                            <div className="rounded-xl border border-blue-100 bg-blue-50 px-5 py-4">
                                <div className="mb-2 flex items-center gap-2">
                                    <svg
                                        className="h-4 w-4 flex-shrink-0 text-blue-600"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        viewBox="0 0 24 24"
                                    >
                                        <circle cx={12} cy={12} r={10} />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M12 16v-4m0-4h.01"
                                        />
                                    </svg>
                                    <span className="text-sm font-semibold text-blue-700">
                                        Tips for good photos:
                                    </span>
                                </div>
                                <ul className="space-y-1 pl-6">
                                    <li className="list-disc text-sm text-blue-600">
                                        Stand back to show the entire wall or
                                        area
                                    </li>
                                    <li className="list-disc text-sm text-blue-600">
                                        Use good lighting – turn on all lights
                                    </li>
                                    <li className="list-disc text-sm text-blue-600">
                                        Take photos from multiple angles
                                    </li>
                                    <li className="list-disc text-sm text-blue-600">
                                        Include close-ups of any problem areas
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
