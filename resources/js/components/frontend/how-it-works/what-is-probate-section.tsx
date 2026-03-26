import React from 'react';

import { useScrollAnimation } from '@/hooks/use-scroll-animation';

export function WhatIsProbateSection() {
    const [sectionRef, isVisible] = useScrollAnimation<HTMLDivElement>();
    const base = 'transition-all duration-700 ease-out';
    const state = isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6';

    return (
     <section className="lg:py-24 py-12 bg-[#EFF6FF] max-w-7xl mx-auto">
        <div className="max-w-5xl mx-auto px-6">
            <p className="text-center text-3xl font-normal text-gray-900 mb-6 font-inter tracking-wider">Total Timeline</p>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
            <div className="timeline-card">
                <div className="timeline-num font-inter font-bold text-4xl">10 min</div>
                <p className="text-xl sm:text-2xl font-inter font-normal text-gray-500 mt-1.5">Request Process</p>
            </div>
            <div className="timeline-card">
                <div className="timeline-num font-inter font-bold text-4xl">24 hrs</div>
                <p className="text-xl sm:text-2xl font-inter font-normal text-gray-500 mt-1.5">Estimate Delivery</p>
            </div>
            <div className="timeline-card">
                <div className="timeline-num font-inter font-bold text-4xl">5-10 days</div>
                <p className="text-xl sm:text-2xl font-inter font-normal text-gray-500 mt-1.5">Project Completion</p>
            </div>
            </div>
        </div>
    </section>
    );
}
