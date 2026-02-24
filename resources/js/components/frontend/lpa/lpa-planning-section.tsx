import { Link } from '@inertiajs/react';
import React from 'react';

const willSteps = [
    {
        title: 'Answer a few simple questions.',
        description: 'No doctor visits or tests—just eligibility questions so we can tailor guidance to you.',
    },
    {
        title: 'Choose a policy that works for you.',
        description: "Mix and match cover levels, add LPAs, or include mirror wills so the plan fits life's changes.",
    },
    {
        title: "Kick back and relax. You're covered.",
        description: 'We keep your docs updated and share them securely with attorneys and loved ones.',
    },
];

export function LpaPlanningSection() {
    return (
       <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2 text-gray-900">Licenses &amp; Certifications</h2>
        <p className="text-center text-gray-500 mb-10">Fully licensed, bonded, and insured for your protection</p>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 grid sm:grid-cols-2 gap-5">
            <div className="flex items-start gap-3">
            <div className="mt-0.5 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" stroke-width="2.5"
                viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
            </div>
            <div>
                <p className="font-medium text-sm text-gray-900">Ohio State Contractor License</p>
                <p className="text-xs text-gray-400">License #C345678</p>
            </div>
            </div>
            <div className="flex items-start gap-3">
            <div className="mt-0.5 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" stroke-width="2.5"
                viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
            </div>
            <div>
                <p className="font-medium text-sm text-gray-900">General Liability Insurance</p>
                <p className="text-xs text-gray-400">$2,000,000 aggregate</p>
            </div>
            </div>
            <div className="flex items-start gap-3">
            <div className="mt-0.5 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" stroke-width="2.5"
                viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
            </div>
            <div>
                <p className="font-medium text-sm text-gray-900">Workers' Compensation</p>
                <p className="text-xs text-gray-400">All employees insured</p>
            </div>
            </div>
            <div className="flex items-start gap-3">
            <div className="mt-0.5 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" stroke-width="2.5"
                viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
            </div>
            <div>
                <p className="font-medium text-sm text-gray-900">Better Business Bureau</p>
                <p className="text-xs text-gray-400">A+ Rating</p>
            </div>
            </div>
            <div className="flex items-start gap-3">
            <div className="mt-0.5 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" stroke-width="2.5"
                viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
            </div>
            <div>
                <p className="font-medium text-sm text-gray-900">EPA Lead-Safe Certified</p>
                <p className="text-xs text-gray-400">Firm #NAT-F123456</p>
            </div>
            </div>
            <div className="flex items-start gap-3">
            <div className="mt-0.5 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" stroke-width="2.5"
                viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
            </div>
            <div>
                <p className="font-semibold text-sm text-gray-900">10-Year Warranty</p>
                <p className="text-xs text-gray-400">On all workmanship</p>
            </div>
            </div>
        </div>
        </div>
       </section>
    );
}
