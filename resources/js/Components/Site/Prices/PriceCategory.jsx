const icons = {
    Attractions: "🎢",
    Activités: "🏄",
    Soirées: "🎉",
    Locations: "🏠",
    École: "🎓",
};

export default function PriceCategory({ category, prices }) {
    return (
        <section className="rounded-3xl bg-white shadow-xl overflow-hidden border border-slate-200">

            <div className="flex items-center gap-4 border-b bg-slate-50 px-8 py-6">

                <span className="text-4xl">
                    {icons[category] || "💰"}
                </span>

                <h2 className="text-3xl font-bold text-slate-900">
                    {category}
                </h2>

            </div>

            <div>

                {prices.map((price) => (

                    <div
                        key={price.id}
                        className="flex items-center justify-between border-b border-slate-100 px-8 py-6 last:border-none"
                    >

                        <div>

                            <h3 className="text-xl font-semibold">
                                {price.title}
                            </h3>

                            {price.description && (

                                <p className="mt-1 text-slate-500">

                                    {price.description}

                                </p>

                            )}

                        </div>

                        <div className="text-right">

                            <p className="text-3xl font-black text-cyan-600">

                                {price.price} L$

                            </p>

                        </div>

                    </div>

                ))}

            </div>

        </section>
    );
}