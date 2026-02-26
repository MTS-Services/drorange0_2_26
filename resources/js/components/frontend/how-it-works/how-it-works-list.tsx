export function HowItWorksList({ howItWorks }: any) {

    return (
        <section className="bg-gray-50 px-4 py-12">
            <div className="mx-auto max-w-6xl">
                {/* Steps */}
                <div className="space-y-3" id="steps-container">
                    {/* Step 1 */}

                    {howItWorks?.map((howItWork: any, index: number) => (
                        <div
                            key={index}
                            className="step-card flex cursor-pointer gap-4 rounded border border-gray-200 bg-white px-5 py-5 transition-all duration-200 hover:border-blue-200 hover:shadow-md"
                            onClick={() => {}}
                        >
                            <div className="flex flex-shrink-0 flex-col items-center">
                                <div className="z-10 flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
                                    {index + 1}
                                </div>
                            </div>
                            <div className="flex flex-1 items-start justify-between gap-4">
                                <div className="flex-1">
                                    <h3 className="mb-0.5 text-sm font-semibold text-gray-900">
                                        {howItWork.title}
                                    </h3>
                                    <p className="mb-3 flex items-center gap-1 text-xs text-gray-400">
                                        <svg
                                            className="h-3 w-3"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <circle cx="12" cy="12" r="10" />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 6v6l4 2"
                                            />
                                        </svg>
                                        {howItWork.time}
                                    </p>
                                    <p className="desc text-sm leading-relaxed text-gray-500">
                                        {howItWork.subtitle}
                                    </p>
                                </div>
                                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-blue-50">
                                 
                                  <img src={howItWork.icon_url} alt="" />
                                  
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
