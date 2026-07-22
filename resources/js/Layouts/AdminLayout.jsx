import { Link } from '@inertiajs/react';

export default function AdminLayout({ children }) {
    return (
        <div className="min-h-screen flex bg-slate-100">

            {/* Sidebar */}
            <aside className="w-72 bg-slate-900 text-white flex flex-col">

                <div className="p-6 border-b border-slate-700">
                    <h1 className="text-2xl font-bold text-cyan-400">
                        ThaMad Splash
                    </h1>

                    <p className="text-sm text-slate-400">
                        Administration
                    </p>
                </div>

                <nav className="flex-1 p-4 space-y-2">

                    <Link href="/admin" className="block rounded-lg px-4 py-3 hover:bg-slate-800">
                        📊 Dashboard
                    </Link>

                    <Link href="/admin/parties" className="block rounded-lg px-4 py-3 hover:bg-slate-800">
                        🎉 Soirées
                    </Link>

                    <Link href="/admin/attractions" className="block rounded-lg px-4 py-3 hover:bg-slate-800">
                        🎢 Attractions
                    </Link>

                    <Link href="/admin/locations" className="block rounded-lg px-4 py-3 hover:bg-slate-800">
                        🏠 Locations
                    </Link>

                    <Link href="/admin/activities" className="block rounded-lg px-4 py-3 hover:bg-slate-800">
                        🎯 Activités
                    </Link>

                    <Link href="/admin/school" className="block rounded-lg px-4 py-3 hover:bg-slate-800">
                        🎓 École
                    </Link>

                    <Link href="/admin/prices" className="block rounded-lg px-4 py-3 hover:bg-slate-800">
                        💰 Tarifs
                    </Link>

                </nav>

                <div className="p-4 border-t border-slate-700">

                    <Link
                        href="/logout"
                        method="post"
                        as="button"
                        className="w-full rounded-lg bg-red-600 py-3 hover:bg-red-700 transition"
                    >
                        Déconnexion
                    </Link>

                </div>

            </aside>

            {/* Contenu */}

            <main className="flex-1">

                <header className="bg-white shadow px-8 py-6">

                    <h2 className="text-3xl font-bold text-slate-800">
                        Administration
                    </h2>

                </header>

                <div className="p-8">
                    {children}
                </div>

            </main>

        </div>
    );
}