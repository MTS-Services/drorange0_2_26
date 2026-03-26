import { Link } from '@inertiajs/react';
import { CircleCheckBig } from 'lucide-react';

export function ServiceAreaSection({ serviceArea }: any) {
    return (
        <section className="mx-auto max-w-7xl px-6 py-20 text-center">
            <div className="mb-4 flex justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-xs">
                    <svg
                        className="h-10 w-10 text-blue-600"
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
            <h2 className="mb-2 text-2xl sm:text-[32px] font-bold font-inter  text-gray-900">
                Service Area
            </h2>
            <p className="mb-10 font-inter font-normal text-xl text-gray-500">
                Proudly serving homeowners throughout Ohio
            </p>
            <div className="rounded-2xl bg-blue-50 p-8">
                <div className="mb-6 grid grid-cols-2 gap-3 text-sm text-gray-700 sm:grid-cols-4">
                    {serviceArea?.map((item: any, index: number) => (
                        <div className="flex items-center gap-2 text-gray-900 font-inter font-normal text-base">
                            <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
                                <CircleCheckBig className="w-6 h-6 text-blue-600" />
                            </div>
                            {item.title}
                        </div>
                    ))}
                </div>
                <Link href={route('contact')} className="text-base font-inter font-normal text-gray-400">
                    Don't see your city? Contact us to check if we service your
                    area.
                </Link>
            </div>
        </section>
    );
}
