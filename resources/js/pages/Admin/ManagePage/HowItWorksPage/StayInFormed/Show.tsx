import React from 'react';
import { router } from '@inertiajs/react';

interface Item {
    id: number;
    title: string;
    subtitle: string;
    icon_url?: string | null;
}

interface Props {
    item: Item;
}

export default function Show({ item }: Props) {
    return (
        <div className="p-6 space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-semibold">Stay Informed Item</h1>
                <button
                    type="button"
                    onClick={() => router.visit(route('admin.pm.stay-informed.index'))}
                    className="text-sm text-blue-600 hover:underline"
                >
                    Back to list
                </button>
            </div>

            <div className="rounded border border-gray-200 bg-white p-6 space-y-4">
                <div>
                    <div className="text-xs uppercase text-gray-500">Title</div>
                    <div className="text-lg font-semibold text-gray-900">{item.title}</div>
                </div>

                <div>
                    <div className="text-xs uppercase text-gray-500">Subtitle</div>
                    <div className="text-gray-800">{item.subtitle}</div>
                </div>

                <div>
                    <div className="text-xs uppercase text-gray-500">Icon</div>
                    {item.icon_url ? (
                        <img src={item.icon_url} alt="" className="mt-2 h-16 w-16 object-contain" />
                    ) : (
                        <div className="mt-2 text-gray-400">No icon</div>
                    )}
                </div>
            </div>
        </div>
    );
}
