import React from 'react';

import { useReveal } from '@/hooks/use-reveal';
import { CircleCheckBig } from 'lucide-react';

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

        <section className="lg:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <h2 className="font-sf-pro font-semibold text-gray-900 text-3xl md:text-4xl xl:text-5xl mb-2">Why Remodel Your Bathroom?
                </h2>
                <p className="mx-auto mt-3 max-w-2xl text-gray-500 font-inter font-normal text-xl mb-16">
                    A bathroom remodel is one of the best investments you can make in your home, offering both immediate enjoyment
                    and long-term value.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 text-left justify-center">
                    <div className="why-item font-inter font-normal text-base">
                        <CircleCheckBig className="w-6 h-6 text-green-500" />
                        Increase your home value by up to 70% ROI
                    </div>
                    <div className="why-item font-inter font-normal text-base">
                        <CircleCheckBig className="w-6 h-6 text-green-500" />
                        Improve functionality and accessibility
                    </div>
                    <div className="why-item font-inter font-normal text-base">
                        <CircleCheckBig className="w-6 h-6 text-green-500" />
                        Enhance aesthetics with modern designs
                    </div>
                    <div className="why-item font-inter font-normal text-base">
                        <CircleCheckBig className="w-6 h-6 text-green-500" />
                        Better water efficiency and lower utility bills
                    </div>
                    <div className="why-item font-inter font-normal text-base">
                        <CircleCheckBig className="w-6 h-6 text-green-500" />
                        Fix underlying plumbing or structural issues
                    </div>
                    <div className="why-item font-inter font-normal text-base">
                        <CircleCheckBig className="w-6 h-6 text-green-500" />
                        Create a personal retreat in your home
                    </div>
                </div>
            </div>
        </section>
    );
}
