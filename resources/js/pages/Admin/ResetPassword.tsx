import { Form, Head } from '@inertiajs/react';

import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { PasswordInput } from '@/components/ui/password-input';
import { Spinner } from '@/components/ui/spinner';

interface ResetPasswordProps {
    token: string;
    email: string;
}

export default function ResetPassword({ token, email }: ResetPasswordProps) {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
            <Head title="Reset Password" />

            <div className="w-full max-w-md space-y-6 rounded-2xl border bg-white p-8 shadow-lg">
                <div className="text-center">
                    <h1 className="text-2xl font-bold tracking-tight text-gray-900">Reset password</h1>
                    <p className="mt-1 text-sm text-gray-500">Enter your new password below</p>
                </div>

                <Form
                    action="/admin/reset-password"
                    method="post"
                    transform={(data) => ({ ...data, token, email })}
                    className="space-y-5"
                >
                    {({ processing, errors }) => (
                        <>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={email}
                                    readOnly
                                    className="cursor-not-allowed bg-gray-50 text-gray-500"
                                />
                                <InputError message={errors.email} />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="password">New Password</Label>
                                <PasswordInput
                                    id="password"
                                    name="password"
                                    required
                                    autoFocus
                                    autoComplete="new-password"
                                    placeholder="••••••••"
                                />
                                <InputError message={errors.password} />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="password_confirmation">Confirm Password</Label>
                                <PasswordInput
                                    id="password_confirmation"
                                    name="password_confirmation"
                                    required
                                    autoComplete="new-password"
                                    placeholder="••••••••"
                                />
                                <InputError message={errors.password_confirmation} />
                            </div>

                            <Button type="submit" className="w-full" disabled={processing}>
                                {processing ? <Spinner className="mr-2 h-4 w-4" /> : null}
                                Reset Password
                            </Button>
                        </>
                    )}
                </Form>
            </div>
        </div>
    );
}
