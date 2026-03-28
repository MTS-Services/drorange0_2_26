import FileUpload from '@/components/file-upload';
import InputError from '@/components/input-error';
import TiptapEditor from '@/components/TipTapEditor';
import { ActionButton } from '@/components/ui/action-button';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AdminLayout from '@/layouts/admin-layout';
import { Head, useForm } from '@inertiajs/react';
import { PencilOff, Save } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { toast } from 'sonner';

interface Props {
    hero?: {
        id?: number | string;
        title?: string;
        subtitle?: string;
        button1_text?: string;
        button1_url?: string;
        button2_text?: string;
        button2_url?: string;
        background_image?: string;
        background_image_url?: string;
        aditional_information?: string;
        created_at?: string;
        updated_at?: string;
    };
}

export default function Index({ hero }: Props) {
    const record = hero ?? {};

    const { data, setData, post, processing, errors } = useForm({
        title: record.title ?? '',
        subtitle: record.subtitle ?? '',
        button1_text: record.button1_text ?? '',
        button1_url: record.button1_url ?? '',
        button2_text: record.button2_text ?? '',
        button2_url: record.button2_url ?? '',
        background_image: null as File | null,
        delete_existing_background: false,
        aditional_information: record.aditional_information ?? '',
        _method: 'PUT',
    });

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        post(route('admin.pm.remodeling-hero.update'), {
            forceFormData: true,
            onSuccess: () => {
                toast.success('Remodeling hero updated successfully');
            },

            onError: () => {
                toast.error('Failed to update remodeling hero');
            },
        });
    }

    const [background, setBackground] = useState<any[]>([]);
    useEffect(() => {
        if (record.background_image_url) {
            setBackground([
                {
                    id: record.id,
                    url: record.background_image_url,
                    name:
                        record.background_image?.split('/').pop() ||
                        'background',
                    mime_type: 'image/*',
                    path: record.background_image_url,
                },
            ]);
        } else {
            setBackground([]);
        }
    }, [record.background_image, record.background_image_url]);

    const handleRemoveBackgroundExisting = () => {
        if (
            confirm(
                'Are you sure you want to remove this file? You must upload a new file to save the changes.',
            )
        ) {
            setBackground([]);
            setData('delete_existing_background', true);
        }
    };

    return (
        <AdminLayout activeSlug="remodeling-hero">
            <>
                <Head title="Remodeling Hero" />

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                        <h1 className="text-2xl font-bold">Remodeling Hero</h1>
                        <div className="flex gap-2" />
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                                <div className="space-y-6 lg:col-span-2">
                                    <Card>
                                        <CardContent className="space-y-4">
                                            <div className="grid gap-2">
                                                <Label htmlFor="title">
                                                    Title
                                                </Label>
                                                <Input
                                                    id="title"
                                                    type="text"
                                                    value={data.title}
                                                    onChange={(e) =>
                                                        setData(
                                                            'title',
                                                            e.target.value,
                                                        )
                                                    }
                                                    required
                                                />
                                                <InputError
                                                    message={errors.title}
                                                />
                                            </div>

                                            <div className="grid gap-2">
                                                <Label htmlFor="subtitle">
                                                    Subtitle
                                                </Label>
                                                <Input
                                                    id="subtitle"
                                                    type="text"
                                                    value={data.subtitle}
                                                    onChange={(e) =>
                                                        setData(
                                                            'subtitle',
                                                            e.target.value,
                                                        )
                                                    }
                                                />
                                                <InputError
                                                    message={errors.subtitle}
                                                />
                                            </div>

                                            <div className="grid gap-2">
                                                <Label htmlFor="button1_text">
                                                    Primary Button Text
                                                </Label>
                                                <Input
                                                    id="button1_text"
                                                    type="text"
                                                    value={data.button1_text}
                                                    onChange={(e) =>
                                                        setData(
                                                            'button1_text',
                                                            e.target.value,
                                                        )
                                                    }
                                                />
                                                <InputError
                                                    message={
                                                        errors.button1_text
                                                    }
                                                />
                                            </div>

                                            <div className="grid gap-2">
                                                <Label htmlFor="button1_url">
                                                    Primary Button URL
                                                </Label>
                                                <Input
                                                    id="button1_url"
                                                    type="text"
                                                    value={data.button1_url}
                                                    onChange={(e) =>
                                                        setData(
                                                            'button1_url',
                                                            e.target.value,
                                                        )
                                                    }
                                                />
                                                <InputError
                                                    message={errors.button1_url}
                                                />
                                            </div>

                                            <div className="grid gap-2">
                                                <Label htmlFor="button2_text">
                                                    Secondary Button Text
                                                </Label>
                                                <Input
                                                    id="button2_text"
                                                    type="text"
                                                    value={data.button2_text}
                                                    onChange={(e) =>
                                                        setData(
                                                            'button2_text',
                                                            e.target.value,
                                                        )
                                                    }
                                                />
                                                <InputError
                                                    message={
                                                        errors.button2_text
                                                    }
                                                />
                                            </div>

                                            <div className="grid gap-2">
                                                <Label htmlFor="button2_url">
                                                    Secondary Button URL
                                                </Label>
                                                <Input
                                                    id="button2_url"
                                                    type="text"
                                                    value={data.button2_url}
                                                    onChange={(e) =>
                                                        setData(
                                                            'button2_url',
                                                            e.target.value,
                                                        )
                                                    }
                                                />
                                                <InputError
                                                    message={errors.button2_url}
                                                />
                                            </div>

                                            {/* <div className="grid gap-2">
                                                <Label htmlFor="aditional_information">Additional Information</Label>
                                                <Textarea
                                                    id="aditional_information"
                                                    value={data.aditional_information}
                                                    onChange={(e) => setData('aditional_information', e.target.value)}
                                                />
                                                <InputError message={errors.aditional_information} />
                                            </div> */}
                                            <div className="grid gap-2">
                                                <TiptapEditor
                                                    value={
                                                        data.aditional_information
                                                    }
                                                    onChange={(val: string) =>
                                                        setData(
                                                            'aditional_information',
                                                            val,
                                                        )
                                                    }
                                                    placeholder="Enter additional information..."
                                                    height="300px"
                                                />
                                                {errors.aditional_information && (
                                                    <p className="mt-1 text-sm text-red-500">
                                                        {
                                                            errors.aditional_information
                                                        }
                                                    </p>
                                                )}
                                            </div>
                                        </CardContent>
                                    </Card>

                                    <Card>
                                        <CardHeader>
                                            <CardTitle className="text-lg">
                                                Background Image
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent className="space-y-4">
                                            <div className="grid gap-2">
                                                <FileUpload
                                                    onChange={(file) =>
                                                        setData(
                                                            'background_image',
                                                            file as File,
                                                        )
                                                    }
                                                    existingFiles={background}
                                                    onRemoveExisting={
                                                        handleRemoveBackgroundExisting
                                                    }
                                                    multiple={false}
                                                    accept="image/*"
                                                />
                                                <InputError
                                                    message={
                                                        errors.background_image
                                                    }
                                                />
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>

                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle className="text-lg">
                                                Insights
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent className="space-y-4">
                                            <div>
                                                <Label className="text-sm text-muted-foreground">
                                                    Created At
                                                </Label>
                                                <p className="mt-1 text-sm font-medium">
                                                    {record.created_at
                                                        ? new Date(
                                                              record.created_at,
                                                          ).toLocaleDateString()
                                                        : 'N/A'}
                                                </p>
                                            </div>

                                            <div>
                                                <Label className="text-sm text-muted-foreground">
                                                    Updated At
                                                </Label>
                                                <p className="mt-1 text-sm font-medium">
                                                    {record.updated_at
                                                        ? new Date(
                                                              record.updated_at,
                                                          ).toLocaleDateString()
                                                        : 'N/A'}
                                                </p>
                                            </div>
                                        </CardContent>
                                    </Card>

                                    <Card>
                                        <CardContent className="pt-6">
                                            <div className="flex flex-row justify-between gap-3">
                                                <Button
                                                    type="submit"
                                                    disabled={processing}
                                                    className="flex h-auto w-full cursor-pointer items-center justify-center px-6 py-0!"
                                                >
                                                    <Save className="mr-2 h-4 w-4" />
                                                    {processing
                                                        ? 'Updating...'
                                                        : 'Update Remodeling Hero'}
                                                </Button>
                                                <ActionButton
                                                    IconNode={PencilOff}
                                                    href={''}
                                                    className="cursor-pointer"
                                                >
                                                    Cancel
                                                </ActionButton>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </>
        </AdminLayout>
    );
}
