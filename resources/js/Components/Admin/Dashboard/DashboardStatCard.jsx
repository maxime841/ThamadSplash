import { ArrowUpRight } from "lucide-react";

export default function DashboardStatCard({
    title,
    value,
    icon: Icon,
    color = "cyan",
}) {
    const colors = {
        cyan: {
            bg: "bg-cyan-50",
            icon: "bg-cyan-500",
            ring: "group-hover:ring-cyan-300",
        },
        emerald: {
            bg: "bg-emerald-50",
            icon: "bg-emerald-500",
            ring: "group-hover:ring-emerald-300",
        },
        amber: {
            bg: "bg-amber-50",
            icon: "bg-amber-500",
            ring: "group-hover:ring-amber-300",
        },
        violet: {
            bg: "bg-violet-50",
            icon: "bg-violet-500",
            ring: "group-hover:ring-violet-300",
        },
        rose: {
            bg: "bg-rose-50",
            icon: "bg-rose-500",
            ring: "group-hover:ring-rose-300",
        },
        blue: {
            bg: "bg-blue-50",
            icon: "bg-blue-500",
            ring: "group-hover:ring-blue-300",
        },
        orange: {
            bg: "bg-orange-50",
            icon: "bg-orange-500",
            ring: "group-hover:ring-orange-300",
        },
    };

    const theme = colors[color];

    return (
        <div className="group rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

            <div className="flex items-start justify-between">

                <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${theme.icon} text-white ring-8 ring-transparent transition-all ${theme.ring}`}
                >
                    <Icon size={28} strokeWidth={2.3} />
                </div>

                <ArrowUpRight
                    size={18}
                    className="text-slate-300 transition group-hover:text-slate-500"
                />

            </div>

            <div className="mt-8">

                <h2 className="text-5xl font-black tracking-tight text-slate-900">
                    {value}
                </h2>

                <p className="mt-2 text-lg font-semibold text-slate-600">
                    {title}
                </p>

            </div>

        </div>
    );
}
