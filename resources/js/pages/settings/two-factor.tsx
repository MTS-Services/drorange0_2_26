import { Head } from '@inertiajs/react';
import HeadingSmall from '@/components/heading-small';
import AppLayout from '@/layouts/app-layout';
import SettingsLayout from '@/layouts/settings/layout';
import { type BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Two-Factor Authentication',
        href: '/settings/two-factor',
    },
];

export default function TwoFactor() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Two-Factor Authentication" />

            <h1 className="sr-only">Two-Factor Authentication Settings</h1>

            <SettingsLayout>
                <div className="space-y-6">
                    <HeadingSmall
                        title="Two-Factor Authentication"
                        description="Manage your two-factor authentication settings"
                    />
                    <div className="rounded-lg border border-dashed p-4 text-sm text-muted-foreground bg-background/60">
                        Two-factor authentication has been disabled for this deployment.
                    </div>
                </div>
            </SettingsLayout>
        </AppLayout>
    );
}
