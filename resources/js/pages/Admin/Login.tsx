import { Form, Head, Link } from '@inertiajs/react';

import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { PasswordInput } from '@/components/ui/password-input';
import { Spinner } from '@/components/ui/spinner';

interface LoginProps {
    canResetPassword: boolean;
    status?: string;
}

export default function Login({ canResetPassword, status }: LoginProps) {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
            <Head title="Admin Login" />

            <div className="w-full max-w-md space-y-6 rounded-2xl border bg-white p-8 shadow-lg">
                <div className="text-center">
                    <h1 className="text-2xl font-bold tracking-tight text-gray-900">Admin Login</h1>
                    <p className="mt-1 text-sm text-gray-500">Sign in to access the admin panel</p>
                </div>

                {status && (
                    <div className="rounded-lg bg-emerald-50 p-3 text-center text-sm font-medium text-emerald-600">
                        {status}
                    </div>
                )}

                <Form
                    action="/admin/login"
                    method="post"
                    className="space-y-5"
                >
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
                                    autoComplete="email"
                                    placeholder="admin@example.com"
                                />
                                <InputError message={errors.email} />
                            </div>

                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <Label htmlFor="password">Password</Label>
                                    {canResetPassword && (
                                        <Link
                                            href="/admin/forgot-password"
                                            className="text-xs font-medium text-blue-600 hover:text-blue-500"
                                        >
                                            Forgot password?
                                        </Link>
                                    )}
                                </div>
                                <PasswordInput
                                    id="password"
                                    name="password"
                                    required
                                    autoComplete="current-password"
                                    placeholder="••••••••"
                                />
                                <InputError message={errors.password} />
                            </div>

                            <Button
                                type="submit"
                                className="w-full"
                                disabled={processing}
                            >
                                {processing ? <Spinner className="mr-2 h-4 w-4" /> : null}
                                Log in
                            </Button>
                        </>
                    )}
                </Form>
            </div>
        </div>
    );
}
