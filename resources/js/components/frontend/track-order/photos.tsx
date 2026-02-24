import React, { FormEvent, useEffect, useRef, useState } from 'react';

interface PhotosProps {
    formData: {
        photos: File[];
        options: Record<string, unknown>;
    };
    updateFormData: (data: Partial<PhotosProps['formData']>) => void;
    nextStep: () => void;
    prevStep: () => void;
}

export default function Photos({
    formData,
    updateFormData,
    nextStep,
    prevStep,
}: PhotosProps) {
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isDragOver, setIsDragOver] = useState(false);
    const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});
    const [projectType, setProjectType] = useState(
        (formData.options?.projectType as string) || '',
    );
    const fileInputRef = useRef<HTMLInputElement>(null);

    // Revoke blob URLs to prevent memory leaks
    useEffect(() => {
        const urls = formData.photos.map((file) => URL.createObjectURL(file));
        return () => {
            urls.forEach((url) => URL.revokeObjectURL(url));
        };
    }, [formData.photos]);

    const validate = (): boolean => {
        const newErrors: Record<string, string> = {};

        if (formData.photos.length < 3) {
            newErrors.photos = 'Please upload at least 3 photos';
        } else if (formData.photos.length > 10) {
            newErrors.photos = 'Maximum 10 photos allowed';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleFileSelect = (files: FileList | null) => {
        if (!files) return;

        const validFiles = Array.from(files).filter((file) => {
            const isValidType = [
                'image/png',
                'image/jpeg',
                'image/jpg',
            ].includes(file.type);
            const isValidSize = file.size <= 10 * 1024 * 1024; // 10MB
            return isValidType && isValidSize;
        });

        const newPhotos = [...formData.photos, ...validFiles].slice(0, 10);
        updateFormData({ photos: newPhotos });
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragOver(false);
        handleFileSelect(e.dataTransfer.files);
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragOver(true);
    };

    const handleDragLeave = () => {
        setIsDragOver(false);
    };

    const removePhoto = (index: number) => {
        const newPhotos = formData.photos.filter((_, i) => i !== index);
        updateFormData({ photos: newPhotos });

        // Clear validation error when photo count becomes valid
        if (newPhotos.length >= 3 && newPhotos.length <= 10) {
            setErrors((prev) => ({ ...prev, photos: '' }));
        }

        // Clear image error for removed photo
        setImageErrors((prev) => {
            const updated = { ...prev };
            delete updated[index];
            return updated;
        });
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (validate()) {
            nextStep();
        }
    };

    const handleProjectTypeChange = (
        e: React.ChangeEvent<HTMLSelectElement>,
    ) => {
        const value = e.target.value;
        setProjectType(value);
        updateFormData({
            options: { ...formData.options, projectType: value },
        });
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
                                        value={projectType}
                                        onChange={handleProjectTypeChange}
                                        className="w-full appearance-none rounded-lg border border-gray-300 bg-white px-4 py-3 pr-10 text-sm text-gray-700 transition-all"
                                    >
                                        <option value="">
                                            Select a project type
                                        </option>
                                        <option value="bathroom-remodel">
                                            Bathroom Remodel
                                        </option>
                                        <option value="shower-installation">
                                            Shower Installation
                                        </option>
                                        <option value="tub-replacement">
                                            Tub Replacement
                                        </option>
                                        <option value="vanity-upgrade">
                                            Vanity Upgrade
                                        </option>
                                        <option value="flooring-only">
                                            Flooring Only
                                        </option>
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

                            {/* Drop Zone */}
                            <div
                                className={`mb-5 flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 p-12 transition-colors ${
                                    isDragOver
                                        ? 'border-blue-400 bg-blue-50'
                                        : 'border-dashed border-gray-300 hover:border-blue-400 hover:bg-blue-50'
                                }`}
                                onDrop={handleDrop}
                                onDragOver={handleDragOver}
                                onDragLeave={handleDragLeave}
                                onClick={() => fileInputRef.current?.click()}
                            >
                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    className="hidden"
                                    multiple
                                    accept="image/png,image/jpeg"
                                    onChange={(e) =>
                                        handleFileSelect(e.target.files)
                                    }
                                />
                                <svg
                                    className="mb-3 h-10 w-10 text-gray-400"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                                    />
                                </svg>
                                <p className="mb-1 text-sm font-semibold text-gray-700">
                                    Click to upload photos
                                </p>
                                <p className="text-xs text-gray-400">
                                    or drag and drop (PNG, JPG up to 10MB each)
                                </p>
                                <p className="mt-2 text-xs text-gray-400">
                                    {formData.photos.length} of 10 photos
                                    uploaded
                                </p>
                            </div>

                            {errors.photos && (
                                <p className="mb-4 text-xs text-red-500">
                                    {errors.photos}
                                </p>
                            )}

                            {/* Uploaded Previews */}
                            {formData.photos.length > 0 && (
                                <div
                                    id="previews"
                                    className="mb-5 grid grid-cols-4 gap-3"
                                >
                                    {formData.photos.map((file, index) => {
                                        const key = `${file.name}-${file.size}-${index}`;
                                        return (
                                            <div
                                                key={key}
                                                className="group relative"
                                            >
                                                {imageErrors[index] ? (
                                                    <div className="flex h-24 w-full items-center justify-center rounded-lg bg-gray-200">
                                                        <svg
                                                            className="h-8 w-8 text-gray-400"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth={
                                                                    1.5
                                                                }
                                                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                                            />
                                                        </svg>
                                                    </div>
                                                ) : (
                                                    <img
                                                        src={URL.createObjectURL(
                                                            file,
                                                        )}
                                                        alt={`Preview ${index + 1}`}
                                                        className="h-24 w-full rounded-lg object-cover"
                                                        onError={() =>
                                                            setImageErrors(
                                                                (prev) => ({
                                                                    ...prev,
                                                                    [index]: true,
                                                                }),
                                                            )
                                                        }
                                                    />
                                                )}
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        removePhoto(index)
                                                    }
                                                    className="absolute top-1 right-1 rounded-full bg-red-500 p-1 text-white opacity-0 transition-opacity group-hover:opacity-100"
                                                >
                                                    <svg
                                                        className="h-3 w-3"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M6 18L18 6M6 6l12 12"
                                                        />
                                                    </svg>
                                                </button>
                                            </div>
                                        );
                                    })}
                                </div>
                            )}

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

                        {/* Card Footer */}
                        <div className="flex justify-between border-t border-gray-100 bg-gray-50 px-8 py-5">
                            <button
                                type="button"
                                onClick={prevStep}
                                className="flex items-center gap-1.5 rounded-lg bg-gray-200 px-6 py-2.5 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-300"
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
                                className="flex items-center gap-1.5 rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700 active:bg-blue-800"
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
                    </div>
                </form>
            </div>
        </div>
    );
}
