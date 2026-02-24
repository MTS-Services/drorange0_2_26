import { Link } from '@inertiajs/react';
import React from 'react';

const heroStars = '★★★★★';

export function LpaHeroSection() {
    return (
        <section className="bg-white text-gray-800 antialiased">
        <div className="bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800 text-white text-center py-16 px-6">
          <div className="max-w-2xl mx-auto">
            <h1 className="lg:text-4xl text-2xl font-black mb-4 fade-up fade-up-1 font-semibold">About BathPro Remodeling</h1>
            <p className="text-blue-100 leading-relaxed fade-up fade-up-2 font-inter text-base">
              Transforming bathrooms across Ohio with quality craftsmanship, transparent pricing, and exceptional customer
              service since 2008.
            </p>
          </div>
        </div>
      </section>
    );
}
