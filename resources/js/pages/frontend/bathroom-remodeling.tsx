import React from 'react';

import { HorizonHeroSection } from '@/components/frontend/horizon-wills/hero-section';
import { JobSection } from '@/components/frontend/horizon-wills/job-section';
import { MissionSection } from '@/components/frontend/horizon-wills/mission-section';
import { TeamSection } from '@/components/frontend/horizon-wills/team-section';
import FrontendLayout from '@/layouts/frontend-layout';

export default function BathroomRemodeling({banner, includes, options , whychooses }: any) {
    return (
        <FrontendLayout>
            <main className="flex flex-col">
                <HorizonHeroSection  banner={banner}/>
                <MissionSection />
                <JobSection  includes={includes}/>
                <TeamSection  options={options} whychooses={whychooses}/>
            </main>
        </FrontendLayout>
    );
}
