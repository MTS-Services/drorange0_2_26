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
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 font-bold font-inter">Remodeling Options</h2>
            <p className="text-gray-500 text-sm mt-2">From minor updates to complete transformations, we handle it all.</p>
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
                <h3 className="font-medium text-gray-900 text-sm mb-1">{option.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{option.subtitle}</p>
              </div>
            </div>
                )
              })
            }    
          </div>
        </div>
      </section>
    
      <section className="bg-blue-600 lg:py-20 py-8 text-white max-w-6xl mx-auto">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-black mb-2 font-inter font-bold">Why Choose BathPro Remodeling?</h2>
          <p className="text-white/75 text-sm mb-12 max-w-lg mx-auto">Professional service, quality craftsmanship, and customer
            satisfaction guaranteed.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
    
            {
              whychooses.map((whychoose:any, index:number) => {
                return (
                  <div className="text-center px-4">
              <div className="why-icon p-2 mx-auto inline-block">
                <img src={whychoose.icon_url} alt=""  className='h-6 w-6'/>
              </div>
              <h3 className="font-medium text-base mb-2">{whychoose.title}</h3>
              <p className="text-white/70 text-xs leading-relaxed">{whychoose.subtitle}</p>
            </div>
                )
              })
            }    
          </div>
        </div>
      </section>
    
      <section className="lg:py-20 py-8 bg-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-3 font-bold font-inter">Ready to Start Your Bathroom
            Remodel?</h2>
          <p className="text-gray-500 text-sm mb-8 leading-relaxed">
            Get a free estimate in 24 hours. Simply upload photos, select your options, and receive a detailed quote via
            text message.
          </p>
          <button className="btn-blue mb-8">
            Request Free Estimate
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd" />
            </svg>
          </button>
          <div className="flex flex-wrap justify-center gap-6">
            <span className="check-badge">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20">
                <circle cx="10" cy="10" r="10" fill="#22c55e" />
                <path fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
                  d="M5.5 10.5l3 3 6-6" />
              </svg>
              No obligation
            </span>
            <span className="check-badge">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20">
                <circle cx="10" cy="10" r="10" fill="#22c55e" />
                <path fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
                  d="M5.5 10.5l3 3 6-6" />
              </svg>
              24-hr response
            </span>
            <span className="check-badge">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20">
                <circle cx="10" cy="10" r="10" fill="#22c55e" />
                <path fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
                  d="M5.5 10.5l3 3 6-6" />
              </svg>
              Licensed professionals
            </span>
          </div>
        </div>
      </section>
        </>
    );
}
