  

export function HeroSection({banner}: any) {


    return (
      <div className="text-center bg-[#193CB8] lg:p-24 p-12">
      <h2 className="text-3xl lg:text-5xl font-inter font-normal text-white mb-3">{banner.title }</h2>
      <p className="text-gray-100 lg:text-lg text-base font-normal  font-inter max-w-2xl mx-auto leading-relaxed">
        {banner.subtitle}
      </p>
      <div className="max-w-2xl mx-auto ">
        {/* {banner.additional_info} */}

        {banner?.additional_info ? (
                <div
                  className="flex flex-wrap gap-3  mt-5 text-sm text-white/75 fade-up delay-4"
                  dangerouslySetInnerHTML={{ __html: banner.additional_info || '' }}
                ></div>
              ) : null}
      </div>
    </div>
    );
}
