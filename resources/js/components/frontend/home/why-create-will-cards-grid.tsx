import React from 'react';

import { Link } from '@inertiajs/react';

type WhyCard = {
    title: string;
    desc: string;
    gradient: string;
    border: string;
    titleColor: string;
    checkColor: string;
    iconColor: string;
    delay: string;
    icon: React.ReactNode;
};

export function WhyCreateWillCardsGrid({ services }: any) {
    return (
        <section className="overflow-hidden bg-white">
            {/* Services */}
            <section id="services" className=" ">
                <div className= "max-w-7xl mx-auto px-6 py-10 lg:py-20 bg-gray-50">
                    <div className="mb-12 text-center">
                        <h2 className="font-sf-pro font-semibold text-gray-900 text-3xl md:text-4xl xl:text-5xl">
                            Our Services
                        </h2>
                        <p className="mx-auto mt-3 max-w-xl text-gray-500 font-inter font-normal text-xl">
                            From complete renovations to targeted upgrades, we
                            handle every aspect of your bathroom transformation.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {services.map((service: any, index: any) => (
                            <div className="service-card bg-white">
                                <div className="service-icon">
                                    <img
                                        src={service.icon_url}
                                        alt={service.title}
                                    />
                                </div>
                                <h3 className="mb-2 text-gray-900 font-inter font-normal text-xl">
                                    {service.title}
                                </h3>
                                <p className="text-gray-500 font-inter font-normal text-base">
                                    {service.subtitle}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-10 text-center">
                        <Link
                            href={route('bathroom')}
                            className="inline-flex items-center gap-2 text-base font-inter font-bold text-blue-600 transition-all hover:gap-3"
                        >
                            Learn More About Our Services
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>
        </section>
    );
}
