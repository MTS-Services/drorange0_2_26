import React from 'react';

interface VerifyProps {
    formData: {
        verification: Record<string, unknown>;
    };
    updateFormData: (data: Partial<VerifyProps['formData']>) => void;
    nextStep: () => void;
    prevStep: () => void;
}

export default function Verify({ formData, updateFormData, nextStep, prevStep }: VerifyProps) {
    return (
        <div className=" min-h-screen flex items-start justify-center py-10 px-4">
  <div className="w-full max-w-6xl bg-gray-100 lg:p-6 p-4">
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
      {/* Step 3 – Completed */}
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
          Contact
        </span>
      </div>
      <div className="flex-1 h-px bg-green-400 mx-1 mb-4" />
      {/* Step 4 – Active */}
      <div className="flex flex-col items-center">
        <div className="w-9 h-9 rounded-full bg-blue-600 text-white text-sm font-bold flex items-center justify-center z-10">
          4
        </div>
        <span className="text-xs text-gray-700 font-semibold mt-1.5">
          Verify
        </span>
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
      <div className="px-8 py-10 text-center">
        <h2 className="lg:text-xl text-lg font-medium text-gray-900 mb-2">
          Verify Your Mobile Number
        </h2>
        <p className="text-sm text-gray-500 mb-7 max-w-2xl mx-auto">
          We've sent a verification code to 01716354519. Please enter it below
          to confirm you're not a bot.
        </p>
        {/* Code Input */}
        <div className="max-w-2xl mx-auto mb-4">
          <label className="block text-sm font-semibold text-gray-800 mb-2">
            Verification Code
          </label>
          <input
            type="text"
            maxLength={4}
            placeholder="Enter 4-digit code"
            className="code-input w-full border border-gray-300 rounded-lg px-4 py-3.5 text-gray-700 transition-all"
            onInput={(e) => {
              e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, '');
            }}
          />
        </div>
        {/* Resend */}
        <div className="mb-6">
          <button className="text-sm text-blue-600 hover:underline">
            Didn't receive the code? Resend
          </button>
        </div>
        {/* Demo Mode Banner */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-8 py-3.5 max-w-2xl mx-auto">
          <p className="text-sm text-yellow-800">
            <span className="font-semibold text-yellow-900">Demo Mode:</span>{" "}
            Check your browser console for the verification code, or check
            sessionStorage.
          </p>
        </div>
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