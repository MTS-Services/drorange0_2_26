import React from 'react'


export default function Review() {
    return (
       <div className=" flex flex-col items-center justify-start py-10 px-4 ">
  <div className="bg-gray-100 max-w-7xl mx-auto p-4">
    {/* Main Card */}
    <div className="w-full rounded-2xl shadow-md overflow-hidden mb-6 bg-white p-4">
      <div className="lg:px-28 px-6 text-center">
        {/* Success Icon */}
        <div className="flex justify-center mb-5">
          <div className="w-16 h-16 rounded-full bg-green-50 border-2 border-green-200 flex items-center justify-center">
            <svg
              className="w-8 h-8 text-green-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>
        {/* Title */}
        <h1 className="text-3xl font-extrabold text-gray-900 mb-3">
          Thank You for Your Request!
        </h1>
        <p className="text-gray-500 text-sm leading-relaxed mb-7 max-w-xl mx-auto">
          We've received your bathroom remodel estimate request and will review
          it shortly.
        </p>
        {/* Order ID Box */}
        <div className="bg-blue-50 border border-blue-100 rounded-xl px-6 py-5 mb-8 max-w-sm mx-auto">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
            Your Order ID
          </p>
          <p className="text-2xl font-extrabold text-blue-600 mb-1">
            BR02140610
          </p>
          <p className="text-xs text-blue-500">
            Save this ID to track your project status
          </p>
        </div>
        {/* What Happens Next */}
        <h2 className="text-lg font-bold text-gray-900 mb-6">
          What Happens Next?
        </h2>
        <div className="space-y-5 text-left max-w-md mx-auto mb-8">
          {/* Step 1 */}
          <div className="flex gap-4 items-start">
            <div className="w-8 h-8 rounded-full bg-blue-600 text-white text-sm font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
              1
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-0.5">
                Confirmation Sent
              </p>
              <p className="text-sm text-gray-500">
                You'll receive a confirmation text message at the phone number
                you provided.
              </p>
            </div>
          </div>
          {/* Step 2 */}
          <div className="flex gap-4 items-start">
            <div className="w-8 h-8 rounded-full bg-blue-600 text-white text-sm font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
              2
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-0.5">
                We Review Your Request
              </p>
              <p className="text-sm text-gray-500">
                Our team will carefully review your photos and selected options
                to prepare an accurate estimate.
              </p>
            </div>
          </div>
          {/* Step 3 */}
          <div className="flex gap-4 items-start">
            <div className="w-8 h-8 rounded-full bg-blue-600 text-white text-sm font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
              3
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-0.5">
                Receive Your Estimate
              </p>
              <p className="text-sm text-gray-500">
                Within 24 hours, you'll receive a detailed estimate via SMS with
                pricing and timeline information.
              </p>
            </div>
          </div>
          {/* Step 4 */}
          <div className="flex gap-4 items-start">
            <div className="w-8 h-8 rounded-full bg-blue-600 text-white text-sm font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
              4
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-0.5">
                Approve &amp; Schedule
              </p>
              <p className="text-sm text-gray-500">
                Once you approve the estimate, we'll schedule your bathroom
                remodel at a time that works for you.
              </p>
            </div>
          </div>
        </div>
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 mb-8 px-2 sm:px-0">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2.5 rounded-lg text-sm flex items-center justify-center gap-2 transition-colors w-full sm:w-auto min-h-[44px]">
            <svg
              className="w-4 h-4 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8l-9-5-9 5v8l9 5 9-5V8z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8l9 5 9-5"
              />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 13v8" />
            </svg>
            Track Your Order
          </button>
          <button className="border border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold px-5 py-2.5 rounded-lg text-sm flex items-center justify-center gap-2 transition-colors w-full sm:w-auto min-h-[44px]">
            Return Home
            <svg
              className="w-4 h-4 flex-shrink-0"
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
        {/* Questions */}
        <div className="flex flex-col items-center gap-2 sm:gap-1 px-4 sm:px-0 text-center sm:text-left">
          <div className="flex items-center justify-center gap-1.5 text-sm text-gray-500">
            <svg
              className="w-4 h-4 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
              />
            </svg>
            <span>Questions? We're here to help!</span>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-sm text-gray-500">
            <a
              href="tel:5551234567"
              className="text-sm text-blue-600 hover:underline font-medium whitespace-nowrap"
            >
              Call (555) 123-4567
            </a>
            <a
              href="mailto:info@bathproremodeling.com"
              className="text-sm text-blue-600 hover:underline font-medium break-all sm:break-normal"
            >
              info@bathproremodeling.com
            </a>
          </div>
        </div>
      </div>
    </div>
    {/* Bottom Blue Banner */}
    <div className="w-full max-w-6xl bg-blue-600 rounded px-10 py-7 text-center ">
      <p className="text-white font-bold text-base mb-1">
        Track Your Project Anytime
      </p>
      <p className="text-blue-200 text-sm mb-3">
        Use your Order ID to check the status of your estimate and project
        progress online.
      </p>
      <button className="text-white font-semibold text-sm flex items-center gap-1.5 mx-auto hover:opacity-80 transition-opacity">
        Go to Order Tracking
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  </div>
</div>

    )
}