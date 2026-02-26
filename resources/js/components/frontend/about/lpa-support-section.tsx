import React from 'react';

const floatingBadges = [
    { color: 'bg-primary-500', delay: '0s' },
    { color: 'bg-primary-400', delay: '0.3s' },
    { color: 'bg-primary-300', delay: '0.6s' },
    { color: 'bg-slate-500', delay: '0.9s' },
    { color: 'bg-slate-400', delay: '1.2s' },
];

export function LpaSupportSection() {
    return (
        <section
            className="max-w-6xl mx-auto bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800 text-white text-center py-16 px-6">
            <div className="max-w-xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-black mb-4 font-inter">Ready to Work With Us?</h2>
                <p className="text-blue-100 mb-8">Join hundreds of satisfied homeowners who have transformed their bathrooms with
                    BathPro Remodeling.</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a href="#"
                        className="bg-white text-blue-700 font-semibold px-7 py-3 rounded-xl hover:bg-blue-50 transition-colors text-sm shadow-lg">Get
                        Free Estimate</a>
                    <a href="#"
                        className="border-2 border-white text-white font-semibold px-7 py-3 rounded-xl hover:bg-white hover:text-blue-700 transition-colors text-sm">Contact
                        Us</a>
                </div>
            </div>
        </section>
    );
}
