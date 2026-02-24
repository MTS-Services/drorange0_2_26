import React from 'react';

const featuredLogos = ['The Telegraph', 'Social Enterprise UK', 'Financial Times', 'Manchester Evening News'];

export function LpaFeaturedLogosSection() {
    return (
        <section className="bg-blue-50 py-14 px-6 max-w-6xl mx-auto">
            <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="stat-card rounded-2xl p-6 text-center  cursor-default">
                <p className="lg:text-4xl md:text-2xl font-black text-blue-700 font-semibold">15+</p>
                <p className="text-sm text-gray-500 mt-1 font-medium">Years in Business</p>
            </div>
            <div className="stat-card rounded-2xl p-6 text-center  cursor-default">
                <p className="lg:text-4xl md:text-2xl font-black text-blue-700 font-semibold">500+</p>
                <p className="text-sm text-gray-500 mt-1 font-medium">Bathrooms Completed</p>
            </div>
            <div className="stat-card rounded-2xl p-6 text-center  cursor-default">
                <p className="lg:text-4xl md:text-2xl font-black text-blue-700 font-semibold">98%</p>
                <p className="text-sm text-gray-500 mt-1 font-medium">Customer Satisfaction</p>
            </div>
            <div className="stat-card rounded-2xl p-6 text-center  cursor-default">
                <p className="lg:text-4xl md:text-2xl font-black text-blue-700 font-semibold">4.9<span className="text-xl">/5</span></p>
                <p className="text-sm text-gray-500 mt-1 font-medium">Average Rating</p>
            </div>
            </div>
    </section>
    );
}
