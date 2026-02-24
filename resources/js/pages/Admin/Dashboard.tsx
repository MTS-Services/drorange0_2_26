import { Head, Link, router } from '@inertiajs/react';

interface Admin {
    id: number;
    name: string;
    email: string;
}

interface DashboardProps {
    admin: Admin;
}

export default function Dashboard({ admin }: DashboardProps) {
    const handleLogout = () => {
        router.post('/admin/logout');
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <Head title="Admin Dashboard" />

            <nav className="border-b bg-white shadow-sm">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
                    <h1 className="text-lg font-semibold text-gray-900">Admin Panel</h1>
                    <div className="flex items-center gap-4">
                        <span className="text-sm text-gray-600">{admin.name}</span>
                        <button
                            onClick={handleLogout}
                            className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-700"
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </nav>

            <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="rounded-2xl border bg-white p-6 shadow-sm">
                    <h2 className="text-xl font-bold text-gray-900">Welcome back, {admin.name}</h2>
                    <p className="mt-1 text-sm text-gray-500">{admin.email}</p>
                </div>
            </main>
        </div>
    );
}
