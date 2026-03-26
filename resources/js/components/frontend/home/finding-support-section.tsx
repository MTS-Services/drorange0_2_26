import React from 'react';

import { useReveal } from '@/hooks/use-reveal';

export function FindingSupportSection() {
    const [headerRef, headerVisible] = useReveal<HTMLDivElement>();
    const [cardsRef, cardsVisible] = useReveal<HTMLDivElement>(0.1);
    const cards = [
        {
            title: 'Grief Resources',
            desc: 'Access counseling services, support groups, and educational materials to help you process your loss.',
            icon: (
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            ),
        },
        {
            title: 'Essential Checklist',
            desc: 'Follow our step-by-step guide to handle immediate tasks, from notifying authorities to managing finances.',
            icon: (
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
            ),
        },
        {
            title: 'Community Support',
            desc: 'Connect with others who understand your experience through our compassionate online community.',
            icon: (
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
            ),
        },
    ];

    return (
        <section id="estimate" className=" text-white text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 bg-[#092abdd2] lg:py-20 py-10">
            <h2 className="font-sf-pro font-semibold text-3xl md:text-4xl xl:text-5xl mb-4">Ready to Transform Your Bathroom?</h2>
            <p className="mx-auto max-w-3xl text-[#DBEAFE] font-inter font-normal text-base sm:text-2xl mb-8 leading-relaxed">Get a free, no-obligation estimate in 24 hours. Upload photos, select your options, and we'll send you a detailed quote via text.</p>
            <a href={route('free-estimate')} className="inline-flex items-center gap-2 mx-auto text-blue-600 font-semibold bg-white px-6 py-3 rounded-lg shadow-lg hover:bg-opacity-90 transition-all duration-300 ease-in-out">
              Get Your Free Estimate
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>
            </a>
          </div>
        </section>
    );
}
