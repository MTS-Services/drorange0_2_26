import React from 'react';

import { Link } from '@inertiajs/react';
import { useReveal } from '@/hooks/use-reveal';

const steps = [
    {
        number: '1',
        gradient: 'from-green-400 to-green-600',
        accent: 'bg-yellow-400',
        accentBottom: 'bg-green-300',
        title: 'Answer Questions',
        description:
            "While there is more than one way to make a will online, you can generally expect to answer questions about your circumstances such as whether you're single or married, and where your assets are located from your mobile phone or comfort of your computer chair.",
        delay: 'delay-0',
    },
    {
        number: '2',
        gradient: 'from-yellow-400 to-yellow-600',
        accent: 'bg-orange-400',
        accentBottom: 'bg-yellow-300',
        title: 'Expert Review',
        description:
            'Following this, a team of experts will typically examine your application, recommend any changes and do a final review to ensure everything is legally compliant and meets your specific needs.',
        delay: 'delay-200',
    },
    {
        number: '3',
        gradient: 'from-orange-400 to-orange-600',
        accent: 'bg-red-400',
        accentBottom: 'bg-orange-300',
        title: 'Sign & Witness',
        description:
            "Once approved, you'll still need to print and sign your legally-binding document in the presence of two witnesses to make it valid and enforceable under law.",
        delay: 'delay-500',
    },
];

export function HowItWorksSection() {
    const [headerRef, headerVisible] = useReveal<HTMLDivElement>();
    const [stepsRef, stepsVisible] = useReveal<HTMLDivElement>(0.1);

    return (
 
       
      <section id="how-it-works" className="lg:py-20 py-10 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 font-semibold font-inter">How It Works</h2>
          <p className="text-gray-600 mt-3">Our streamlined process makes bathroom remodeling easy and stress-free.</p>
        </div>
    
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* connector line on desktop */}
          <div className="hidden md:block absolute top-6 left-1/4 right-1/4 h-0.5" style={{ left: '16.66%', right: '16.66%' }}></div>
    
          <div className="text-center relative">
            <div className="step-circle">1</div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Request Free Estimate</h3>
            <p className="text-sm text-gray-500 leading-relaxed">Submit photos and select options online or via text message.</p>
          </div>
          <div className="text-center relative">
            <div className="step-circle">2</div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Get Your Quote</h3>
            <p className="text-sm text-gray-500 leading-relaxed">Receive a detailed quote via text message within 24 hours.</p>
          </div>
          <div className="text-center relative">
            <div className="step-circle">3</div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Schedule &amp; Complete</h3>
            <p className="text-sm text-gray-500 leading-relaxed">Approve the estimate and we'll schedule your project promptly.</p>
          </div>
        </div>
    
        <div className="text-center mt-12">
          <a href="#" className="btn-blue inline-flex items-center gap-2">
            Start Your Project Today
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>
          </a>
        </div>
      </div>
    </section>
    );
}
