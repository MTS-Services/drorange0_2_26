  

export function HeroSection({banner}: any) {


    return (
      <div className="text-center bg-[#193CB8] lg:p-24 p-12">
      <h2 className="lg:text-5xl text-3xl font-black text-white mb-3 font-arial font-medium ">{banner.title }</h2>
      <p className="text-gray-100 lg:text-lg text-base font-medium  max-w-2xl mx-auto leading-relaxed">
        {banner.subtitle}
      </p>
      <div className="max-w-2xl mx-auto ">
        {banner.additional_info}
      </div>
    </div>
    );
}
