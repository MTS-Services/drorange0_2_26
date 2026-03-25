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
                    <h2 className="mb-2 text-[32px] font-bold text-gray-900 font-inter">
                        Stay Informed Every Step
                    </h2>
                    <p className="text-xl font-normal text-gray-500 font-inter">
                        Our platform keeps you updated throughout your bathroom remodel
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-4">

                    {
                        stayInforms?.map((stayInform: StayInform, index: number) => (
                            <div className="inform-card px-4">
                                <div className="inform-icon py-2">
                                    <img src={stayInform.icon_url} />
                                </div>
                                <h4 className="mb-1 text-xl font-normal text-gray-900 font-inter">
                                    {stayInform.title}
                                </h4>
                                <p className="text-base font-normal text-gray-500 font-inter">
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
