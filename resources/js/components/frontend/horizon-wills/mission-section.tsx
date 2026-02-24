import React from 'react';

import { useReveal } from '@/hooks/use-reveal';

const reasons = [
    {
        title: 'Massive market demand',
        detail: '61% of UK adults do not have a will, and 5.4M people are unsure where to start. You can serve this audience immediately.'
    },
    {
        title: 'Fully automated workflow',
        detail: 'Clients complete guided questionnaires online, generate PDFs, and manage revisions without manual admin work.'
    },
    {
        title: 'Work from anywhere',
        detail: 'No face-to-face meetings. Every consultation, payment, document, and update lives inside the secure portal.'
    },
    {
        title: 'Laravel foundations',
        detail: 'Built on modern Laravel so you benefit from reliability, security, and easy scalability compared to template builders.'
    },
];

export function MissionSection() {
    const [contentRef, contentVisible] = useReveal<HTMLDivElement>();
    const [listRef, listVisible] = useReveal<HTMLDivElement>(0.2);

    return (         
              
            <section className="lg:py-20 p-8 bg-white">
                <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl lg:text-5xl font-black text-gray-900 mb-4 font-bold font-inter">Why Remodel Your Bathroom?
                </h2>
                <p className="text-gray-500 text-sm mb-10 max-w-xl mx-auto leading-relaxed">
                    A bathroom remodel is one of the best investments you can make in your home, offering both immediate enjoyment
                    and long-term value.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
                    <div className="why-item">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20" className="shrink-0 mt-0.5">
                        <circle cx="10" cy="10" r="10" fill="#22c55e" />
                        <path fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
                        d="M5.5 10.5l3 3 6-6" />
                    </svg>
                    Increase your home value by up to 70% ROI
                    </div>
                    <div className="why-item">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20" className="shrink-0 mt-0.5">
                        <circle cx="10" cy="10" r="10" fill="#22c55e" />
                        <path fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
                        d="M5.5 10.5l3 3 6-6" />
                    </svg>
                    Improve functionality and accessibility
                    </div>
                    <div className="why-item">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20" className="shrink-0 mt-0.5">
                        <circle cx="10" cy="10" r="10" fill="#22c55e" />
                        <path fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
                        d="M5.5 10.5l3 3 6-6" />
                    </svg>
                    Enhance aesthetics with modern designs
                    </div>
                    <div className="why-item">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20" className="shrink-0 mt-0.5">
                        <circle cx="10" cy="10" r="10" fill="#22c55e" />
                        <path fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
                        d="M5.5 10.5l3 3 6-6" />
                    </svg>
                    Better water efficiency and lower utility bills
                    </div>
                    <div className="why-item">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20" className="shrink-0 mt-0.5">
                        <circle cx="10" cy="10" r="10" fill="#22c55e" />
                        <path fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
                        d="M5.5 10.5l3 3 6-6" />
                    </svg>
                    Fix underlying plumbing or structural issues
                    </div>
                    <div className="why-item">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20" className="shrink-0 mt-0.5">
                        <circle cx="10" cy="10" r="10" fill="#22c55e" />
                        <path fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
                        d="M5.5 10.5l3 3 6-6" />
                    </svg>
                    Create a personal retreat in your home
                    </div>
                </div>
                </div>
            </section>
    );
}
