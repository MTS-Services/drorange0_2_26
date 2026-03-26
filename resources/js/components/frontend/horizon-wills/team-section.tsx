
import { Link } from '@inertiajs/react';
import { CircleCheckBig } from 'lucide-react';
import React from 'react';

const benefits = [
    'Generate recurring revenue by selling digital will + LPA bundles online.',
    'Offer premium add-ons like storage, consultations, and bespoke drafting.',
    'Clients can self-serve 24/7, freeing you to focus on growth.',
    'Secure authentication, audit logs, and backups keep data protected.',
];

const pages = [
    'Home landing page',
    'Create a Will flow',
    'LPA Health & Welfare page',
    'LPA Property & Finance page',
    'About page',
    'Contact page',
    'Login / Register',
    'User dashboard',
];

export function TeamSection({options, whychooses}: any) {
    return (
        <>
        <section className="lg:py-20 py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-sf-pro font-semibold text-gray-900 text-3xl md:text-4xl xl:text-5xl">Remodeling Options</h2>
            <p className="mx-auto mt-3 max-w-2xl text-gray-500 font-inter font-normal text-xl mb-16">From minor updates to complete transformations, we handle it all.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
    
            {
              options.map((option:any, index:number)=>{
                return (
                  <div className="option-card flex gap-4 items-start p-12">
                  <div className="icon-box mt-0.5">
                   <img src={option.icon_url} alt="" />
              </div>
              <div>
                <h3 className="font-inter font-normal text-gray-900 text-2xl mb-1">{option.title}</h3>
                <p className="font-inter font-normal text-gray-500 text-base">{option.subtitle}</p>
              </div>
            </div>
                )
              })
            }    
          </div>
        </div>
      </section>
    
      <section className="w-full max-w-7xl mx-auto bg-blue-600 lg:py-20 py-8 text-white px-4">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-sf-pro font-semibold text-white text-3xl md:text-4xl xl:text-5xl mb-2">Why Choose BathPro Remodeling?</h2>
          <p className="mx-auto mt-3 text-white/75 font-inter font-normal text-xl mb-16">Professional service, quality craftsmanship, and customer
            satisfaction guaranteed.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
    
            {
              whychooses.map((whychoose:any, index:number) => {
                return (
                  <div className="text-center px-4">
              <div className="why-icon p-4 mx-auto inline-block bg-white/10 rounded-full shadow-lg">
                <img src={whychoose.icon_url} alt=""  className='h-6 w-6'/>
              </div>
              <h3 className="font-inter font-normal text-white text-2xl mb-2">{whychoose.title}</h3>
              <p className="font-inter font-normal text-white/70 text-base leading-relaxed">{whychoose.subtitle}</p>
            </div>
                )
              })
            }    
          </div>
        </div>
      </section>
    
      <section className="lg:py-20 py-8 bg-white text-center px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-sf-pro font-semibold text-gray-900 text-3xl md:text-4xl xl:text-5xl mb-2">Ready to Start Your Bathroom
            Remodel?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-gray-500 font-inter font-normal text-xl mb-16">
            Get a free estimate in 24 hours. Simply upload photos, select your options, and receive a detailed quote via
            text message.
          </p>
          <Link href={route('free-estimate')} className="btn-blue-2 mb-8 inline-flex items-center gap-2 justify-center">
            Request Free Estimate
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd" />
            </svg>
          </Link>
          <div className="flex flex-wrap justify-center gap-6">
            <span className="check-badge font-inter font-normal text-sm">
              <CircleCheckBig className="w-4 h-4 text-green-500" />
              No obligation
            </span>
            <span className="check-badge font-inter font-normal text-sm">
              <CircleCheckBig className="w-4 h-4 text-green-500" />
              24-hr response
            </span>
            <span className="check-badge font-inter font-normal text-sm">
              <CircleCheckBig className="w-4 h-4 text-green-500" />
              Licensed professionals
            </span>
          </div>
        </div>
      </section>
        </>
    );
}
