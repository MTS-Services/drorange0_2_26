interface StayInform {
    icon: string;
    icon_url: string;
    title: string;
    subtitle: string;
}
export function StayInformedSection({ stayInforms }: { stayInforms: StayInform[] }) {
   
    return (
        <section className="bg-white py-8 lg:py-16">
            <div className="mx-auto max-w-7xl px-4">
                <div className="mb-10 text-center">
                    <h2 className="mb-2 text-2xl font-black font-bold text-gray-900 lg:text-3xl">
                        Stay Informed Every Step
                    </h2>
                    <p className="mx-auto max-w-xl text-sm text-gray-500">
                        Our platform keeps you updated throughout your bathroom
                        renovation.
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">

                    {
                        stayInforms?.map((stayInform: StayInform, index: number) => (
                              <div className="inform-card px-4">
                                <div className="inform-icon py-2">
                                    <img src={stayInform.icon_url}  />
                                </div>
                                <h4 className="mb-1 text-xl font-medium text-gray-900">
                                    {stayInform.title}
                                </h4>
                                <p className="text-xs leading-relaxed text-gray-500">
                                    {stayInform.subtitle}
                                </p>
                            </div>
                            ) 
                        )
                    }
                  

                </div>
            </div>
        </section>
    );
}
