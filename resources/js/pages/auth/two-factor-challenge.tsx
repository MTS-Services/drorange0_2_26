import { Head } from '@inertiajs/react';
import AuthLayout from '@/layouts/auth-layout';

export default function TwoFactorChallenge() {
    return (
        <AuthLayout title="Two-Factor Authentication" description="Two-factor is disabled in this build.">
            <Head title="Two-Factor Authentication" />

            <div className="mx-auto w-full max-w-sm rounded-2xl border border-border/50 bg-card/50 p-8 shadow-xl backdrop-blur-sm text-sm text-muted-foreground">
                Two-factor authentication has been disabled for this deployment.
            </div>
        </AuthLayout>
    );
}