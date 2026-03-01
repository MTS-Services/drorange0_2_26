import AppLogo from '@/components/app-logo';
import { Link, usePage } from '@inertiajs/react';
import { ChevronDown, ChevronRight, Menu, User, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

// Navigation configuration
const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'Bathroom Remodeling', href: '/bathroom' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Track Order', href: '/track-orders' },
     
];

export function FrontendHeader() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { url } = usePage(); // Get current URL for active state
    
    const isActive = (href: string) => {
        return url === href;
    };

    return (
        <div className="bg-gray-50">

        {/* Navbar */}
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
            <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

            {/* Logo */}
            <Link href="/" className="text-lg font-bold text-blue-700 tracking-tight whitespace-nowrap">
                BathPro Remodeling
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-gray-800">
                {navigationItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={`transition-colors duration-150 text-sm font-medium ${
                            isActive(item.href)
                                ? 'text-blue-600'
                                : 'text-gray-900 hover:text-blue-600'
                        }`}
                    >
                        {item.name}
                    </Link>
                ))}
            </nav>

            {/* CTA Button — desktop only */}
            <Link
                href={route('free-estimate')}
                className="hidden md:inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold shadow-sm active:bg-blue-900 transition-colors duration-150 whitespace-nowrap"
            >
                Get Free Estimates
            </Link>

            {/* Mobile Hamburger */}
            <button
                type="button"
                aria-label="Toggle menu"
                aria-expanded={mobileMenuOpen}
                className="md:hidden p-1.5 rounded-md text-gray-700 hover:bg-gray-100 transition-colors duration-150"
                onClick={() => setMobileMenuOpen((open) => !open)}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${mobileMenuOpen ? 'hidden' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${mobileMenuOpen ? '' : 'hidden'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
            </button>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden border-t border-gray-100 bg-white px-6 pb-5 pt-3 flex flex-col gap-1 ${mobileMenuOpen ? '' : 'hidden'}`}>
                {navigationItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={`py-2 text-sm font-medium transition-colors duration-150 ${
                            isActive(item.href)
                                ? 'text-blue-600'
                                : 'text-gray-800 hover:text-blue-600'
                        }`}
                    >
                        {item.name}
                    </Link>
                ))}
                <Link
                    href={route('free-estimate')}
                    className="mt-3 inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold transition-colors duration-150"
                >
                    Get Free Estimates
                </Link>
            </div>
        </header>

        
        </div>
    );
}