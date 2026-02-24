import { Form, Head, Link } from '@inertiajs/react';
import { ChevronLeft } from 'lucide-react';

import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';

interface ForgotPasswordProps {
    status?: string;
}

export default function ForgotPassword({ status }: ForgotPasswordProps) {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
            <Head title="Forgot Password" />

            <div className="w-full max-w-md space-y-6 rounded-2xl border bg-white p-8 shadow-lg">
                <div className="text-center">
                    <h1 className="text-2xl font-bold tracking-tight text-gray-900">Forgot password</h1>
                    <p className="mt-1 text-sm text-gray-500">
                        Enter your email and we'll send you a reset link.
                    </p>
                </div>

                {status && (
                    <div className="rounded-lg bg-emerald-50 p-3 text-center text-sm font-medium text-emerald-600">
                        {status}
                    </div>
                )}

                <Form action="/admin/forgot-password" method="post" className="space-y-5">
                    {({ processing, errors }) => (
                        <>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email address</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    name="email"
                                    required
                                    autoFocus
                                    placeholder="admin@example.com"
                                />
                                <InputError message={errors.email} />
                            </div>

                            <Button type="submit" className="w-full" disabled={processing}>
                                {processing ? <Spinner className="mr-2 h-4 w-4" /> : null}
                                Send Reset Link
                            </Button>

                            <Link
                                href="/admin/login"
                                className="flex items-center justify-center gap-1 text-sm text-gray-500 transition-colors hover:text-gray-900"
                            >
                                <ChevronLeft className="h-4 w-4" />
                                Back to login
                            </Link>
                        </>
                    )}
                </Form>
            </div>
        </div>
    );
}
