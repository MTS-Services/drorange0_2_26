import React from 'react';

const featuredLogos = ['The Telegraph', 'Social Enterprise UK', 'Financial Times', 'Manchester Evening News'];

export function LpaFeaturedLogosSection() {
    return (
        <section className="bg-blue-50 py-14 px-4 max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="stat-card rounded-2xl p-6 text-center  cursor-default">
                <p className="text-3xl md:text-4xl xl:text-5xl font-sf-pro font-bold text-blue-700">15+</p>
                <p className="text-base font-normal text-gray-500 mt-1 font-inter">Years in Business</p>
            </div>
            <div className="stat-card rounded-2xl p-6 text-center  cursor-default">
                <p className="text-3xl md:text-4xl xl:text-5xl font-sf-pro font-bold text-blue-700">500+</p>
                <p className="text-base font-normal text-gray-500 mt-1 font-inter">Bathrooms Completed</p>
            </div>
            <div className="stat-card rounded-2xl p-6 text-center  cursor-default">
                <p className="text-3xl md:text-4xl xl:text-5xl font-sf-pro font-bold text-blue-700">98%</p>
                <p className="text-base font-normal text-gray-500 mt-1 font-inter">Customer Satisfaction</p>
            </div>
            <div className="stat-card rounded-2xl p-6 text-center  cursor-default">
                <p className="text-3xl md:text-4xl xl:text-5xl font-sf-pro font-bold text-blue-700">4.9<span className="text-xl">/5</span></p>
                <p className="text-base font-normal text-gray-500 mt-1 font-inter">Average Rating</p>
            </div>
            </div>
    </section>
    );
}
