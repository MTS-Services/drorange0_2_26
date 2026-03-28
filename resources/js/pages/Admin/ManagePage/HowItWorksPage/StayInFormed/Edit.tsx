import AdminLayout from '@/layouts/admin-layout'
import FileUpload from '@/components/file-upload'
import InputError from '@/components/input-error'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Head, useForm } from '@inertiajs/react'
import { ActionButton } from '@/components/ui/action-button'
import { PencilOff, Save } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { toast } from 'sonner'

interface Item {
    id: number;
    title: string;
    subtitle: string;
    icon?: string | null;
    icon_url?: string | null;
    created_at?: string;
    updated_at?: string;
}

interface Props {
    item: Item
}

export default function Edit({ item }: Props) {
    const record = item ?? {}

    const { data, setData, post, processing, errors } = useForm({
        _method: 'PUT',
        title: record.title ?? '',
        subtitle: record.subtitle ?? '',
        icon: null as File | null,
        delete_existing_icon: false,
    })

    const [existingIcons, setExistingIcons] = useState<any[]>([])

    useEffect(() => {
        if (record.icon_url) {
            setExistingIcons([
                {
                    id: record.id,
                    url: record.icon_url,
                    name: record.icon?.split('/').pop() || 'icon',
                    mime_type: 'image/*',
                    path: record.icon_url,
                },
            ])
        } else {
            setExistingIcons([])
        }
    }, [record.icon, record.icon_url, record.id])

    const handleRemoveExistingIcon = () => {
        if (
            confirm(
                'Are you sure you want to remove this file? You must upload a new file to save the changes.',
            )
        ) {
            setExistingIcons([])
            setData('delete_existing_icon', true)
            setData('icon', null)
        }
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        post(route('admin.pm.stay-informed.update', record.id), {
            forceFormData: true,
            onSuccess: () => toast.success('Item updated successfully'),
            onError: () => toast.error('Failed to update item'),
        })
    }

    return (
        <AdminLayout activeSlug="stay-informed">
            <>
                <Head title="Stay Informed" />

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                        <h1 className="text-2xl font-bold">Stay Informed</h1>
                        <div className="flex gap-2" />
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid gap-4 lg:grid-cols-3">
                                <div className="lg:col-span-2 space-y-4">
                                    <Card>
                                        <CardContent className="space-y-4">
                                            <div className="grid gap-2">
                                                <Label htmlFor="title">Title</Label>
                                                <Input
                                                    id="title"
                                                    type="text"
                                                    value={data.title}
                                                    onChange={(event) => setData('title', event.target.value)}
                                                    required
                                                />
                                                <InputError message={errors.title} />
                                            </div>

                                            <div className="grid gap-2">
                                                <Label htmlFor="subtitle">Subtitle</Label>
                                                <Input
                                                    id="subtitle"
                                                    type="text"
                                                    value={data.subtitle}
                                                    onChange={(event) => setData('subtitle', event.target.value)}
                                                    required
                                                />
                                                <InputError message={errors.subtitle} />
                                            </div>

                                            <div className="grid gap-2">
                                                <Label htmlFor="icon">Icon</Label>
                                                <FileUpload
                                                    accept="image/*"
                                                    multiple={false}
                                                    existingFiles={existingIcons}
                                                    onChange={(file) => {
                                                        setData('icon', file as File)
                                                        setData('delete_existing_icon', false)
                                                    }}
                                                    onRemoveExisting={handleRemoveExistingIcon}
                                                />
                                                <InputError message={errors.icon} />
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>

                                <div className="space-y-4">
                                    <Card>
                                        <CardContent className="pt-6">
                                            <div className="flex flex-row justify-between gap-3">
                                                <Button
                                                    type="submit"
                                                    disabled={processing}
                                                    className="flex h-auto w-full items-center justify-center bg-secondary px-6 py-0! hover:bg-secondary/80"
                                                >
                                                    <Save className="mr-2 h-4 w-4" />
                                                    {processing ? 'Updating...' : 'Update Item'}
                                                </Button>
                                                <ActionButton
                                                    IconNode={PencilOff}
                                                    href={route('admin.pm.stay-informed.index')}
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
    )
}
