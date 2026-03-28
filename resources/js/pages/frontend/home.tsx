import React from 'react';

import Banner from '@/components/frontend/home/banner';
import { EstateApproachSection } from '@/components/frontend/home/estate-approach-section';
import { FindingSupportSection } from '@/components/frontend/home/finding-support-section';
import { HowItWorksSection } from '@/components/frontend/home/how-it-works-section';
import { WhyCreateWillCardsGrid } from '@/components/frontend/home/why-create-will-cards-grid';
import { WhyCreateWillSection } from '@/components/frontend/home/why-create-will-section';
import FrontendLayout from '@/layouts/frontend-layout';
import { Head, usePage } from '@inertiajs/react';

export default function Home({banner, services}: any) {
   const {props} = usePage();
   const siteSetting = props.siteSetting;
    return (
        <FrontendLayout>
            <Head title={siteSetting?.site_title} />
            <Banner banner={banner} />
            <WhyCreateWillSection />
            <WhyCreateWillCardsGrid services={services} />
            <HowItWorksSection />
            <EstateApproachSection />
             <FindingSupportSection />
          
        </FrontendLayout>
    );
}
