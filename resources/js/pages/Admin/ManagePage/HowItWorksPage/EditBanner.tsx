import InputError from '@/components/input-error'
import { ActionButton } from '@/components/ui/action-button'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import AdminLayout from '@/layouts/admin-layout'
import { Head, useForm } from '@inertiajs/react'
import { PencilOff, Save } from 'lucide-react'
import React from 'react'
import { toast } from 'sonner'

interface Props {
    banner?: {
        id?: number | string
        title?: string
        subtitle?: string
        additional_info?: string
        created_at?: string
        updated_at?: string
    }
}

export default function EditBanner({ banner }: Props) {
    const record = banner ?? {}

    const { data, setData, post, processing, errors } = useForm({
        title: record.title ?? '',
        subtitle: record.subtitle ?? '',
        additionalInfo: record.additional_info ?? '',
        _method: 'PUT',
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        post(route('admin.pm.how-it-works-banner.update', 1), {
            onSuccess: () => toast.success('Banner updated successfully'),
            onError: () => toast.error('Failed to update banner'),
        })
    }

    return (
        <AdminLayout>
            <>
                <Head title="How It Works Banner" />

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                        <h1 className="text-2xl font-bold">How It Works Banner</h1>
                        <div className="flex gap-2" />
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                                <div className="space-y-6 lg:col-span-2">
                                    <Card>
                                        <CardContent className="space-y-4">
                                            <div className="grid gap-2">
                                                <Label htmlFor="title">Title</Label>
                                                <Input
                                                    id="title"
                                                    type="text"
                                                    value={data.title}
                                                    onChange={(e) => setData('title', e.target.value)}
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
                                                    onChange={(e) => setData('subtitle', e.target.value)}
                                                />
                                                <InputError message={errors.subtitle} />
                                            </div>

                                            <div className="grid gap-2">
                                                <Label htmlFor="additionalInfo">Additional Info</Label>
                                                <Textarea
                                                    id="additionalInfo"
                                                    value={data.additionalInfo}
                                                    onChange={(e) => setData('additionalInfo', e.target.value)}
                                                />
                                                <InputError message={errors.additionalInfo} />
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>

                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle className="text-lg">Insights</CardTitle>
                                        </CardHeader>
                                        <CardContent className="space-y-4">
                                            <div>
                                                <Label className="text-sm text-muted-foreground">Created At</Label>
                                                <p className="mt-1 text-sm font-medium">
                                                    {record.created_at
                                                        ? new Date(record.created_at).toLocaleDateString()
                                                        : 'N/A'}
                                                </p>
                                            </div>

                                            <div>
                                                <Label className="text-sm text-muted-foreground">Updated At</Label>
                                                <p className="mt-1 text-sm font-medium">
                                                    {record.updated_at
                                                        ? new Date(record.updated_at).toLocaleDateString()
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
                                                    className="flex h-auto w-full items-center justify-center bg-secondary px-6 py-0! hover:bg-secondary/80"
                                                >
                                                    <Save className="mr-2 h-4 w-4" />
                                                    {processing ? 'Updating...' : 'Update Banner'}
                                                </Button>
                                                <ActionButton IconNode={PencilOff} href={''}>
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
