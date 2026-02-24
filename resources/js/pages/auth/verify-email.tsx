import { Head } from '@inertiajs/react';

import AuthLayout from '@/layouts/auth-layout';

export default function VerifyEmail({ status }: { status?: string }) {
    return (
        <AuthLayout title="Email verification disabled" description="Verification emails are not required for admin-only access.">
            <Head title="Email verification" />

            <div className="mx-auto w-full max-w-md text-center rounded-2xl border border-border/50 bg-card/50 p-10 shadow-xl backdrop-blur-sm">
                <p className="text-sm text-muted-foreground">
                    Email verification is not required in this deployment. If you reached this page, please return to the admin login.
                </p>
            </div>
        </AuthLayout>
    );
}