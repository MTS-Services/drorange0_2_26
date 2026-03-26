import { CircleCheckBig } from 'lucide-react';


export default function Review({estimateData, options, currentSetup, service, totalFile}: any) {


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
                    {/* Step 3 – Completed */}

                    <div className="mx-1 mb-4 h-px flex-1 bg-green-400" />
                    {/* Step 4 – Active */}
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
                            Verify
                        </span>
                    </div>
                    <div className="mx-1 mb-4 h-px flex-1 bg-gray-300" />
                    {/* Step 5 */}
                    <div className="flex flex-col items-center">
                        <div className="z-10 flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                            5
                        </div>
                        <span className="mt-1.5 text-xs font-semibold text-gray-700">
                            Review
                        </span>
                    </div>
                </div>
                {/* Card */}
                <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
                    <div className="px-8 py-8">
                        <div className="w-full  mb-6">
                           <h2 className="text-2xl font-normal text-[#0A0A0A] font-inter">
                          Review Your Request
                           </h2>
                           <p className="font-inter text-xs text-[#4A5565] mt-3 mb-3">Please review your information before submitting. We'll send your estimate within 24 hours.</p>
                            
                        </div> 
                        <div className="w-full  mb-6">
                           <h2 className="text-sm font-bold text-black font-inter">
                           Project Type
                           </h2>
                           <p className="font-inter text-xs text-[#364153] mt-1 mb-1">
                            {service?.name}
                           </p>
                            
                        </div> 
                         <div className="w-full  mb-6">
                           <h2 className="text-sm font-bold text-black font-inter">
                           Photos
                           </h2>
                           <p className="font-inter text-xs text-[#364153] mt-1 mb-1">{totalFile} Photos Uploaded</p>
                            
                        </div> 
                        <div className="w-full  mb-6">
                           <h2 className="text-sm font-bold text-black font-inter">
                           Selected Options
                           </h2>
                           {
                            options?.map((option: any) => (
                                <p className="font-inter text-xs text-[#364153] mt-1 mb-1">{option?.name}</p>
                            ))
                           }
                            
                        </div> 

                        
                        <div className="w-full  mb-6">
                           <h2 className="text-sm font-bold text-black font-inter">
                           Bathroom Size
                           </h2>
                           {
                           
                                <p className="font-inter text-xs text-[#364153] mt-1 mb-1">{estimateData?.bathroom_size}</p>
                           }
                            
                        </div> 

                        
                        <div className="w-full  mb-6">
                           <h2 className="text-sm font-bold text-black font-inter">
                           Current Setup
                           </h2>
                           {
                           
                                <p className="font-inter text-xs text-[#364153] mt-1 mb-1">{currentSetup?.name}</p>
                           }
                            
                        </div> 
                        
                         <div className="w-full mx-6 mb-6">
                           <h2 className="text-sm font-bold text-black font-inter">
                            Contact information
                           </h2>
                           <p className="font-inter text-xs text-[#364153] mt-1 mb-1">{estimateData?.first_name + estimateData?.last_name}</p>
                           <p className="font-inter text-xs text-[#364153] mb-1">{estimateData?.phone}</p>
                           <p className="font-inter text-xs text-[#364153] mb-1">{estimateData?.email}</p>
                           <p className="font-inter text-xs text-[#364153] mb-1">{estimateData?.address}</p>
                           <p className="font-inter text-xs text-[#364153]">{estimateData?.city}</p>
                           <p className="font-inter text-xs text-[#364153]">{estimateData?.zip}</p>
                            
                        </div>

                        {/* What will next */}
                        <div className="w-full rounded-xl border border-blue-100 bg-blue-50 px-6 py-5">
                            <CircleCheckBig className="mb-2 h-4 w-4 font-inter text-blue-600" />
                            <p className="mb-1 text-sm font-bold text-blue-600">
                                What Happen Next?
                            </p>
                            <p className="ml-2 font-inter text-xs text-blue-500">
                                <p className="mb-1 mt-1">
                                    You'll receive a confirmation SMS
                                    immediately
                                </p>
                                <p className="mb-1">
                                    Our team will review your photos and
                                    selections
                                </p>
                                <p className="mb-1">
                                    You'll receive a detailed estimate via SMS
                                    within 24 hours
                                </p>
                                <p>
                                    You can track your project status anytime
                                    using your order ID
                                </p>
                            </p>
                        </div>
                    </div>

                    <div className="border-t border-gray-100 px-8 py-5 flex justify-between items-center bg-gray-50">
                        <button
                          
                            className="border border-gray-300 text-gray-700 hover:bg-gray-100 font-semibold px-5 py-2.5 rounded-lg text-sm flex items-center gap-1.5 transition-colors"
                        >
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
                        <a
                           href={route('frontend.free-estimate-step6')}
                            className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold px-6 py-2.5 rounded-lg text-sm flex items-center gap-1.5 transition-colors"
                        >
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
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
