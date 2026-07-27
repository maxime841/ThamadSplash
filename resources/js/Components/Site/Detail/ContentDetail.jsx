export default function ContentDetail({

    title,

    description,

    children,

}) {

    return (

        <section className="py-24">

            <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-3">

                <article className="lg:col-span-2">

                    <h2 className="mb-8 text-4xl font-black text-slate-900">

                        {title}

                    </h2>

                    <div className="whitespace-pre-line leading-8 text-slate-600">
                        {description}
                    </div>

                </article>

                <aside>

                    <div className="sticky top-28 rounded-3xl bg-slate-50 p-8 shadow">

                        <h3 className="mb-6 text-xl font-bold">

                            Informations

                        </h3>

                        {children}

                    </div>

                </aside>

            </div>

        </section>

    );

}