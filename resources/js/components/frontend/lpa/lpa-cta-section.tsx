import React from 'react';

export function LpaCtaSection() {
    return (
        <section className="max-w-5xl mx-auto px-6 py-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 text-gray-900">
                Why Choose Us
            </h2>
            <p className="text-center text-gray-500 mb-12 font-inter">
                We're committed to delivering exceptional results on every project
            </p>
            <div className="grid md:grid-cols-3 gap-6">
                {/* Card 1 */}
                <div className="feature-card bg-white border border-gray-100 rounded-2xl p-8 text-center shadow-sm cursor-default">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-5">
                    <svg
                    className="w-7 h-7 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    viewBox="0 0 24 24"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                    />
                    </svg>
                </div>
                <h3 className="font-medium text-lg mb-3 text-gray-900">Licensed &amp; Insured</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                    Fully licensed contractors with comprehensive insurance coverage for
                    your complete protection and peace of mind.
                </p>
                </div>
                {/* Card 2 */}
                <div className="feature-card bg-white border border-gray-100 rounded-2xl p-8 text-center shadow-sm cursor-default">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-5">
                    <svg
                    className="w-7 h-7 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    viewBox="0 0 24 24"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
                    />
                    </svg>
                </div>
                <h3 className="font-medium text-lg mb-3 text-gray-900">Quality Craftsmanship</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                    We only use premium materials and employ skilled professionals who take
                    great pride in every detail of their work.
                </p>
                </div>
                {/* Card 3 */}
                <div className="feature-card bg-white border border-gray-100 rounded-2xl p-8 text-center shadow-sm cursor-default">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-5">
                    <svg
                    className="w-7 h-7 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    viewBox="0 0 24 24"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                    />
                    </svg>
                </div>
                <h3 className="font-medium text-lg mb-3 text-gray-900">Customer-Focused</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                    Your satisfaction is our priority. We listen to your needs, communicate
                    clearly, and deliver on our promises.
                </p>
                </div>
            </div>
        </section>

    );
}
