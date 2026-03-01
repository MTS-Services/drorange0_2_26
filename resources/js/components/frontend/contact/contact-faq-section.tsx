

export function ContactFaqSection({ faqs }: any) {
    const [openFaq, setOpenFaq] = useState<number | null>(0);


    return (
        <section className="bg-white pb-16">
            <div className="container mx-auto px-6">
                <h2 className="text-center text-2xl font-semibold text-primary-600 animate-fadeInUp">Frequently Asked Questions</h2>

                <div className="mx-auto mt-8 max-w-6xl divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
                    {faqs.map((item:any, idx:any) => {
                        const isOpen = openFaq === idx;

                        return (
                            <div
                                key={item.id}
                                className="p-5 md:p-6 animate-fadeInUp"
                                style={{ animationDelay: `${idx * 80}ms` }}
                            >
                                <button
                                    type="button"
                                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                                    className="flex w-full items-start justify-between gap-4 text-left"
                                >
                                    <div className="flex items-start gap-3">
                                        <span className="mt-0.5 text-primary-600">
                                            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
                                                <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </span>
                                        <p className="font-semibold text-primary-900">{item.question}</p>
                                    </div>

                                    <span className="mt-1 text-primary-400">
                                        <svg
                                            viewBox="0 0 24 24"
                                            className={`h-5 w-5 transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                </button>

                                {isOpen ? (
                                    <p className="mt-3 pl-9 text-sm leading-relaxed text-primary-600">{item.answer}</p>
                                ) : null}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
