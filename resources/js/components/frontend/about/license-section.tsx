import { CircleCheckBig } from "lucide-react";

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
        <section className="bg-gray-50 px-8 py-20 max-w-7xl mx-auto">
            <div className="">
                <h2 className="mb-2 text-center text-2xl sm:text-[32px] font-bold font-inter  text-gray-900">
                    Licenses &amp; Certifications
                </h2>
                <p className="mb-10 text-center font-inter font-normal text-xl text-gray-500">
                    Fully licensed, bonded, and insured for your protection
                </p>
                <div className="grid gap-5 rounded-2xl border border-gray-100 bg-white p-8 shadow-sm sm:grid-cols-2">
                    {licenses?.map((license: any, index: number) => (
                        <div className="flex items-start gap-3">
                            <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
                                <CircleCheckBig className="w-6 h-6 text-green-600 bg-white" />
                            </div>
                            <div>
                                <h3 className="text-base font-normal font-inter text-gray-900 mb-1">
                                    {license.title}
                                </h3>
                                <p className="text-sm font-normal font-inter text-gray-500">
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
