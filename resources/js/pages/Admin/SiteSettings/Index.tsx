import FileUpload from '@/components/file-upload'
import InputError from '@/components/input-error'
import { ActionButton } from '@/components/ui/action-button'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import AdminLayout from '@/layouts/admin-layout'
import { Head, useForm } from '@inertiajs/react'
import { Label } from '@/components/ui/label'
import { ArrowLeft, PencilOff, Save } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { toast } from 'sonner'


interface Props {
    SiteSetting?: {
        id?: number | string;
        site_name?: string;
        site_title?: string;
        site_logo?: string;
        site_favicon?: string;
        created_at?: string;
        updated_at?: string;
        site_logo_url?: string;
        site_favicon_url?: string;
    };
}

export default function Index({SiteSetting}: Props) {
    const setting = SiteSetting ?? {};

    const { data, setData, post, processing, errors } = useForm({
        site_name: setting.site_name ?? '',
        site_title: setting.site_title ?? '',
        site_logo: null as File | null,
        site_favicon: null as File | null,
        delete_existing_logo: false,
        delete_existing_favicon: false,
        _method: 'PUT',
    });

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        post(route('admin.site-settings.update', setting.id ?? 1), {
             forceFormData: true,
            onSuccess: () => {
                toast.success('Site settings updated successfully');
            },

            onError: () => {
                toast.error('Failed to update site settings');
            },
        });
    }

    const [favicon, setFavicon] = useState<any[]>([]);
    useEffect(() => {
        if (SiteSetting?.site_favicon_url) {
            setFavicon([
                {
                    id: SiteSetting.id,
                    url: SiteSetting.site_favicon_url,
                    name: SiteSetting.site_favicon?.split('/').pop() || 'favicon',
                    mime_type: 'image/*',
                    path: SiteSetting.site_favicon_url || '',
                },
            ]);
        } else {
            setFavicon([]);
        }
    }, [SiteSetting?.site_favicon, SiteSetting?.site_favicon_url]);

    const [logo, setLogo] = useState<any[]>([]);
    useEffect(() => {
        if (SiteSetting?.site_logo_url) {
            setLogo([
                {
                    id: SiteSetting.id,
                    url: SiteSetting.site_logo_url,
                    name: SiteSetting.site_logo?.split('/').pop() || 'logo',
                    mime_type: 'image/*',
                    path: SiteSetting.site_logo_url || '',
                },
            ]);
        } else {
            setLogo([]);
        }
    }, [SiteSetting?.site_logo, SiteSetting?.site_logo_url]);

    const handleRemoveFaviconExisting = () => {
        if (
            confirm(
                'Are you sure you want to remove this file? You must upload a new file to save the changes.',
            )
        ) {
            setFavicon([]);
            setData('delete_existing_favicon', true);
        }
    };
    const handleRemoveLogoExisting = () => {
        if (
            confirm(
                'Are you sure you want to remove this file? You must upload a new file to save the changes.',
            )
        ) {
            setLogo([]);
            setData('delete_existing_logo', true);
        }
    };
  return (
   <AdminLayout activeSlug="site-settings">
      <>
         <Head title={`Site Settings`} />

            <CardHeader className="flex flex-row items-center justify-between">
                <h1 className="text-2xl font-bold">Site Settings</h1>
                <div className="flex gap-2">
                    {/* <ActionButton
                        IconNode={ArrowLeft}
                        href={route('admin.site-settings.index')}
                    >
                        Back to Details
                    </ActionButton>
                    <ActionButton IconNode={ArrowLeft} href={index.url()}>
                        Back to List
                    </ActionButton> */}
                </div>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                        <div className="space-y-6 lg:col-span-2">
                            <Card>
                                <CardContent>
                                      <div className="grid gap-2">
                                <Label htmlFor="site_name">Site Name</Label>
                                <Input
                                    id="site_name"
                                    type="text"
                                    value={data.site_name}
                                    onChange={(e) =>
                                        setData('site_name', e.target.value)
                                    }
                                    required
                                />
                                <InputError message={errors.site_name} />
                            </div>

                            <div className="grid gap-2 mt-3">
                                <Label htmlFor="site_title">Site Title</Label>
                                <Input
                                    id="site_title"
                                    type="text"
                                    value={data.site_title}
                                    onChange={(e) =>
                                        setData('site_title', e.target.value)
                                    }
                                    required
                                />
                                <InputError message={errors.site_title} />
                            </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-lg">
                                        Application Logo
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="grid gap-2">
                                        <FileUpload
                                           
                                            onChange={(file) =>
                                                setData('site_logo', file as File)
                                            }
                                            existingFiles={logo}
                                            onRemoveExisting={
                                                handleRemoveLogoExisting
                                            }
                                            multiple={false}
                                            accept="image/*"
                                        />
                                        <InputError message={errors.site_logo} />
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-lg">
                                        Application Icon
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="grid gap-2">
                                        <FileUpload
                                            
                                            onChange={(file) =>
                                                setData('site_favicon', file as File)
                                            }
                                            existingFiles={favicon}
                                            onRemoveExisting={
                                                handleRemoveFaviconExisting
                                            }
                                            multiple={false}
                                            accept="image/*"
                                        />
                                        <InputError message={errors.site_favicon} />
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
                                            {setting.created_at
                                                ? new Date(
                                                      setting.created_at,
                                                  ).toLocaleDateString()
                                                : 'N/A'}
                                        </p>
                                    </div>

                                    <div>
                                        <Label className="text-sm text-muted-foreground">
                                            Updated At
                                        </Label>
                                        <p className="mt-1 text-sm font-medium">
                                            {setting.updated_at
                                                ? new Date(
                                                      setting.updated_at,
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
                                            className="flex h-auto w-full items-center justify-center px-6 py-0!"
                                        >
                                            <Save className="mr-2 h-4 w-4" />
                                            {processing
                                                ? 'Updating...'
                                                : 'Update Advantage'}
                                        </Button>
                                        <ActionButton
                                            IconNode={PencilOff}
                                            href={''}
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
      </>
   </AdminLayout>
  )
}
