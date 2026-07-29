import { FileText } from "lucide-react";

export default function DashboardDraftSummary({ drafts }) {
    const items = [
        {
            label: "Attractions",
            count: drafts.attractions.length,
        },
        {
            label: "Activités",
            count: drafts.activities.length,
        },
        {
            label: "Locations",
            count: drafts.rentals.length,
        },
        {
            label: "École",
            count: drafts.schools.length,
        },
        {
            label: "Tarifs",
            count: drafts.prices.length,
        },
        {
            label: "Soirées",
            count: drafts.parties.length,
        },
    ];

    return (
        <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">

            <div className="mb-8 flex items-center gap-3">

                <FileText className="text-cyan-600" size={28} />

                <h2 className="text-2xl font-bold">
                    Brouillons
                </h2>

            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">

                {items.map((item) => (

                    <div
                        key={item.label}
                        className="rounded-2xl bg-slate-50 p-5"
                    >

                        <p className="text-slate-500">
                            {item.label}
                        </p>

                        <h3 className="mt-2 text-4xl font-black">
                            {item.count}
                        </h3>

                    </div>

                ))}

            </div>

        </div>
    );
}