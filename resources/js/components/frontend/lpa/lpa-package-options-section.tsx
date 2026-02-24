import { Plus } from 'lucide-react';
import { type ReactElement } from 'react';

const packages = [
    {
        title: 'Health & Welfare LPA',
        subtitle: 'Medical treatment, care and daily life decisions',
        lines: [
            'Appoint trusted attorneys for health and care choices',
            'Cover decisions about treatment, living arrangements and routines'
        ],
        price: '£49.99',
        accent: 'bg-gradient-to-br from-rose-100 via-rose-200 to-rose-300'
    },
    {
        title: 'Property & Finance LPA',
        subtitle: 'Money management, property and investments',
        lines: [
            'Give attorneys authority for banking, bills and assets',
            'Ensure property sales and investments can continue smoothly'
        ],
        price: '£79.99',
        accent: 'bg-gradient-to-br from-indigo-100 via-indigo-200 to-indigo-300'
    }
];

export function LpaPackageOptionsSection(): ReactElement {
    return (
        <section className="max-w-3xl mx-auto px-6 py-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900 font-inter">Our Story</h2>
            <div className="space-y-5 text-gray-600 leading-relaxed text-[15px]">
            <p>BathPro Remodeling was founded with a simple mission: make professional bathroom remodeling accessible,
                affordable, and stress-free for homeowners across Ohio. We saw too many families putting off necessary bathroom
                updates because the traditional remodeling process was too complicated, time-consuming, and unpredictable.</p>
            <p>That's why we developed our streamlined online estimate system. By combining modern technology with traditional
                craftsmanship, we've created a better way to remodel bathrooms. You can now request an estimate from the comfort
                of your home, track your project online, and enjoy transparent communication throughout the entire process.</p>
            <p>Over the past 15 years, we've completed more than 500 bathroom remodels, earning a reputation for quality work,
                fair pricing, and exceptional customer service. Our team of licensed professionals treats every bathroom as if
                it were their own, ensuring the highest standards of workmanship on every project.</p>
            </div>
        </section>
    );
}
