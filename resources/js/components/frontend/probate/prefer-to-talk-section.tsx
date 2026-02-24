import React from 'react';

import { useScrollAnimation } from '@/hooks/use-scroll-animation';

export function PreferToTalkSection() {
    const [sectionRef, isVisible] = useScrollAnimation<HTMLDivElement>();
    const base = 'transition-all duration-700 ease-out';
    const state = isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6';

    return (
      <>
        <section className="bg-gray-50 min-h-screen py-12 px-4">

        <div className="max-w-6xl mx-auto">

            {/* Header */}
            <div className="text-center mb-10">
            <h2 className="text-3xl font-semibold font-inter text-gray-900">Frequently Asked Questions</h2>
            </div>

            {/* FAQ Items */}
            <div className="space-y-4">

            {/* Item 1 */}
            <div className="bg-white rounded-md shadow-sm border border-gray-100 px-6 py-5 cursor-pointer" onClick={() => toggle(this)}>
                <div className="flex items-center justify-between gap-4">
                <h3 className="text-sm font-semibold text-gray-900">How accurate are the online estimates?</h3>
                <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-gray-400">
                    <svg className="plus w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12M6 12h12"/></svg>
                    <svg className="minus w-4 h-4 hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6"/></svg>
                </span>
                </div>
                <div className="faq-body">
                <p className="text-sm text-gray-500 leading-relaxed pt-3">Our estimates are very accurate because they're based on your actual photos and specific selections. We use precise pricing databases to generate quotes, and we account for regional labor and material costs. Actual project costs are typically within 5% of the initial estimate.</p>
                </div>
            </div>

            {/* Item 2 */}
            <div className="bg-white rounded-md shadow-sm border border-gray-100 px-6 py-5 cursor-pointer" onClick={() => toggle(this)}>
                <div className="flex items-center justify-between gap-4">
                <h3 className="text-sm font-semibold text-gray-900">What if I need to change something?</h3>
                <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-gray-400">
                    <svg className="plus w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12M6 12h12"/></svg>
                    <svg className="minus w-4 h-4 hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6"/></svg>
                </span>
                </div>
                <div className="faq-body">
                <p className="text-sm text-gray-500 leading-relaxed pt-3">No problem! Before approving your estimate, you can request any changes or modifications. After approval, our team can discuss modifications, though they may impact the timeline and pricing.</p>
                </div>
            </div>

            {/* Item 3 */}
            <div className="bg-white rounded-md shadow-sm border border-gray-100 px-6 py-5 cursor-pointer" onClick={() => toggle(this)}>
                <div className="flex items-center justify-between gap-4">
                <h3 className="text-sm font-semibold text-gray-900">Do I really get my estimate in 24 hours?</h3>
                <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-gray-400">
                    <svg className="plus w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12M6 12h12"/></svg>
                    <svg className="minus w-4 h-4 hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6"/></svg>
                </span>
                </div>
                <div className="faq-body">
                <p className="text-sm text-gray-500 leading-relaxed pt-3">Yes! Our team reviews your submission and prepares a detailed estimate within 24 hours (business days). You'll receive both a text notification and email when it's ready.</p>
                </div>
            </div>

            {/* Item 4 */}
            <div className="bg-white rounded-md shadow-sm border border-gray-100 px-6 py-5 cursor-pointer" onClick={() => toggle(this)}>
                <div className="flex items-center justify-between gap-4">
                <h3 className="text-sm font-semibold text-gray-900">What photos should I take?</h3>
                <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-gray-400">
                    <svg className="plus w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12M6 12h12"/></svg>
                    <svg className="minus w-4 h-4 hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6"/></svg>
                </span>
                </div>
                <div className="faq-body">
                <p className="text-sm text-gray-500 leading-relaxed pt-3">Take 4–6 photos from each corner of your bathroom. Make sure to capture all walls, the floor, the ceiling, and any fixtures you want replaced or updated. Clear, well-lit photos help us provide the most accurate estimate possible.</p>
                </div>
            </div>

            {/* Item 5 */}
            <div className="bg-white rounded-md shadow-sm border border-gray-100 px-6 py-5 cursor-pointer" onClick={() => toggle(this)}>
                <div className="flex items-center justify-between gap-4">
                <h3 className="text-sm font-semibold text-gray-900">Is the mobile verification required?</h3>
                <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-gray-400">
                    <svg className="plus w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12M6 12h12"/></svg>
                    <svg className="minus w-4 h-4 hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6"/></svg>
                </span>
                </div>
                <div className="faq-body">
                <p className="text-sm text-gray-500 leading-relaxed pt-3">Yes, mobile verification is how we confirm estimates and ensure we can reach you with your estimate. Your phone number and all personal details are secured with our privacy policy and will never be shared with third parties.</p>
                </div>
            </div>

            </div>
        </div>

       </section>
        <section className="bg-blue-600 lg:py-16 py-8 text-white text-center max-w-6xl mx-auto">
            <div className="max-w-xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-black mb-3 font-inter font-bold">
                Ready to Get Started?
            </h2>
            <p className="text-white/80 text-sm mb-8 leading-relaxed">
                Request your free estimate now and receive your detailed quote within 24
                hours.
            </p>
            <button className="btn-white">
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
            </button>
            </div>
        </section>
      </>

    );
}