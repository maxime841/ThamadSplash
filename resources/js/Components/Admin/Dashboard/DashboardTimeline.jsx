import {
    FerrisWheel,
    Trophy,
    House,
    PartyPopper,
    Mail,
} from "lucide-react";

const icons = {
    ferris: FerrisWheel,
    activity: Trophy,
    house: House,
    party: PartyPopper,
    message: Mail,
};

export default function DashboardTimeline({ timeline = [] }) {

    return (

        <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">

            <div className="mb-8 flex items-center justify-between">

                <h2 className="text-2xl font-bold">
                    Activité récente
                </h2>

                <span className="rounded-full bg-slate-100 px-4 py-2 text-sm">
                    {timeline?.length} éléments
                </span>

            </div>

            <div className="space-y-5">

                {timeline.map((item, index) => {

                    const Icon = icons[item.icon];

                    return (

                        <div
                            key={index}
                            className="flex items-center gap-5 rounded-2xl p-4 transition hover:bg-slate-50"
                        >

                            <div className="rounded-2xl bg-cyan-100 p-3">

                                <Icon
                                    size={22}
                                    className="text-cyan-600"
                                />

                            </div>

                            <div className="flex-1">

                                <h3 className="font-semibold">

                                    {item.title}

                                </h3>

                                <p className="text-sm text-slate-500">

                                    {item.type}

                                </p>

                            </div>

                            <div className="text-sm text-slate-400">

                                {new Date(item.date).toLocaleDateString("fr-FR")}

                            </div>

                        </div>

                    );

                })}

            </div>

        </div>

    );

}