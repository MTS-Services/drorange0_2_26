import InputError from '@/components/input-error';
import TiptapEditor from '@/components/TipTapEditor';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AdminLayout from '@/layouts/admin-layout';
import { Head, useForm } from '@inertiajs/react';
import { Save } from 'lucide-react';
import React from 'react';
import { toast } from 'sonner';

interface AboutInformation {
    id: number;
    title: string;
    content: string;
}

interface Props {
    info: AboutInformation | null;
}

export default function Edit({ info }: Props) {
    const { data, setData, post, processing, errors } = useForm({
        title: info?.title ?? '',
        content: info?.content ?? '',
        _method: 'PUT',
    });

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        post(route('admin.pm.about-information.update', info?.id ?? 1), {
            onSuccess: () =>
                toast.success('About information updated successfully'),
            onError: () =>
                toast.error(
                    'Failed to update information. Please check the form.',
                ),
        });
    };

    return (
        <AdminLayout activeSlug="about-information">
            <Head title="Edit About Information" />

            <div className="mb-6 flex justify-between">
                <h1 className="text-2xl font-bold">Edit About Information</h1>
            </div>

            <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>About Information</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                            <div className="space-y-6 lg:col-span-2">
                                <Card>
                                    <CardContent className="space-y-4 pt-6">
                                        <div className="grid gap-2">
                                            <Label htmlFor="title">Title</Label>
                                            <Input
                                                id="title"
                                                name="title"
                                                value={data.title}
                                                onChange={(event) =>
                                                    setData(
                                                        'title',
                                                        event.target.value,
                                                    )
                                                }
                                                required
                                            />
                                            <InputError
                                                message={errors.title}
                                            />
                                        </div>

                                        {/* <div className="grid gap-2">
                      <Label htmlFor="content">Content</Label>
                      <Textarea
                        id="content"
                        name="content"
                        value={data.content}
                        onChange={(event) => setData('content', event.target.value)}
                        rows={12}
                        required
                      />
                      <InputError message={errors.content} />
                    </div> */}
                                        <div className="grid gap-2">
                                            <TiptapEditor
                                                value={data.content}
                                                onChange={(val: string) =>
                                                    setData('content', val)
                                                }
                                                placeholder="Enter additional information..."
                                                height="300px"
                                            />
                                            {errors.content && (
                                                <p className="mt-1 text-sm text-red-500">
                                                    {errors.content}
                                                </p>
                                            )}
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>

                            <div className="space-y-6">
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-lg">
                                            Action
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4 pt-2">
                                        <div className="flex flex-col gap-3">
                                            <Button
                                                type="submit"
                                                disabled={processing}
                                                className="w-full gap-2"
                                            >
                                                <Save className="h-4 w-4" />
                                                {processing
                                                    ? 'Saving...'
                                                    : 'Save Information'}
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </AdminLayout>
    );
}
