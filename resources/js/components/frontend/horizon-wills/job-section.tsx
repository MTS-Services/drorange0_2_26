

export function JobSection({includes}: any) {


    return (
        <section className="lg:py-20 py-10 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 font-bold font-inter">What's Included</h2>
            <p className="text-gray-500 text-sm mt-2 max-w-lg mx-auto">Everything you need for a complete, stress-free bathroom
              transformation.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    
        {includes.map((include: any) => (
            <div className="feature-card">
              <div className="icon-box p-2">
                <img src={include.icon_url} alt={include.title} />
              </div>
              <h3 className="font-medium text-gray-900 text-sm mb-1">{include.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{include.subtitle}</p>
            </div>
            ))}
            
    
          </div>
        </div>
      </section>
    );
}
