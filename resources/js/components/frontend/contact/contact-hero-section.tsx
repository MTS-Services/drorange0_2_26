import React from 'react';

export function ContactHeroSection({ banner }: any) {
    return (
        <div className="bg-gray-50 text-gray-800">
            <section className=" bg-blue-600 text-white px-4 sm:px-8 py-20 ">
                <div className="max-w-7xl mx-auto px-4">
                    <h1 className="font-sf-pro text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold mb-2" >{banner.title}</h1>
                    <p className="text-indigo-200 text-xl sm:text-2xl font-normal font-inter">{banner.subtitle}</p>

                    {
                        banner.additional_info && (
                            <div className='mt-2' dangerouslySetInnerHTML={{ __html: banner.additional_info }}></div>
                        )
                    }

                </div>
                <div className="absolute bottom-0 left-0 w-full h-16 from-white to-transparent"></div>
            </section>
        </div>
    );
}
