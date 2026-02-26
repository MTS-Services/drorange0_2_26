import { Link } from '@inertiajs/react';
import React from 'react';



export function AboutHeroSection({banner}: any ) {
    return (
        <section className="bg-white text-gray-800 antialiased">
        <div className="bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800 text-white text-center py-16 px-6">
          <div className="max-w-2xl mx-auto">
            <h1 className="lg:text-4xl text-2xl font-black mb-4 fade-up fade-up-1 font-semibold">{banner?.title}</h1>
            <p className="text-blue-100 leading-relaxed fade-up fade-up-2 font-inter text-base">
             {
              banner?.subtitle
             }
            </p>
            {banner?.additional_info ? (
                <div
                  className=""
                  dangerouslySetInnerHTML={{ __html: banner.additional_info || '' }}
                ></div>
              ) : null}
          </div>
        </div>
      </section>
    );
}
