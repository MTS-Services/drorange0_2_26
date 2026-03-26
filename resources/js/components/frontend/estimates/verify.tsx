import { useForm, usePage } from "@inertiajs/react";

export default function Verify() {
  const { props } = usePage();
  const flash = props.flash as any;

  const {data:resendOtpData, setData: setResendOtpData, post:resendOtpPost, processing:resendOtpProcessing} = useForm({
    phone: '015681618189',
  });
    const resendOtp = () => {
       resendOtpPost('/estimates/resend-otp', {
        preserveScroll: true,
        
       })
      
    };

    const {data:otpData, setData: setOtpData, post:otpPost, processing:otpProcessing} = useForm({
      otp: '',
      phone: '015681618189',
    });
    const sumbitOtp = () => {
      otpPost('/estimates/verify-otp')
    };
    
    return (
        <div className="flex min-h-screen items-start justify-center px-4 py-10">
            <div className="w-full max-w-6xl bg-gray-100 p-4 lg:p-6">
                {/* Header */}
                <div className="mb-8 text-center">
                    <h1 className="mb-2 font-inter text-4xl font-semibold text-gray-900">
                        Request Your Free Estimate
                    </h1>
                    <p className="text-base text-gray-500">
                        Complete the form below to receive your detailed
                        estimate within 24 hours
                    </p>
                </div>
                {/* Stepper */}
                <div className="mb-8 flex items-center justify-between px-2">
                    {/* Step 1 – Completed */}
                    <div className="flex flex-col items-center">
                        <div className="z-10 flex h-9 w-9 items-center justify-center rounded-full bg-green-500 text-white">
                            <svg
                                className="h-4 w-4"
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
                        <span className="mt-1.5 text-xs font-medium text-gray-600">
                            Photos
                        </span>
                    </div>
                    <div className="mx-1 mb-4 h-px flex-1 bg-green-400" />
                    {/* Step 2 – Completed */}
                    <div className="flex flex-col items-center">
                        <div className="z-10 flex h-9 w-9 items-center justify-center rounded-full bg-green-500 text-white">
                            <svg
                                className="h-4 w-4"
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
                        <span className="mt-1.5 text-xs font-medium text-gray-600">
                            Options
                        </span>
                    </div>
                    <div className="mx-1 mb-4 h-px flex-1 bg-green-400" />
                    {/* Step 3 – Completed */}
                    <div className="flex flex-col items-center">
                        <div className="z-10 flex h-9 w-9 items-center justify-center rounded-full bg-green-500 text-white">
                            <svg
                                className="h-4 w-4"
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
                        <span className="mt-1.5 text-xs font-medium text-gray-600">
                            Contact
                        </span>
                    </div>
                    <div className="mx-1 mb-4 h-px flex-1 bg-green-400" />
                    {/* Step 4 – Active */}
                    <div className="flex flex-col items-center">
                        <div className="z-10 flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                            4
                        </div>
                        <span className="mt-1.5 text-xs font-semibold text-gray-700">
                            Verify
                        </span>
                    </div>
                    <div className="mx-1 mb-4 h-px flex-1 bg-gray-300" />
                    {/* Step 5 */}
                    <div className="flex flex-col items-center">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-gray-300 bg-white text-sm font-semibold text-gray-400">
                            5
                        </div>
                        <span className="mt-1.5 text-xs text-gray-400">
                            Review
                        </span>
                    </div>
                </div>
                {/* Card */}
                <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
                    {/* Card Body */}
                    <div className="px-8 py-10 text-center">
                        {/* Success Message */}
                        {flash?.success && (
                            <div className="mb-6 rounded-lg border border-green-200 bg-green-50 px-4 py-3">
                                <p className="text-sm text-green-800">{flash.success}</p>
                            </div>
                        )}
                        <h2 className="mb-2 text-lg font-medium text-gray-900 lg:text-xl">
                            Verify Your Mobile Number
                        </h2>
                        <p className="mx-auto mb-7 max-w-2xl text-sm text-gray-500">
                            We've sent a verification code to 01716354519.
                            Please enter it below to confirm you're not a bot.
                        </p>
                        {/* Code Input */}
                        <div className="mx-auto mb-4 max-w-2xl">
                            <label className="mb-2 block text-sm font-semibold text-gray-800">
                                Verification Code
                            </label>
                            <input
                                type="text"
                                maxLength={6}
                                minLength={6}
                                onChange={(e) => setOtpData('otp', e.target.value)}
                                placeholder="Enter 4-digit code"
                                className="code-input w-full rounded-lg border border-gray-300 px-4 py-3.5 text-gray-700 transition-all"
                                onInput={(e) => {
                                    e.currentTarget.value =
                                        e.currentTarget.value.replace(
                                            /[^0-9]/g,
                                            '',
                                        );
                                }}
                            />
                        </div>
                        {/* Resend */}
                        <div className="mb-6">
                            <button onClick={resendOtp} className="text-sm text-blue-600 hover:underline">
                                Didn't receive the code? Resend
                            </button>
                        </div>
                        {/* Demo Mode Banner */}
                        <div className="mx-auto max-w-2xl rounded-xl border border-yellow-200 bg-yellow-50 px-8 py-3.5">
                            <p className="text-sm text-yellow-800">
                                <span className="font-semibold text-yellow-900">
                                    Demo Mode:
                                </span>{' '}
                                Check your browser console for the verification
                                code, or check sessionStorage.
                            </p>
                        </div>
                    </div>
                    {/* Card Footer */}
                    <div className="flex items-center justify-between border-t border-gray-100 bg-gray-50 px-8 py-5">
                        <button className="flex items-center gap-1.5 rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-100">
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
                                    d="M15 19l-7-7 7-7"
                                />
                            </svg>
                            Back
                        </button>
                        <button 
                       onClick={sumbitOtp}
                        className="flex items-center gap-1.5 rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700 active:bg-blue-800">
                            Continue
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
        </div>
    );
}
