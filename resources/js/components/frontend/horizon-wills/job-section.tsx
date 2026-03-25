import { CircleCheckBig } from "lucide-react";


export function JobSection({includes}: any) {


    return (
        <section className="lg:py-20 py-10 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-sf-pro font-semibold text-gray-900 text-3xl md:text-4xl xl:text-5xl">What's Included</h2>
            <p className="mx-auto mt-3 max-w-2xl text-gray-500 font-inter font-normal text-xl mb-16">Everything you need for a complete, stress-free bathroom
              transformation.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    
        {includes.map((include: any) => (
            <div className="service-card">
              <div className="icon-box p-2 rounded-full!">
                {/* <img src={include.icon_url} alt={include.title} /> */}
                <CircleCheckBig className="w-10 h-10 text-blue-500" />
              </div>
              <h3 className="font-inter font-normal text-gray-900 text-xl mb-1">{include.title}</h3>
              <p className="font-inter font-normal text-gray-500 text-base">{include.subtitle}</p>
            </div>
            ))}
            
    
          </div>
        </div>
      </section>
    );
}
