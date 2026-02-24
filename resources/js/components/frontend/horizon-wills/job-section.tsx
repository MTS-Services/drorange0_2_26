import React from 'react';

import { useReveal } from '@/hooks/use-reveal';

const features = [
    {
        title: 'User accounts & dashboards',
        detail: 'Clients register, save drafts, and download documents directly from their personal workspace.'
    },
    {
        title: 'Automated PDF generation',
        detail: 'Once questionnaires are complete, the system compiles legally formatted PDFs instantly.'
    },
    {
        title: 'Secure messaging + notifications',
        detail: 'In-app messages keep every conversation in one place with audit trails for compliance.'
    },
    {
        title: 'Deployment + 30-day support',
        detail: 'We help launch on your domain and provide post-delivery assistance while you onboard clients.'
    },
];

export function JobSection() {
    const [textRef, textVisible] = useReveal<HTMLDivElement>();
    const [cardRef, cardVisible] = useReveal<HTMLDivElement>(0.2);

    return (
        <section className="lg:py-20 py-10 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 font-bold font-inter">What's Included</h2>
            <p className="text-gray-500 text-sm mt-2 max-w-lg mx-auto">Everything you need for a complete, stress-free bathroom
              transformation.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    
            <div className="feature-card">
              <div className="icon-box">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="font-medium text-gray-900 text-sm mb-1">Design Consultation</h3>
              <p className="text-xs text-gray-500 leading-relaxed">Work with our experts to design your perfect bathroom.</p>
            </div>
    
            <div className="feature-card">
              <div className="icon-box">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="font-medium text-gray-900 text-sm mb-1">Quality Materials</h3>
              <p className="text-xs text-gray-500 leading-relaxed">Choose from premium fixtures, tiles, and finishes.</p>
            </div>
    
            <div className="feature-card">
              <div className="icon-box">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-medium text-gray-900 text-sm mb-1">Expert Installation</h3>
              <p className="text-xs text-gray-500 leading-relaxed">Licensed professionals handle every detail of your
                renovation.</p>
            </div>
    
            <div className="feature-card">
              <div className="icon-box">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="font-medium text-gray-900 text-sm mb-1">Project Management</h3>
              <p className="text-xs text-gray-500 leading-relaxed">Track progress online and stay informed at every step.</p>
            </div>
    
            <div className="feature-card">
              <div className="icon-box">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="font-medium text-gray-900 text-sm mb-1">Clean-Up Service</h3>
              <p className="text-xs text-gray-500 leading-relaxed">We leave your home clean and ready to enjoy.</p>
            </div>
    
            <div className="feature-card">
              <div className="icon-box">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-medium text-gray-900 text-sm mb-1">10-Year Warranty</h3>
              <p className="text-xs text-gray-500 leading-relaxed">Our work is backed by a comprehensive warranty.</p>
            </div>
    
          </div>
        </div>
      </section>
    );
}
