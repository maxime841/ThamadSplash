import { Link } from "@inertiajs/react";

export default function PreviousNextNavigation({
    previous,
    next,
    routePrefix,
}) {
    return (
        <section className="py-16">
            <div className="mx-auto flex max-w-7xl justify-between px-6">

                <div>
                    {previous && (
                        <Link
                            href={`/${routePrefix}/${previous.slug}`}
                            className="rounded-xl border px-6 py-4 transition hover:bg-slate-100"
                        >
                            ← {previous.title}
                        </Link>
                    )}
                </div>

                <div>
                    {next && (
                        <Link
                            href={`/${routePrefix}/${next.slug}`}
                            className="rounded-xl border px-6 py-4 transition hover:bg-slate-100"
                        >
                            {next.title} →
                        </Link>
                    )}
                </div>

            </div>
        </section>
    );
}