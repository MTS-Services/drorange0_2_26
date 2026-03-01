import React from 'react';

import { ContactForm } from '@/components/frontend/contact/contact-consultation-section';
import { ContactHeroSection } from '@/components/frontend/contact/contact-hero-section';
import { ContactFaqSection } from '@/components/frontend/contact/contact-faq-section';
import FrontendLayout from '@/layouts/frontend-layout';


export default function Contact({ banner, faqs }: any) {
    return (
        <FrontendLayout>
            <main className="bg-white">
                <ContactHeroSection banner={banner}/>
                <ContactForm  />
                <ContactFaqSection faqs={faqs} />
            </main>
        </FrontendLayout>
    );
}
