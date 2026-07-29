export default function RentalInfoCard({ rental }) {
    const statusColors = {
        Disponible: "bg-emerald-100 text-emerald-700",
        Loué: "bg-red-100 text-red-700",
        "En attente": "bg-amber-100 text-amber-700",
    };

    return (
        <div className="rounded-3xl bg-white p-8 shadow-xl border border-slate-200">

            <h3 className="mb-6 text-2xl font-bold text-slate-900">
                Informations de location
            </h3>

            <div className="space-y-5">

                <Info
                    icon="💰"
                    label="Prix"
                    value={`${rental.price} L$`}
                />

                <Info
                    icon="📦"
                    label="Prims autorisées"
                    value={rental.nbr_prims_allowed}
                />

                <Info
                    icon="📦"
                    label="Prims restantes"
                    value={rental.nbr_prims_remaining}
                />

                <Info
                    icon="⏳"
                    label="Durée"
                    value={rental.rental_duration}
                />

                <Info
                    icon="📅"
                    label="Temps restant"
                    value={rental.remaining_duration}
                />

                <div className="flex items-center justify-between border-t pt-5">

                    <span className="font-semibold text-slate-600">
                        Statut
                    </span>

                    <span
                        className={`rounded-full px-4 py-2 text-sm font-semibold ${
                            statusColors[rental.status] ??
                            "bg-slate-100 text-slate-700"
                        }`}
                    >
                        {rental.status}
                    </span>

                </div>

            </div>

        </div>
    );
}

function Info({ icon, label, value }) {
    return (
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">

            <div className="flex items-center gap-3">

                <span className="text-2xl">
                    {icon}
                </span>

                <span className="font-medium text-slate-600">
                    {label}
                </span>

            </div>

            <span className="font-bold text-slate-900">
                {value || "-"}
            </span>

        </div>
    );
}