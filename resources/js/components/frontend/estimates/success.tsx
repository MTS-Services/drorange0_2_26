import { Link } from "@inertiajs/react";

export default function Success({ estimate }: { estimate: any }) {
    return (
        <div className="flex flex-col items-center justify-start px-4 py-10">
            <div className="mx-auto max-w-7xl bg-gray-100 p-4">
                {/* Main Card */}
                <div className="mb-6 w-full overflow-hidden rounded-2xl bg-white p-4 sm:p-6 shadow-md">
                    <div className="px-0 sm:px-6 text-center lg:px-28">
                        {/* Success Icon */}
                        <div className="mb-5 flex justify-center">
                            <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-green-200 bg-green-50">
                                <svg
                                    className="h-8 w-8 text-green-500"
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
                        <h1 className="mb-3 text-3xl font-extrabold text-gray-900">
                            Thank You for Your Request!
                        </h1>
                        <p className="mx-auto mb-7 max-w-xl text-sm leading-relaxed text-gray-500">
                            We've received your bathroom remodel estimate
                            request and will review it shortly.
                        </p>
                        {/* Order ID Box */}
                        <div className="mx-auto mb-8 max-w-sm rounded-xl border border-blue-100 bg-blue-50 px-4 sm:px-6 py-4 sm:py-5">
                            <p className="mb-1 text-xs font-semibold tracking-wide text-gray-500 uppercase">
                                Your Order ID
                            </p>
                            <p className="mb-1 text-xl sm:text-2xl font-extrabold text-blue-600">
                               {estimate?.estimate_id}
                            </p>
                            <p className="text-xs text-blue-500">
                                Save this ID to track your project status
                            </p>
                        </div>
                        {/* What Happens Next */}
                        <h2 className="mb-6 text-lg font-bold text-gray-900">
                            What Happens Next?
                        </h2>
                        <div className="mx-auto mb-8 max-w-md space-y-5 text-left px-2 sm:px-0">
                            {/* Step 1 */}
                            <div className="flex items-start gap-4">
                                <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                                    1
                                </div>
                                <div>
                                    <p className="mb-0.5 text-sm font-semibold text-gray-900">
                                        Confirmation Sent
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        You'll receive a confirmation text
                                        message at the phone number you
                                        provided.
                                    </p>
                                </div>
                            </div>
                            {/* Step 2 */}
                            <div className="flex items-start gap-4">
                                <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                                    2
                                </div>
                                <div>
                                    <p className="mb-0.5 text-sm font-semibold text-gray-900">
                                        We Review Your Request
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        Our team will carefully review your
                                        photos and selected options to prepare
                                        an accurate estimate.
                                    </p>
                                </div>
                            </div>
                            {/* Step 3 */}
                            <div className="flex items-start gap-4">
                                <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                                    3
                                </div>
                                <div>
                                    <p className="mb-0.5 text-sm font-semibold text-gray-900">
                                        Receive Your Estimate
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        Within 24 hours, you'll receive a
                                        detailed estimate via SMS with pricing
                                        and timeline information.
                                    </p>
                                </div>
                            </div>
                            {/* Step 4 */}
                            <div className="flex items-start gap-4">
                                <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                                    4
                                </div>
                                <div>
                                    <p className="mb-0.5 text-sm font-semibold text-gray-900">
                                        Approve &amp; Schedule
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        Once you approve the estimate, we'll
                                        schedule your bathroom remodel at a time
                                        that works for you.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Action Buttons */}
                        <div className="mb-8 flex flex-col items-stretch justify-center gap-3 px-2 sm:flex-row sm:items-center sm:px-0">
                            <Link href={route('track-orders')} className="flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700 sm:w-auto">
                                <svg
                                    className="h-4 w-4 flex-shrink-0"
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
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 13v8"
                                    />
                                </svg>
                                Track Your Order
                            </Link>
                            <Link href={route('home')} className="flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50 sm:w-auto">
                                Return Home
                                <svg
                                    className="h-4 w-4 flex-shrink-0"
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
                            </Link>
                        </div>
                        {/* Questions */}
                        <div className="flex flex-col items-center gap-2 px-4 text-center sm:gap-1 sm:px-0 sm:text-left">
                            <div className="flex items-center justify-center gap-1.5 text-sm text-gray-500">
                                <svg
                                    className="h-4 w-4 flex-shrink-0"
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
                            <div className="flex flex-col items-center gap-2 text-sm text-gray-500 sm:flex-row sm:gap-4">
                                <a
                                    href="tel:5551234567"
                                    className="text-sm font-medium whitespace-nowrap text-blue-600 hover:underline"
                                >
                                    Call (555) 123-4567
                                </a>
                                <a
                                    href="mailto:info@bathproremodeling.com"
                                    className="text-sm font-medium break-all text-blue-600 hover:underline sm:break-normal"
                                >
                                    info@bathproremodeling.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Bottom Blue Banner */}
                <div className="w-full max-w-6xl rounded bg-blue-600 px-10 py-7 text-center">
                    <p className="mb-1 text-base font-bold text-white">
                        Track Your Project Anytime
                    </p>
                    <p className="mb-3 text-sm text-blue-200">
                        Use your Order ID to check the status of your estimate
                        and project progress online.
                    </p>
                    <button className="mx-auto flex items-center gap-1.5 text-sm font-semibold text-white transition-opacity hover:opacity-80">
                        Go to Order Tracking
                        <svg
                            className="h-4 w-4"
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
      
    );
}
