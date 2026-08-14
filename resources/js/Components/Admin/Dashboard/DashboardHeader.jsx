import { usePage } from "@inertiajs/react";
import { ShieldCheck } from "lucide-react";

export default function DashboardHeader() {
    const { auth } = usePage().props;

    const today = new Date().toLocaleDateString("fr-FR", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    return (
        <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-cyan-600 via-sky-600 to-blue-700 p-10 text-white shadow-2xl">

            <div className="absolute right-0 top-0 h-64 w-64 translate-x-20 -translate-y-20 rounded-full bg-white/10 blur-3xl" />

            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

                <div>

                    <p className="text-cyan-100 uppercase tracking-widest text-sm">
                        ThaMad Splash CMS
                    </p>

                    <h1 className="mt-3 text-5xl font-black">
                        Bonjour {auth.user.name} 👋
                    </h1>

                    <p className="mt-4 max-w-2xl text-lg text-cyan-100">
                        Bienvenue dans votre espace d'administration.
                        Gérez le contenu du parc, les événements,
                        les locations et toutes les informations du site.
                    </p>

                </div>

                <div className="rounded-3xl bg-white/10 p-6 backdrop-blur">

                    <div className="flex items-center gap-3">

                        <ShieldCheck className="h-8 w-8" />

                        <div>

                            <p className="text-sm text-cyan-100">
                                Connecté en tant que
                            </p>

                            <h3 className="text-xl font-bold capitalize">
                                {auth.user.role}
                            </h3>

                        </div>

                    </div>

                    <div className="mt-6 border-t border-white/20 pt-4">

                        <p className="text-sm text-cyan-100">
                            Aujourd'hui
                        </p>

                        <p className="mt-1 text-lg font-semibold capitalize">
                            {today}
                        </p>

                    </div>

                </div>

            </div>

        </div>
    );
}
