import React from 'react';

export function ContactHeroSection() {
    return (
        <div className="bg-gray-50 text-gray-800"> 
        <section className=" bg-blue-600 text-white px-8 py-20 ">
            <div className="max-w-5xl mx-auto">
            <h1 className="font-inter text-4xl font-bold mb-2" >Contact Us</h1>
            <p className="text-indigo-200 text-lg font-inter">Have questions? We're here to help! Reach out via phone, email, or the form below.</p>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-16 from-white to-transparent"></div>
        </section>     
        </div>
    );
}
