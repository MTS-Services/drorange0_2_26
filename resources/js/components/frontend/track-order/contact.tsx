import React from 'react';

interface ContactProps {
    formData: {
        contactInfo: Record<string, unknown>;
    };
    updateFormData: (data: Partial<ContactProps['formData']>) => void;
    nextStep: () => void;
    prevStep: () => void;
}

export default function Contact({ formData, updateFormData, nextStep, prevStep }: ContactProps) {
    return (
        <div className="flex items-start justify-center lg:py-10 py-6 lg:px-4 px-2">
  <div className="max-w-6xl mx-auto w-full bg-gray-100 lg:p-6 p-3">
    {/* Header */}
    <div className="text-center mb-8">
      <h1 className="text-4xl font-semibold font-inter text-gray-900 mb-2">
        Request Your Free Estimate
      </h1>
      <p className="text-gray-500 text-base">
        Complete the form below to receive your detailed estimate within 24
        hours
      </p>
    </div>
    {/* Stepper */}
    <div className="flex items-center justify-between mb-8 px-2">
      {/* Step 1 – Completed */}
      <div className="flex flex-col items-center">
        <div className="w-9 h-9 rounded-full bg-green-500 text-white flex items-center justify-center z-10">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth={3}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <span className="text-xs text-gray-600 font-medium mt-1.5">Photos</span>
      </div>
      <div className="flex-1 h-px bg-green-400 mx-1 mb-4" />
      {/* Step 2 – Completed */}
      <div className="flex flex-col items-center">
        <div className="w-9 h-9 rounded-full bg-green-500 text-white flex items-center justify-center z-10">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth={3}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <span className="text-xs text-gray-600 font-medium mt-1.5">
          Options
        </span>
      </div>
      <div className="flex-1 h-px bg-green-400 mx-1 mb-4" />
      {/* Step 3 – Active */}
      <div className="flex flex-col items-center">
        <div className="w-9 h-9 rounded-full bg-blue-600 text-white text-sm font-bold flex items-center justify-center z-10">
          3
        </div>
        <span className="text-xs text-gray-700 font-semibold mt-1.5">
          Contact
        </span>
      </div>
      <div className="flex-1 h-px bg-gray-300 mx-1 mb-4" />
      {/* Step 4 */}
      <div className="flex flex-col items-center">
        <div className="w-9 h-9 rounded-full border-2 border-gray-300 text-gray-400 text-sm font-semibold flex items-center justify-center bg-white">
          4
        </div>
        <span className="text-xs text-gray-400 mt-1.5">Verify</span>
      </div>
      <div className="flex-1 h-px bg-gray-300 mx-1 mb-4" />
      {/* Step 5 */}
      <div className="flex flex-col items-center">
        <div className="w-9 h-9 rounded-full border-2 border-gray-300 text-gray-400 text-sm font-semibold flex items-center justify-center bg-white">
          5
        </div>
        <span className="text-xs text-gray-400 mt-1.5">Review</span>
      </div>
    </div>
    {/* Card */}
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
      {/* Card Body */}
      <div className="lg:px-8 lg:py-12 px-4 py-8">
        <h2 className="text-xl font-medium text-gray-900 mb-1">
          Your Contact Information
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          We'll use this information to send you your estimate and keep you
          updated on your project.
        </p>
        <form className="space-y-5">
          {/* First Name / Last Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-800 mb-1">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                defaultValue="Wade Warren"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-700 transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-800 mb-1">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                defaultValue="Morgan"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-700 transition-all"
              />
            </div>
          </div>
          {/* Mobile Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-800 mb-1">
              Mobile Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              placeholder="+7 (903) 840-31-53"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-400 transition-all"
            />
            <p className="text-xs text-gray-400 mt-1.5">
              We'll send your estimate via SMS to this number
            </p>
          </div>
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-800 mb-1">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="alma.lawson@example.com"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-400 transition-all"
            />
          </div>
          {/* Property Address */}
          <div>
            <label className="block text-sm font-medium text-gray-800 mb-1">
              Property Address <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="2715 Ash Dr. San Jose, South Dakota 83475"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-400 transition-all"
            />
          </div>
          {/* City / ZIP */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-800 mb-1">
                City <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Pembroke Pines"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-400 transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-800 mb-1">
                ZIP Code <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="32217"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-400 transition-all"
              />
            </div>
          </div>
          {/* SMS Consent Checkbox */}
          <label className="flex items-start gap-3 border border-gray-200 rounded-xl px-5 py-4 cursor-pointer hover:bg-gray-50 transition-colors">
            <div className="relative flex-shrink-0 mt-0.5">
              <input
                type="checkbox"
                id="smsConsent"
                defaultChecked={true}
                className="peer sr-only"
              />
              <div className="w-5 h-5 rounded border-2 border-blue-600 bg-blue-600 peer-checked:bg-blue-600 flex items-center justify-center">
                <svg
                  className="w-3 h-3 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={3}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>
            <span className="text-sm text-gray-600 leading-relaxed">
              <span className="text-red-500">*</span> I agree to receive text
              messages about my estimate and project status. Standard message
              and data rates may apply.
            </span>
          </label>
        </form>
      </div>
      {/* Card Footer */}
      <div className="border-t border-gray-100 px-8 py-5 flex justify-between items-center bg-gray-50">
        <button className="border border-gray-300 text-gray-700 hover:bg-gray-100 font-semibold px-5 py-2.5 rounded-lg text-sm flex items-center gap-1.5 transition-colors">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back
        </button>
        <button onClick={nextStep} className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold px-6 py-2.5 rounded-lg text-sm flex items-center gap-1.5 transition-colors">
          Continue
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</div>

    );
}