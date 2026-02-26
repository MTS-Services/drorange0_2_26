import React from 'react';

import { HeroSection } from '@/components/frontend/how-it-works/hero-section';
import { StayInformedSection } from '@/components/frontend/how-it-works/stay-informed-section';
import { PreferToTalkSection } from '@/components/frontend/how-it-works/prefer-to-talk-section';
import { HowItWorksList } from '@/components/frontend/how-it-works/how-it-works-list';
import { WhatIsProbateSection } from '@/components/frontend/how-it-works/what-is-probate-section';
import FrontendLayout from '@/layouts/frontend-layout';
import { howItWork } from '@/routes';

export default function HowItWorks({howItWorks,stayInforms,faqs}: any) {



    return (
        <FrontendLayout>
            <main>
                <HeroSection />
                <HowItWorksList  howItWorks={  howItWorks}/>
                <WhatIsProbateSection />
                <StayInformedSection  stayInforms={stayInforms}/>
                <PreferToTalkSection faqs={faqs}/>
            </main>
        </FrontendLayout>
    );
}
