import React from 'react';

import { useScrollAnimation } from '@/hooks/use-scroll-animation';

export function SpecialistSupportSection() {
    const [sectionRef, isVisible] = useScrollAnimation<HTMLDivElement>();
    const animatedBase = 'transition-all duration-700 ease-out';
    const animatedState = isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6';

    return (
    
        <section className="bg-gray-50 py-12 px-4">
            <div className="max-w-6xl mx-auto">

                 

                {/* Steps */}
                <div className="space-y-3" id="steps-container">

                {/* Step 1 */}
                <div className="step-card bg-white border border-gray-200 rounded px-5 py-5 flex gap-4 cursor-pointer hover:border-blue-200 hover:shadow-md transition-all duration-200" onClick={() => {}}>
                    <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-9 h-9 rounded-full bg-blue-600 text-white text-sm font-semibold flex items-center justify-center z-10">1</div> 
                    </div>
                    <div className="flex items-start justify-between gap-4 flex-1">
                    <div className="flex-1">
                        <h3 className="text-sm font-semibold text-gray-900 mb-0.5">Submit Your Request Online</h3>
                        <p className="text-xs text-gray-400 flex items-center gap-1 mb-3">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6l4 2"/></svg>
                        2–3 minutes
                        </p>
                        <p className="desc text-sm text-gray-500 leading-relaxed">Fill out our simple online form on your desktop, tablet, or phone. In 2–3 minutes describe your bathroom remodeling project. Upload photos from multiple angles, mark the areas you need remodeled, and choose the services you want – tile, flooring, vanity, tub-to-shower, and more.</p>
                    </div>
                    <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none" viewBox="0 0 24 24" stroke="#155DFC" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/></svg>
                    </div>
                    </div>
                </div>

                {/* Step 2 */}
                <div className="step-card bg-white border border-gray-200 rounded px-5 py-5 flex gap-4 cursor-pointer hover:border-blue-200 hover:shadow-md transition-all duration-200" onClick={() => {}}>
                    <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-9 h-9 rounded-full bg-blue-600 text-white text-sm font-semibold flex items-center justify-center z-10">2</div>
                     
                    </div>
                    <div className="flex items-start justify-between gap-4 flex-1">
                    <div className="flex-1">
                        <h3 className="text-sm font-semibold text-gray-900 mb-0.5">Choose Your Options</h3>
                        <p className="text-xs text-gray-400 flex items-center gap-1 mb-3">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6l4 2"/></svg>
                        5 minutes
                        </p>
                        <p className="desc text-sm text-gray-500 leading-relaxed">Select from our comprehensive list of services including new fixtures, tile work, flooring, and plumbing. Set any special requests or details about your needs. Tell us about your preferred timeline and budget range.</p>
                    </div>
                    <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none" viewBox="0 0 24 24" stroke="#155DFC" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/></svg>
                    </div>
                    </div>
                </div>

                {/* Step 3 */}
                <div className="step-card bg-white border border-gray-200 rounded px-5 py-5 flex gap-4 cursor-pointer hover:border-blue-200 hover:shadow-md transition-all duration-200" onClick={() => {}}>
                    <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-9 h-9 rounded-full bg-blue-600 text-white text-sm font-semibold flex items-center justify-center z-10">3</div>

                    </div>
                    <div className="flex items-start justify-between gap-4 flex-1">
                    <div className="flex-1">
                        <h3 className="text-sm font-semibold text-gray-900 mb-0.5">Verify Your Mobile Number</h3>
                        <p className="text-xs text-gray-400 flex items-center gap-1 mb-3">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6l4 2"/></svg>
                        1 minute
                        </p>
                        <p className="desc text-sm text-gray-500 leading-relaxed">We send a quick verification code to your phone to confirm you're a real person, not a bot. This is how we can reach you with your estimate and updates.</p>
                    </div>
                    <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none" viewBox="0 0 24 24" stroke="#155DFC" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                    </div>
                    </div>
                </div>

                {/* Step 4 */}
                <div className="step-card bg-white border border-gray-200 rounded px-5 py-5 flex gap-4 cursor-pointer hover:border-blue-200 hover:shadow-md transition-all duration-200" onClick={() => {}}>
                    <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-9 h-9 rounded-full bg-blue-600 text-white text-sm font-semibold flex items-center justify-center z-10">4</div>

                    </div>
                    <div className="flex items-start justify-between gap-4 flex-1">
                    <div className="flex-1">
                        <h3 className="text-sm font-semibold text-gray-900 mb-0.5">Receive Your Estimate</h3>
                        <p className="text-xs text-gray-400 flex items-center gap-1 mb-3">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6l4 2"/></svg>
                        Within 24 hours
                        </p>
                        <p className="desc text-sm text-gray-500 leading-relaxed">Within 24 hours, our team reviews your photos and selections. The estimate is detailed and sent via SMS with pricing breakdown and project timeline. We also send a confirmation email with the full details.</p>
                    </div>
                    <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none" viewBox="0 0 24 24" stroke="#155DFC" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/></svg>
                    </div>
                    </div>
                </div>

                {/* Step 5 */}
                <div className="step-card bg-white border border-gray-200 rounded px-5 py-5 flex gap-4 cursor-pointer hover:border-blue-200 hover:shadow-md transition-all duration-200" onClick={() => {}}>
                    <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-9 h-9 rounded-full bg-blue-600 text-white text-sm font-semibold flex items-center justify-center z-10">5</div>

                    </div>
                    <div className="flex items-start justify-between gap-4 flex-1">
                    <div className="flex-1">
                        <h3 className="text-sm font-semibold text-gray-900 mb-0.5">Review &amp; Approve</h3>
                        <p className="text-xs text-gray-400 flex items-center gap-1 mb-3">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6l4 2"/></svg>
                        Your timeline
                        </p>
                        <p className="desc text-sm text-gray-500 leading-relaxed">Read your estimate in detail, ask questions, or request adjustments. When you're ready, simply approve the estimate online or via text.</p>
                    </div>
                    <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none" viewBox="0 0 24 24" stroke="#155DFC" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                    </div>
                    </div>
                </div>

                {/* Step 6 */}
                <div className="step-card bg-white border border-gray-200 rounded px-5 py-5 flex gap-4 cursor-pointer hover:border-blue-200 hover:shadow-md transition-all duration-200" onClick={() => {}}>
                    <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-9 h-9 rounded-full bg-blue-600 text-white text-sm font-semibold flex items-center justify-center z-10">6</div>

                    </div>
                    <div className="flex items-start justify-between gap-4 flex-1">
                    <div className="flex-1">
                        <h3 className="text-sm font-semibold text-gray-900 mb-0.5">Schedule Your Project</h3>
                        <p className="text-xs text-gray-400 flex items-center gap-1 mb-3">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6l4 2"/></svg>
                        1–3 days out
                        </p>
                        <p className="desc text-sm text-gray-500 leading-relaxed">Once approved, we'll contact you to schedule a convenient start date. Most bathroom remodels are completed in 5–10 days. Track your project status anytime using your project ID.</p>
                    </div>
                    <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none" viewBox="0 0 24 24" stroke="#155DFC" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                    </div>
                    </div>
                </div>

                {/* Step 7 (last – no line) */}
                <div className="step-card bg-white border border-gray-200 rounded px-5 py-5 flex gap-4 cursor-pointer hover:border-blue-200 hover:shadow-md transition-all duration-200" onClick={() => {}}>
                    <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-9 h-9 rounded-full bg-blue-600 text-white text-sm font-semibold flex items-center justify-center">7</div>
                    </div>
                    <div className="flex items-start justify-between gap-4 flex-1">
                    <div className="flex-1">
                        <h3 className="text-sm font-semibold text-gray-900 mb-0.5">We Complete Your Bathroom</h3>
                        <p className="text-xs text-gray-400 flex items-center gap-1 mb-3">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6l4 2"/></svg>
                        5–10 days
                        </p>
                        <p className="desc text-sm text-gray-500 leading-relaxed">Our licensed professionals arrive on schedule and complete your remodel with minimal disruption. The entire process – including demo, installation, plumbing, and cleanup – is handled by our team. Daily updates keep you informed of progress.</p>
                    </div>
                    <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none" viewBox="0 0 24 24" stroke="#155DFC" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>
                    </div>
                    </div>
                </div>

                </div>
            </div>
        </section>
 
    );
}
