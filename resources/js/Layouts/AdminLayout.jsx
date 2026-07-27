import { route } from "../lib/route";
import { Link, usePage } from "@inertiajs/react";

export default function AdminLayout({ children }) {

    const { url } = usePage();

    return (
        <div className="min-h-screen bg-slate-50 flex">

            {/* Sidebar */}
            <aside className="w-72 bg-slate-900 text-white flex flex-col shadow-xl">

                <div className="px-8 py-8 border-b border-slate-800">

                    <h1 className="text-2xl font-extrabold tracking-tight text-cyan-400">
                        ThaMad Splash
                    </h1>

                    <p className="mt-1 text-sm text-slate-400">
                        Administration
                    </p>

                </div>

                <nav className="flex-1 px-4 py-6 space-y-2">

                    <Link
                        href="/admin"
                        className={`block rounded-lg px-4 py-3 ${
                        url === "/admin"
                        ? "bg-cyan-600 text-white"
                        : "hover:bg-slate-800"
                        }`}
                    >
                        📊 Dashboard
                    </Link>

                    <Link
                        href={route("admin.parties.index")}
                        className={`block rounded-lg px-4 py-3 ${
                        url.startsWith("/admin/parties")
                        ? "bg-cyan-600 text-white"
                        : "hover:bg-slate-800"
                        }`}
                    >
                        🎉 Soirées
                    </Link>

                    <Link
                       href={route("admin.attractions.index")}
                        className="flex items-center rounded-xl px-4 py-3 text-slate-300 transition hover:bg-slate-800 hover:text-white"
                    >
                        🎢 Attractions
                    </Link>

                    <Link
                        href="/admin/rentals"
                        className="flex items-center rounded-xl px-4 py-3 text-slate-300 transition hover:bg-slate-800 hover:text-white"
                    >
                        🏠 Locations
                    </Link>

                    <Link
                        href="/admin/activities"
                        className="flex items-center rounded-xl px-4 py-3 text-slate-300 transition hover:bg-slate-800 hover:text-white"
                    >
                        🎯 Activités
                    </Link>

                    <Link
                        href="/admin/schools"
                        className="flex items-center rounded-xl px-4 py-3 text-slate-300 transition hover:bg-slate-800 hover:text-white"
                    >
                        🎓 École
                    </Link>

                    <Link
                        href="/admin/prices"
                        className="flex items-center rounded-xl px-4 py-3 text-slate-300 transition hover:bg-slate-800 hover:text-white"
                    >
                        💰 Tarifs
                    </Link>

                </nav>

                <div className="border-t border-slate-800 p-4">

                    <Link
                        href="/logout"
                        method="post"
                        as="button"
                        className="w-full rounded-xl bg-red-600 py-3 font-medium transition hover:bg-red-700"
                    >
                        Déconnexion
                    </Link>

                </div>

            </aside>

            {/* Contenu */}

            <div className="flex flex-1 flex-col">

                <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/80 backdrop-blur">

                    <div className="flex h-20 items-center justify-between px-10">

                        <div>
                            <h2 className="text-2xl font-bold text-slate-800">
                                Administration
                            </h2>
                        </div>

                        <div className="flex items-center gap-4">

                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-600 text-white font-bold">
                                A
                            </div>

                        </div>

                    </div>

                </header>

                <main className="flex-1">

                    <div className="mx-auto max-w-7xl p-10">
                        {children}
                    </div>

                </main>

            </div>

        </div>
    );
}