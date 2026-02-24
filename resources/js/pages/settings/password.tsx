import { Head } from '@inertiajs/react';

import HeadingSmall from '@/components/heading-small';
import AppLayout from '@/layouts/app-layout';
import SettingsLayout from '@/layouts/settings/layout';
import { type BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Password settings',
        href: '/settings/password',
    },
];

export default function Password() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Password settings" />

            <h1 className="sr-only">Password Settings</h1>

            <SettingsLayout>
                <div className="space-y-6">
                    <HeadingSmall
                        title="Password settings"
                        description="Password updates are currently disabled in this build."
                    />
                    <p className="text-sm text-muted-foreground">
                        This page is kept for layout completeness after removing user settings routes.
                    </p>
                </div>
            </SettingsLayout>
        </AppLayout>
    );
}
