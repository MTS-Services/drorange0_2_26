

export default function AboutInformation({about}: any)  {
    return (
        <section className="max-w-3xl mx-auto px-6 py-20">
            <h2 className="text-3xl md:text-4xl xl:text-5xl text-center mb-10 text-gray-900 font-sf-pro font-semibold">Our Story</h2>
            <div className="space-y-5 text-gray-600 leading-relaxed text-base font-normal font-inter">

            { about?.content &&(
                <div dangerouslySetInnerHTML={{ __html: about.content || '' }}></div>
             )
            }
            </div>
        </section>
    );
}
