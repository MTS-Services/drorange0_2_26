import AppLogo from '@/components/app-logo';
import { NavItem } from '@/components/ui/nav-item';
import { cn } from '@/lib/utils';
import { type NavItemType, type SharedData } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { LayoutGrid } from 'lucide-react';
import * as React from 'react';
// Navigation configuration
const adminNavItems: NavItemType[] = [
    {
        title: 'Dashboard',
        href: route('admin.dashboard'),
        icon: LayoutGrid,
        slug: 'dashboard',
    },
    {
        title: 'Page Management',
        icon: LayoutGrid,
        slug: 'page-management',
        children: [
            {
                title: 'Home Page',
                icon: LayoutGrid,
                slug: 'home-page',
                children:[
                    {
                        title: 'Hero Section',
                        href: route('admin.pm.hero-section'),
                        slug: 'hero-section',
                    },{
                        title: 'Services',
                        href: route('admin.pm.service-section.index'),
                        slug: 'service-section',
                    },
                ]
            },
            {
                title: 'Remodeling',
                icon: LayoutGrid,
                slug: 'remodeling',
                children:[
                    {
                        title: 'Hero',
                        href: route('admin.pm.remodeling-hero'),
                        slug: 'remodeling-hero',
                    },
                    {
                        title: 'What Include',
                        href: route('admin.pm.remodeling-what-include.index'),
                        slug: 'remodeling-what-include',
                    },
                    
                    {
                        title: 'Options',
                        href: route('admin.pm.remodeling-option.index'),
                        slug: 'remodeling-option',
                    },
                    
                    {
                        title: 'Why Choose',
                        href: route('admin.pm.remodeling-why-choose.index'),
                        slug: 'remodeling-why-choose',
                    },
                ]
            },{
                title: 'How It Works',
                icon: LayoutGrid,
                slug: 'how-it-work',
                children:[
                    {
                        title: 'Banner',
                        href: route('admin.pm.how-it-works-banner.edit', 1),
                        slug: 'how-it-works-banner',
                    },
                    {
                        title: 'How It Works',
                        href: route('admin.pm.how-it-works.index'),
                        slug: 'how-it-work',
                    },
                    {
                        title: 'Stay Inform',
                        href: route('admin.pm.stay-informed.index'),
                        slug: 'stay-informed',
                    },
                    {
                        title: 'FAQ',
                        href: route('admin.pm.how-it-work-faq.index'),
                        slug: 'how-it-work-faq',
                    }
                ]
            },
            {
                title: 'About Page',
                icon: LayoutGrid,
                slug: 'about-page',
                children:[
                    {
                        title: 'Banner',
                        href: route('admin.pm.about-banner.edit', 1),
                        slug: 'about-banner',
                    },
                    {
                        title: 'About Information',
                        href: route('admin.pm.about-information.edit', 1),
                        slug: 'about-information',
                    },
                    {
                        title: 'Why Choose',
                        href: route('admin.pm.about-why-choose.index'),
                        slug: 'about-why-choose',
                    },
                    {
                        title: 'Licenses & Certifications',
                        href: route('admin.pm.about-license.index'),
                        slug: 'about-license',
                    },
                    {
                        title: 'Service Areas',
                        href: route('admin.pm.about-service-area.index'),
                        slug: 'about-service-area',
                    },
                ]
            },
            {
                title: 'Contact Page',
                icon: LayoutGrid,
                slug: 'contact-page',
                children:[
                    {
                        title: 'FAQ',
                        href: route('admin.pm.contact-faq.index'),
                        slug: 'contact-faq',
                    },
                    {
                        title: 'Banner',
                        href: route('admin.pm.contact-banner.edit', 1),
                        slug: 'contact-banner',
                    },
                ]
            },
        ],
    },
    {
        title: 'Services',
        icon: LayoutGrid,
        slug: 'services',
        children:[
            {
                title: 'Service Type',
                icon: LayoutGrid,
                slug: 'service-type',
                href: route('admin.sm.service-type.index'),
            },
            {
                title: 'Options',
                icon: LayoutGrid,
                slug: 'option',
                href: route('admin.sm.option.index'),
            },
            {
                title: 'Dimensions',
                icon: LayoutGrid,
                slug: 'diemension',
                href: route('admin.sm.diemension.index'),
            },
        ]
    },
    {
        title: 'Contact',
        href: route('admin.pm.contact.index'),
        icon: LayoutGrid,
        slug: 'contact',
    },
    {
        title: 'Site Settings',
        href: route('admin.site-settings.index'),
        icon: LayoutGrid,
        slug: 'site-settings',
    }
];

interface AdminSidebarProps {
    isCollapsed: boolean;
    activeSlug?: string | null;
}

export const AdminSidebar = React.memo<AdminSidebarProps>(
    ({ isCollapsed, activeSlug }) => {
        const { url, props } = usePage();
        const currentRoute = url;

        // Extract permissions from auth props
        const userPermissions = React.useMemo(() => {
            const auth = props.auth as SharedData['auth'];
            return (
                auth?.user?.permissions ||
                auth?.user?.all_permissions ||
                auth?.permissions ||
                []
            );
        }, [props.auth]);

        return (
            <aside
                className={cn(
                    'relative hidden h-screen border-r bg-background',
                    'transition-all duration-300 ease-in-out',
                    'flex-col md:flex',
                    isCollapsed ? 'w-16' : 'w-64',
                )}
            >
                {/* Logo Section */}
                <div
                    className={cn(
                        'flex h-16 items-center border-b',
                        isCollapsed ? 'justify-center px-2' : 'px-6',
                    )}
                >
                    <Link
                        href="/"
                        className="flex items-center gap-2 transition-opacity hover:opacity-80"
                    >
                        {isCollapsed ? (
                            <LayoutGrid className="h-6 w-6 text-primary" />
                        ) : (
                            <AppLogo className="text-base! w-auto h-16" />
                        )}
                    </Link>
                </div>

                {/* Navigation */}
                <div className="custom-scrollbar flex-1 overflow-y-auto px-3 py-4">
                    <nav className="space-y-1">
                        {adminNavItems.map((item, index) => (
                            <NavItem
                                key={`${item.title}-${index}`}
                                item={item}
                                isCollapsed={isCollapsed}
                                currentRoute={currentRoute}
                                isActive={activeSlug === item.slug}
                                permissions={userPermissions}
                            />
                        ))}
                    </nav>
                </div>

                {/* Footer Section (Optional) */}
                {!isCollapsed && (
                    <div className="border-t p-4">
                        <div className="text-center text-xs text-muted-foreground">
                            v1.0.0
                        </div>
                    </div>
                )}
            </aside>
        );
    },
);

AdminSidebar.displayName = 'AdminSidebar';