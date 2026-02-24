import React from 'react';

import { PoundSterling } from 'lucide-react';

import { useReveal } from '@/hooks/use-reveal';

type WhyCard = {
    title: string;
    desc: string;
    gradient: string;
    border: string;
    titleColor: string;
    checkColor: string;
    iconColor: string;
    delay: string;
    icon: React.ReactNode;
};

const cards: WhyCard[] = [
    {
        title: 'Avoid Family Fights',
        desc: 'Prevent disputes and conflicts by clearly stating your wishes',
        gradient: 'from-pink-50 to-pink-100',
        border: 'border-pink-300',
        titleColor: 'text-pink-900',
        checkColor: 'text-pink-600',
        iconColor: 'text-pink-500',
        delay: 'delay-0',
        icon: (
            <svg className="w-14 h-14" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                <path d="M13 7a1 1 0 11-2 0 1 1 0 012 0zM9 7a1 1 0 11-2 0 1 1 0 012 0z" />
            </svg>
        ),
    },
    {
        title: 'Appoint Guardians',
        desc: 'Choose who will care for your minor children',
        gradient: 'from-blue-50 to-blue-100',
        border: 'border-blue-300',
        titleColor: 'text-blue-900',
        checkColor: 'text-blue-600',
        iconColor: 'text-blue-500',
        delay: 'delay-150',
        icon: (
            <svg className="w-14 h-14" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
            </svg>
        ),
    },
    {
        title: 'Distribute Wealth',
        desc: 'Ensure your assets go exactly where you want them to',
        gradient: 'from-yellow-50 to-yellow-100',
        border: 'border-yellow-300',
        titleColor: 'text-yellow-900',
        checkColor: 'text-yellow-700',
        iconColor: 'text-yellow-500',
        delay: 'delay-300',
        icon: <PoundSterling className="h-14 w-14" strokeWidth={1.5} aria-hidden="true" />,
    },
    {
        title: 'Care For Seniors',
        desc: 'Provide for elderly family members with specific provisions',
        gradient: 'from-green-50 to-green-100',
        border: 'border-green-300',
        titleColor: 'text-green-900',
        checkColor: 'text-green-700',
        iconColor: 'text-green-500',
        delay: 'delay-500',
        icon: (
            <svg className="w-14 h-14" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                <path d="M13 7h2a1 1 0 011 1v1a1 1 0 11-2 0V8h-1a1 1 0 110-2h1V7z" />
            </svg>
        ),
    },
];

export function WhyCreateWillCardsGrid() {
    const [gridRef, gridVisible] = useReveal<HTMLDivElement>(0.1);

    return (
        <section className="bg-white overflow-hidden">
           {/* Services */}
        <section id="services" className="lg:py-20 py-10 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">     
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 font-inter font-bold">Our Services</h2>
              <p className="text-gray-500 mt-3 max-w-xl mx-auto">From complete renovations to targeted upgrades, we handle every aspect of your bathroom transformation.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        
              <div className="service-card bg-white">
                <div className="service-icon">
                  <img src="images/icon/🛁.png" alt="" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Complete Bathroom Remodeling</h3>
                <p className="text-sm text-gray-500 leading-relaxed">No bathroom renovation too big or small from start to completion.</p>
              </div>
        
              <div className="service-card bg-white">
                <div className="service-icon">
                  <img src="images/icon/🚿.png" alt="" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Tub to Shower Conversion</h3>
                <p className="text-sm text-gray-500 leading-relaxed">Transform your old tub into a custom, modern shower.</p>
              </div>
        
              <div className="service-card bg-white">
                <div className="service-icon">
                   <img src="images/icon/🪞.png" alt="" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Vanity &amp; Fixture Upgrades</h3>
                <p className="text-sm text-gray-500 leading-relaxed">New vanities, toilets, sinks, and fixtures to match your style.</p>
              </div>
        
              <div className="service-card bg-white">
                <div className="service-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
                  <rect width="100" height="100" fill="#D8B4FE" rx="8"/>
                </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Tile &amp; Flooring Installation</h3>
                <p className="text-sm text-gray-500 leading-relaxed">Specialty tile work and flooring with expert installation systems.</p>
              </div>
        
            </div>
            <div className="text-center mt-10">
              <a href="#" className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm hover:gap-3 transition-all">
                Learn More About Our Services
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>
              </a>
            </div>
          </div>
        </section>
        </section>
    );
}
