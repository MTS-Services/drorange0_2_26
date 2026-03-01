import React from 'react';

import { ContactConsultationSection } from '@/components/frontend/contact/contact-consultation-section';
import { ContactHeroSection } from '@/components/frontend/contact/contact-hero-section';
import { ContactMapSection } from '@/components/frontend/contact/contact-map-section';
import FrontendLayout from '@/layouts/frontend-layout';


export default function Contact({ banner, faqs }: any) {
    return (
        <FrontendLayout>
            <main className="bg-white">
                <ContactHeroSection banner={banner}/>
                <ContactConsultationSection faqs={faqs} />
                <ContactMapSection />
            </main>
        </FrontendLayout>
    );
}
