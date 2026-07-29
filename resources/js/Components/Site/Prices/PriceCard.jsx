export default function PriceCard({ price }) {
    return (
        <div className="rounded-3xl bg-white shadow-xl overflow-hidden border border-slate-200 hover:shadow-2xl transition">

            {price.cover_image && (
                <img
                    src={`/storage/${price.cover_image}`}
                    alt={price.title}
                    className="h-56 w-full object-cover"
                />
            )}

            <div className="p-8">

                {price.category && (
                    <span className="inline-block rounded-full bg-cyan-100 px-4 py-1 text-sm font-semibold text-cyan-700">
                        {price.category}
                    </span>
                )}

                <h3 className="mt-4 text-2xl font-bold">
                    {price.title}
                </h3>

                <p className="mt-4 text-slate-500">
                    {price.description}
                </p>

                <div className="mt-8 border-t pt-6">

                    <p className="text-5xl font-black text-cyan-600">
                        {price.price} L$
                    </p>

                </div>

            </div>

        </div>
    );
}