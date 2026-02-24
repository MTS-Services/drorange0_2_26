import { Head } from '@inertiajs/react';

import AuthLayout from '@/layouts/auth-layout';

export default function Register() {
    return (
        <AuthLayout
            title="Admin access only"
            description="Public registration is disabled."
            context="register"
        >
            <Head title="Register" />

            <div className="w-full space-y-3 px-2 sm:px-0">
                <div className="rounded-3xl border border-primary-50/40 bg-primary-50/20 px-4 py-3 text-sm text-primary-600 sm:px-5 sm:py-4 animate-in fade-in slide-in-from-top-2 duration-300">
                    <p className="text-xs uppercase tracking-[0.35em] text-primary-600">Registration disabled</p>
                    <p className="mt-1 text-base font-medium text-primary-600">
                        This application now uses single admin authentication. Public sign-up is turned off.
                    </p>
                </div>
            </div>
        </AuthLayout>
    );
}
