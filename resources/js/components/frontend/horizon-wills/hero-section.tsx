import React from 'react';

import { ArrowRight } from 'lucide-react';

export function HorizonHeroSection() {
    return (
        <section className="hero">
            <div className="relative z-10 w-full max-w-7xl mx-auto px-8 lg:px-16 lg:py-16 py-4 flex flex-col md:flex-row items-center justify-between">
                <div className="flex-1 py-4">
                <h1 className="text-white font-bold leading-tight mb-5 text-5xl">
                    Professional Bathroom Remodeling
                </h1>
                <p className="text-white/80 mb-9 leading-relaxed text-base" style={{ maxWidth: '400px' }}>
                    Transform your outdated bathroom into a beautiful, functional space. Get a free estimate in 24 hours with our simple online process.
                </p>
                <div className="flex lg:flex-wrap flex-col md:flex-row items-center gap-4">
                    <button className="btn-white">
                    Get Free Estimate
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                    </svg>
                    </button>
                    <button className="btn-outline">How It Works</button>
                </div>
                </div>
                <div className="flex-shrink-0 flex justify-center md:justify-end w-full md:w-auto">
                <div className="photo-card">
                    <img src="images/bgimg/backgroundimages.jpg" alt="Modern luxury bathroom"/>
                </div>
                </div>
            </div>
        </section>
    );
}