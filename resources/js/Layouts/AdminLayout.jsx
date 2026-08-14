import { route } from "../lib/route";
import { Link, usePage } from "@inertiajs/react";

export default function AdminLayout({ children }) {

    const { url } = usePage();
    const { auth } = usePage().props;

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
                        href={route("admin.dashboard")}
                        className={`block rounded-lg px-4 py-3 ${
                            url === "/admin"
                                ? "bg-cyan-600 text-white"
                                : "hover:bg-slate-800"
                        }`}
                    >
                        📊 Dashboard
                    </Link>

                    {auth.user.role === "super-admin" && (
                    <Link
                        href={route("admin.users.index")}
                        className="flex items-center rounded-xl px-4 py-3 text-slate-300 transition hover:bg-slate-800 hover:text-white"
                    >
                        👥 Administrateurs
                    </Link>
)}

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
                        className={`block rounded-lg px-4 py-3 ${
                            url.startsWith("/admin/attractions")
                                ? "bg-cyan-600 text-white"
                                : "hover:bg-slate-800"
                        }`}
                    >
                        🎢 Attractions
                    </Link>

                    <Link
                        href={route("admin.rentals.index")}
                        className={`block rounded-lg px-4 py-3 ${
                            url.startsWith("/admin/rentals")
                                ? "bg-cyan-600 text-white"
                                : "hover:bg-slate-800"
                        }`}
                    >
                        🏠 Locations
                    </Link>

                    <Link
                        href={route("admin.activities.index")}
                        className={`block rounded-lg px-4 py-3 ${
                            url.startsWith("/admin/activities")
                                ? "bg-cyan-600 text-white"
                                : "hover:bg-slate-800"
                        }`}
                    >
                        🎯 Activités
                    </Link>

                    <Link
                        href={route("admin.schools.index")}
                        className={`block rounded-lg px-4 py-3 ${
                            url.startsWith("/admin/schools")
                                ? "bg-cyan-600 text-white"
                                : "hover:bg-slate-800"
                        }`}
                    >
                        🎓 École
                    </Link>

                    <Link
                        href={route("admin.prices.index")}
                        className={`block rounded-lg px-4 py-3 ${
                            url.startsWith("/admin/prices")
                                ? "bg-cyan-600 text-white"
                                : "hover:bg-slate-800"
                        }`}
                    >
                        💰 Tarifs
                    </Link>

                </nav>

                <div className="border-t border-slate-800 p-4">

                    <Link
                        href={route("admin.contact-messages.index")}
                        className={`block rounded-lg px-4 py-3 ${
                        url.startsWith("/admin/contact-messages")
                        ? "bg-cyan-600 text-white"
                        : "hover:bg-slate-800"
                        }`}
                    >
    📨 Messages
</Link>
                    <Link
                        href={route("admin.settings.index")}
                        className={`block rounded-lg px-4 py-3 ${
                        url.startsWith("/admin/settings")
                        ? "bg-cyan-600 text-white"
                        : "hover:bg-slate-800"
                    }`}
                    >
                    ⚙️ Paramètres
                    </Link>

                    <Link
                        href={route("logout")}
                        method="post"
                        as="button"
                        className="w-full rounded-xl bg-red-600 py-3 font-medium transition hover:bg-red-700"
                    >
                        Déconnexion
                    </Link>

                </div>

            </aside>

            <div className="flex flex-1 flex-col">

                <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/80 backdrop-blur">

                    <div className="flex h-20 items-center justify-between px-10">

                        <h2 className="text-2xl font-bold text-slate-800">
                            Administration
                        </h2>

                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-600 text-white font-bold">
                            A
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
