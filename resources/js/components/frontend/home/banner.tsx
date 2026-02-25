import React from 'react';
import { Link } from '@inertiajs/react';

import { useReveal } from '@/hooks/use-reveal';

 

export default function Banner({banner}: any) {
    const [headingRef, headingVisible] = useReveal<HTMLDivElement>();
    const [listRef, listVisible] = useReveal<HTMLUListElement>(0.1);
    const [ctaRef, ctaVisible] = useReveal<HTMLDivElement>(0.1);

    const heroImage = banner?.background_image_url;
    const primaryUrl = banner?.button1_url || '#';
    const secondaryUrl = banner?.button2_url || '#';

    return (
        <>
        {/* Hero - background image: add public/images/hero-bg.jpg or set heroImageUrl prop */}
        <section
          className="hero-bg text-white"
          style={{
            backgroundImage: `url('${heroImage}')`,
          }}
        >
          <div className="relative max-w-7xl mx-auto lg:px-6 px-4 py-10 lg:py-32">
            <div className="max-w-xl">
              <h1 className="text-4xl font-black font-bold leading-tight mb-5 fade-up delay-2 font-inter">
               {banner?.title}
              </h1>
              <p className="text-base md:text-lg text-white/80 mb-8 leading-relaxed fade-up delay-3">
                {banner?.subtitle}
              </p>
              <div className="flex flex-wrap gap-3 mb-10 fade-up delay-4">
                <Link href={primaryUrl} className="btn-primary inline-flex items-center gap-2">
                 {banner?.button1_text}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>
                </Link>
                <Link href={secondaryUrl} className="btn-outline-white inline-flex items-center gap-2">
                  {banner?.button2_text}
                </Link>
              </div>
              <div className="flex flex-wrap gap-3 text-sm text-white/75 fade-up delay-4">
              <span className="flex items-center justify-center w-5 h-5 rounded-full ring-2 ring-white/60 shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                </span>
                <span className="flex items-center gap-1.5">Licensed &amp; Insured</span>
                <span className="flex items-center justify-center w-5 h-5 rounded-full ring-2 ring-white/60 shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                </span>
                <span className="flex items-center gap-1.5">Free Estimates</span>
        
                <span className="flex items-center justify-center w-5 h-5 rounded-full ring-2 ring-white/60 shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                </span>
                <span className="flex items-center gap-1.5">Quick Turnaround</span>
              </div>

              {banner?.aditional_information ? (
                <div
                  className="flex flex-wrap gap-3  mt-3 text-sm text-white/75 fade-up delay-4"
                  dangerouslySetInnerHTML={{ __html: banner.aditional_information || '' }}
                ></div>
              ) : null}

            </div>
          </div>
        </section>
        </>
    );
}

 
