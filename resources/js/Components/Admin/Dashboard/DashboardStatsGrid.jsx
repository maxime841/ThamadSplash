import {
    FerrisWheel,
    Trophy,
    House,
    GraduationCap,
    Banknote,
    PartyPopper,
    Users,
} from "lucide-react";

import DashboardStatCard from "./DashboardStatCard";

export default function DashboardStatsGrid({ stats }) {

    const cards = [

        {
            title: "Attractions",
            value: stats.attractions,
            icon: FerrisWheel,
            color: "cyan",
        },

        {
            title: "Activités",
            value: stats.activities,
            icon: Trophy,
            color: "emerald",
        },

        {
            title: "Locations",
            value: stats.rentals,
            icon: House,
            color: "amber",
        },

        {
            title: "École",
            value: stats.schools,
            icon: GraduationCap,
            color: "violet",
        },

        {
            title: "Tarifs",
            value: stats.prices,
            icon: Banknote,
            color: "rose",
        },

        {
            title: "Soirées",
            value: stats.parties,
            icon: PartyPopper,
            color: "orange",
        },

        {
            title: "Administrateurs",
            value: stats.users,
            icon: Users,
            color: "blue",
        },

    ];

    return (

        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

            {cards.map((card) => (

                <DashboardStatCard
                    key={card.title}
                    {...card}
                />

            ))}

        </div>

    );

}