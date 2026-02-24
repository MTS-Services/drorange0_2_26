import React from 'react';

import { useScrollAnimation } from '@/hooks/use-scroll-animation';

export function HowWeHelpSection() {
    const [ref, visible] = useScrollAnimation<HTMLDivElement>();
    const base = 'transition-all duration-700 ease-out';
    const state = visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6';

    const tileClass = `${base} ${state}`;

    return (
      <section className="lg:py-16 py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-10">
            <h2 className="text-2xl lg:text-3xl font-black text-gray-900 mb-2 font-bold">Stay Informed Every Step</h2>
            <p className="text-gray-500 text-sm max-w-xl mx-auto">Our platform keeps you updated throughout your bathroom renovation.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

            <div className="inform-card px-4">
                <div className="inform-icon">
                <img src="images/icon/📱 (1).png" alt="" />
                </div>
                <h4 className="font-medium text-gray-900 text-xl mb-1">Track Your Project Online</h4>
                <p className="text-gray-500 text-xs leading-relaxed">Use our project link or mobile app to check project status and review your estimate at any time.</p>
            </div>

            <div className="inform-card px-4">
                <div className="inform-icon bg-yellow-50">
                <img src="images/icon/🔔.png" alt="" />
                </div>
                <h4 className="font-medium text-gray-900 text-xl mb-1">Missing Item Reminders</h4>
                <p className="text-gray-500 text-xs leading-relaxed">If we still need information or documents to proceed, we'll send you a reminder automatically.</p>
            </div>

            <div className="inform-card px-4">
                <div className="inform-icon bg-blue-50">
                <img src="images/icon/💬.png" alt="" />
                </div>
                <h4 className="font-medium text-gray-900 text-xl mb-1">SMS Updates</h4>
                <p className="text-gray-500 text-xs leading-relaxed">Receive text message notifications at important updates such as estimate ready and project milestones.</p>
            </div>

            <div className="inform-card px-4">
                <div className="inform-icon bg-green-50">
                <img src="images/icon/💰.png" alt="" />
                </div>
                <h4 className="font-medium text-gray-900 text-xl mb-1">No Surprises</h4>
                <p className="text-gray-500 text-xs leading-relaxed">Our detailed estimates include everything. No hidden costs, no unexpected charges.</p>
            </div>

            </div>
        </div>
    </section>
    );
}