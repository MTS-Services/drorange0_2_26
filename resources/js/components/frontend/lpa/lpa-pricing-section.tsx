import React from 'react';

export function LpaPricingSection() {
    return (
        <section className="max-w-6xl mx-auto px-6 py-20 text-center">
    <div className="mb-4 flex justify-center">
      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
      </div>
    </div>
    <h2 className="text-3xl font-bold mb-2 text-gray-900">Service Area</h2>
    <p className="text-gray-500 mb-10">Proudly serving homeowners throughout Ohio</p>
    <div className="bg-blue-50 rounded-2xl p-8">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm text-gray-700 mb-6">
        <div className="flex items-center gap-2 text-gray-900">
          <div className="mt-0.5 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
            <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
          Columbus, OH
        </div>

        <div className="flex items-center gap-2 text-gray-900">
          <div className="mt-0.5 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
            <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
          Cleveland, OH
        </div>
        <div className="flex items-center gap-2 text-gray-900">
          <div className="mt-0.5 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
            <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
          Cincinnati, OH
        </div>
        <div className="flex items-center gap-2 text-gray-900">
          <div className="mt-0.5 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
            <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
          Akron, OH
        </div>
        <div className="flex items-center gap-2 text-gray-900">
          <div className="mt-0.5 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
            <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
          Dayton, OH
        </div>
        <div className="flex items-center gap-2 text-gray-900">
          <div className="mt-0.5 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
            <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
          Toledo, OH
        </div>
        <div className="col-span-2 flex items-center gap-2 text-gray-900">
          <div className="mt-0.5 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
            <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
          And surrounding areas
        </div>
      </div>
      <p className="text-xs text-gray-400">Don't see your city? Contact us to check if we service your area.</p>
    </div>
  </section>
    );
}
