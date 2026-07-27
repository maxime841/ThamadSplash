import { Link } from "@inertiajs/react";

export default function ContentCard({

    title,

    subtitle,

    image,

    href,

    badge,

}) {

    return (

        <Link
            href={href}
            className="group overflow-hidden rounded-3xl bg-white shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
        >

            <img
                src={image}
                alt={title}
                className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
            />

            <div className="p-6">

                {badge && (

                    <span className="inline-block rounded-full bg-cyan-100 px-4 py-1 text-sm font-semibold text-cyan-700">

                        {badge}

                    </span>

                )}

                <h3 className="mt-4 text-2xl font-bold text-slate-900">

                    {title}

                </h3>

                <p className="mt-3 text-slate-500">

                    {subtitle}

                </p>

            </div>

        </Link>

    );

}