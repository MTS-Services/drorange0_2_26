import React from 'react';

export function ContactHeroSection({ banner }: any) {
    return (
        <div className="bg-gray-50 text-gray-800"> 
        <section className=" bg-blue-600 text-white px-8 py-20 ">
            <div className="max-w-5xl mx-auto">
            <h1 className="font-inter text-4xl font-bold mb-2" >{banner.title}</h1>
            <p className="text-indigo-200 text-lg font-inter">{banner.subtitle}</p>
           
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
