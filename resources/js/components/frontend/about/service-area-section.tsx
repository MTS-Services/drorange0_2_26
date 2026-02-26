import { Link } from '@inertiajs/react';

export function ServiceAreaSection({ serviceArea }: any) {
    return (
        <section className="mx-auto max-w-6xl px-6 py-20 text-center">
            <div className="mb-4 flex justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                    <svg
                        className="h-6 w-6 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.8"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                        />
                    </svg>
                </div>
            </div>
            <h2 className="mb-2 text-3xl font-bold text-gray-900">
                Service Area
            </h2>
            <p className="mb-10 text-gray-500">
                Proudly serving homeowners throughout Ohio
            </p>
            <div className="rounded-2xl bg-blue-50 p-8">
                <div className="mb-6 grid grid-cols-2 gap-3 text-sm text-gray-700 sm:grid-cols-4">
                    {serviceArea?.map((item: any, index: number) => (
                        <div className="flex items-center gap-2 text-gray-900">
                            <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
                                <svg
                                    className="h-3 w-3 text-blue-600"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2.5"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M4.5 12.75l6 6 9-13.5"
                                    />
                                </svg>
                            </div>
                            {item.title}
                        </div>
                    ))}
                </div>
                <Link className="text-xs text-gray-400">
                    Don't see your city? Contact us to check if we service your
                    area.
                </Link>
            </div>
        </section>
    );
}
