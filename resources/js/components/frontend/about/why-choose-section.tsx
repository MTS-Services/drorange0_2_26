export function WhyChooseSection({ whyChoose }: any) {
    return (
        <section className="mx-auto max-w-7xl px-6 py-20">
            <h2 className="mb-3 text-center text-3xl md:text-4xl xl:text-5xl font-sf-pro font-bold text-gray-900">
                Why Choose Us
            </h2>
            <p className="mb-12 text-center font-inter font-normal text-xl text-gray-500">
                We're committed to delivering exceptional results on every
                project
            </p>
            <div className="grid gap-6 md:grid-cols-3">
                
                {
                    whyChoose?.map((item:any,   index:number)=>(
                            <div className="feature-card cursor-default rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm">
                    <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100">
                        <img src={item.icon_url} alt="" className="p-2"/>
                    </div>
                    <h3 className="mb-3 text-xl font-normal font-inter text-gray-900">
                            {item.title}
                    </h3>
                    <p className="text-base font-normal font-inter leading-relaxed text-gray-500">
                        {item.subtitle}
                    </p>
                </div>

                        )
                    )
                }
               
            </div>
        </section>
    );
}
