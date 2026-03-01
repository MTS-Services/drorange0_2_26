export function ContactFaqSection({ faqs }: any) {
    return (
        <section>
               <div className="max-w-5xl mx-auto">
            

            <div className="lg:py-12 py-4">
            <h2 className="lg:text-4xl text-2xl font-display font-semibold text-center text-gray-900 mb-10">Common Questions</h2>
            <div className="space-y-4 max-w-3xl mx-auto">
                {
                    faqs.map((item:any, index:any)=>(
                        <div className="faq-item px-6 py-5 shadow-sm">
                        <h3 className="font-semibold text-gray-900 mb-1">{item.question}</h3>
                        <p className="text-sm text-gray-600">{item.answer}</p>
                        </div>
                    ))
                }
            </div>
            </div>

        </div>
        </section>
    );
}
