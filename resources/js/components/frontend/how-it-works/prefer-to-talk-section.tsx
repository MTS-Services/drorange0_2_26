import { Link } from '@inertiajs/react';
import React, { useEffect, useState } from 'react';

export function PreferToTalkSection({ faqs }: any) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    useEffect(() => {
        if (faqs && faqs.length > 0) {
            setOpenIndex(0);
        }
    }, [faqs]);

    const handleToggle = (index: number) => {
        setOpenIndex((current) => (current === index ? null : index));
    };

    return (
        <>
            <section className="min-auto">

                <div className="bg-gray-50 max-w-7xl mx-auto px-4 sm:px-8 py-12">

                    {/* Header */}
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl xl:text-5xl font-inter font-bold text-gray-900">Frequently Asked Questions</h2>
                    </div>

                    {/* FAQ Items */}
                    <div className="space-y-4">

                        {faqs?.map((faq: any, index: number) => {
                            const isOpen = openIndex === index;
                            return (
                                <div
                                    key={index}
                                    className="bg-white rounded-md shadow-sm border border-gray-100 px-6 py-5 cursor-pointer"
                                    onClick={() => handleToggle(index)}
                                >
                                    <div className="flex items-center justify-between gap-4">
                                        <h3 className="text-xl font-normal text-gray-900 font-inter">{faq.title}</h3>
                                        <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-gray-400">
                                            <svg className={`plus w-4 h-4 ${isOpen ? 'hidden' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12M6 12h12" /></svg>
                                            <svg className={`minus w-4 h-4 ${isOpen ? '' : 'hidden'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" /></svg>
                                        </span>
                                    </div>
                                    <div className={`faq-body ${isOpen ? 'block' : 'hidden'}`}>
                                        <p className="text-base font-normal text-gray-500 font-inter leading-relaxed pt-3">{faq.subtitle}</p>
                                    </div>
                                </div>
                            );
                        })}


                    </div>
                </div>

            </section>
            <section className="bg-blue-600 lg:py-16 py-8 text-white text-center max-w-7xl mx-auto px-8">
                <div className="">
                    <h2 className="text-3xl md:text-4xl xl:text-5xl font-inter font-bold text-white mb-3">
                        Ready to Get Started?
                    </h2>
                    <p className="text-white/80 text-xl font-normal text-gray-500 font-inter leading-relaxed mb-8">
                        Request your free estimate now and receive your detailed quote within 24
                        hours.
                    </p>
                    <Link href={route('free-estimate')} className="btn-white">
                        Start Your Bathroom Remodel
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </Link>
                </div>
            </section>
        </>

    );
}