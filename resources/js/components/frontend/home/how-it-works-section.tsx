
export function HowItWorksSection({howItWorks}: any) {
   

    return (
 
       
      <section id="how-it-works" className="lg:py-20 py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center mb-14">
          
          <h2 className="font-sf-pro font-semibold text-gray-900 text-3xl md:text-4xl xl:text-5xl">How It Works</h2>
          <p className="text-gray-600 mt-3 font-inter font-normal text-xl">Our streamlined process makes bathroom remodeling easy and stress-free.</p>
        </div>
    
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* connector line on desktop */}
          <div className="hidden md:block absolute top-6 left-1/4 right-1/4 h-0.5" style={{ left: '16.66%', right: '16.66%' }}></div>
    
          <div className="text-center relative">
            <div className="step-circle text-white font-bold text-2xl font-inter">1</div>
            <h3 className="text-[#0A0A0A] mb-2 font-inter font-normal text-2xl">Request Free Estimate</h3>
            <p className="text-base font-inter font-normal text-gray-500 leading-relaxed">Submit photos and select your options online in just minutes.</p>
          </div>
          <div className="text-center relative">
            <div className="step-circle text-white font-bold text-2xl font-inter">2</div>
            <h3 className="text-[#0A0A0A] mb-2 font-inter font-normal text-2xl">Get Your Quote</h3>
            <p className="text-base font-inter font-normal text-gray-500 leading-relaxed">Receive a detailed estimate via text message within 24 hours.</p>
          </div>
          <div className="text-center relative">
            <div className="step-circle text-white font-bold text-2xl font-inter">3</div>
            <h3 className="text-[#0A0A0A] mb-2 font-inter font-normal text-2xl">Schedule &amp; Complete</h3>
            <p className="text-base font-inter font-normal text-gray-500 leading-relaxed">Approve the estimate and we'll schedule your project.</p>
          </div>
        </div>
    
        <div className="text-center mt-12">
          <a href={route('free-estimate')} className="btn-blue-2 inline-flex items-center gap-2 font-inter font-bold text-base ">
            Start Your Project Today
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>
          </a>
        </div>
      </div>
    </section>
    );
}
