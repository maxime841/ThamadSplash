import { Link } from "@inertiajs/react";
import { route } from "../../../lib/route";

import {
    FerrisWheel,
    Trophy,
    House,
    GraduationCap,
    Banknote,
    PartyPopper,
    ArrowRight,
} from "lucide-react";

export default function DashboardQuickActions() {

    const actions = [

        {
            title: "Nouvelle attraction",
            icon: FerrisWheel,
            href: route("admin.attractions.create"),
            color: "bg-cyan-500",
        },

        {
            title: "Nouvelle activité",
            icon: Trophy,
            href: route("admin.activities.create"),
            color: "bg-emerald-500",
        },

        {
            title: "Nouvelle location",
            icon: House,
            href: route("admin.rentals.create"),
            color: "bg-amber-500",
        },

        {
            title: "Nouvelle école",
            icon: GraduationCap,
            href: route("admin.schools.create"),
            color: "bg-violet-500",
        },

        {
            title: "Nouveau tarif",
            icon: Banknote,
            href: route("admin.prices.create"),
            color: "bg-rose-500",
        },

        {
            title: "Nouvelle soirée",
            icon: PartyPopper,
            href: route("admin.parties.create"),
            color: "bg-orange-500",
        },

    ];

    return (

        <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">

            <h2 className="mb-8 text-2xl font-bold text-slate-900">

                Actions rapides

            </h2>

            <div className="grid gap-4">

                {actions.map((action) => {

                    const Icon = action.icon;

                    return (

                        <Link
                            key={action.title}
                            href={action.href}
                            className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-lg"
                        >

                            <div className="flex items-center gap-4">

                                <div
                                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${action.color} text-white transition-transform duration-300 group-hover:scale-110`}
                                >

                                    <Icon size={28} />

                                </div>

                                <div>

                                    <p className="font-semibold text-slate-900">

                                        {action.title}

                                    </p>

                                    <p className="text-sm text-slate-500">

                                        Créer un nouvel élément

                                    </p>

                                </div>

                            </div>

                            <ArrowRight
                                size={22}
                                className="text-slate-300 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-cyan-500"
                            />

                        </Link>

                    );

                })}

            </div>

        </div>

    );

}