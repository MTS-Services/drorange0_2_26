import AdminLayout from '@/layouts/admin-layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Head, Link, router } from '@inertiajs/react';
import React from 'react';

interface Item {
    id: number;
    title: string;
    subtitle: string;
    icon_url?: string | null;
}

interface Props {
    items: Item[];
}

export default function Index({ items }: Props) {
    return (
        <AdminLayout activeSlug="stay-informed">
            <Head title="Stay Informed" />

            <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-bold">Stay Informed</h1>
                <Button onClick={() => router.visit(route('admin.pm.stay-informed.create'))}>Add Item</Button>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>All Items</CardTitle>
                </CardHeader>
                <CardContent className="overflow-x-auto">
                    <table className="min-w-full text-sm">
                        <thead className="bg-muted/40 text-left text-muted-foreground">
                            <tr>
                                <th className="px-4 py-2">Title</th>
                                <th className="px-4 py-2">Subtitle</th>
                                <th className="px-4 py-2">Icon</th>
                                <th className="px-4 py-2 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items?.map((item) => (
                                <tr key={item.id} className="border-t">
                                    <td className="px-4 py-3 font-medium text-foreground">{item.title}</td>
                                    <td className="px-4 py-3 text-muted-foreground">{item.subtitle}</td>
                                    <td className="px-4 py-3">
                                        {item.icon_url ? (
                                            <img src={item.icon_url} alt="" className="h-10 w-10 object-contain rounded" />
                                        ) : (
                                            <span className="text-muted-foreground">—</span>
                                        )}
                                    </td>
                                    <td className="px-4 py-3 text-right space-x-3">
                                        <Link href={route('admin.pm.stay-informed.edit', item.id)} className="text-blue-600 hover:underline">
                                            Edit
                                        </Link>
                                        <button
                                            onClick={() => router.delete(route('admin.pm.stay-informed.destroy', item.id))}
                                            className="text-red-600 hover:underline"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            {(!items || items.length === 0) && (
                                <tr>
                                    <td className="px-4 py-6 text-center text-muted-foreground" colSpan={4}>
                                        No records found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </CardContent>
            </Card>
        </AdminLayout>
    );
}
