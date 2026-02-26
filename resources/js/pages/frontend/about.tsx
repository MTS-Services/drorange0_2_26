import React from 'react';

import { WhyChooseSection } from '@/components/frontend/about/why-choose-section';
import { LpaFaqSection } from '@/components/frontend/about/lpa-faq-section';
import { LpaFeaturedLogosSection } from '@/components/frontend/about/lpa-featured-logos-section';
import { AboutHeroSection } from '@/components/frontend/about/about-hero-section';
import { LpaSupportSection } from '@/components/frontend/about/lpa-support-section';
import { WillWritingAboutSection } from '@/components/frontend/will-writing/will-writing-about-section';
import FrontendLayout from '@/layouts/frontend-layout';
import AboutInformation from '@/components/frontend/about/about-information';
import { LicenseSection } from '@/components/frontend/about/license-section';
import { ServiceAreaSection } from '@/components/frontend/about/service-area-section';

export default function About({banner, about, aboutLicense, aboutServiceArea, aboutWhyChoose}: any) {
    return (
        <FrontendLayout>
            <main >
                <AboutHeroSection banner={banner} />
                <AboutInformation about={about} />
                <LpaFeaturedLogosSection />

                <WhyChooseSection  whyChoose={aboutWhyChoose}/>

                <LicenseSection licenses={aboutLicense}/>

                <ServiceAreaSection serviceArea={aboutServiceArea}/>

                <LpaSupportSection />
            </main>
        </FrontendLayout>
    );
}
