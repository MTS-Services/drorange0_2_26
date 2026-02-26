const willSteps = [
    {
        title: 'Answer a few simple questions.',
        description:
            'No doctor visits or tests—just eligibility questions so we can tailor guidance to you.',
    },
    {
        title: 'Choose a policy that works for you.',
        description:
            "Mix and match cover levels, add LPAs, or include mirror wills so the plan fits life's changes.",
    },
    {
        title: "Kick back and relax. You're covered.",
        description:
            'We keep your docs updated and share them securely with attorneys and loved ones.',
    },
];

export function LicenseSection({ licenses }: any) {
    return (
        <section className="bg-gray-50 px-6 py-16">
            <div className="mx-auto max-w-5xl">
                <h2 className="mb-2 text-center text-3xl font-bold text-gray-900">
                    Licenses &amp; Certifications
                </h2>
                <p className="mb-10 text-center text-gray-500">
                    Fully licensed, bonded, and insured for your protection
                </p>
                <div className="grid gap-5 rounded-2xl border border-gray-100 bg-white p-8 shadow-sm sm:grid-cols-2">
                    {licenses?.map((license: any, index: number) => (
                        <div className="flex items-start gap-3">
                            <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
                                <svg
                                    className="h-3 w-3 text-green-600"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2.5"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M4.5 12.75l6 6 9-13.5"
                                    />
                                </svg>
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-gray-900">
                                    {license.title}
                                </p>
                                <p className="text-xs text-gray-400">
                                    {license.subtitle}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
