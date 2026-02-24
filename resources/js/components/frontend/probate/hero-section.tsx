import React from 'react';

import { useScrollAnimation } from '@/hooks/use-scroll-animation';

export function HeroSection() {
    const [sectionRef, isVisible] = useScrollAnimation<HTMLDivElement>();
    const animatedBase = 'transition-all duration-700 ease-out';
    const animatedState = isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6';

    return (
      <div className="text-center bg-[#193CB8] lg:p-24 p-12">
      <h2 className="lg:text-5xl text-3xl font-black text-white mb-3 font-arial font-medium ">How It Works</h2>
      <p className="text-gray-100 lg:text-lg text-base font-medium  max-w-2xl mx-auto leading-relaxed">
        Our streamlined process makes bathroom remodeling simple, transparent, and stress-free. From estimate to completion in just a few easy steps.
      </p>
    </div>
    );
}
