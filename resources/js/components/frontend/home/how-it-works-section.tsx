
export function HowItWorksSection({howItWorks}: any) {
   

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
