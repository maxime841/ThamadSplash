import PrimaryButton from "../Buttons/PrimaryButton";

export default function HeroBanner({

    title,

    subtitle,

    image,

    backHref,

    backLabel = "Retour",
    
    category,

}) {

    return (

        <section className="relative h-[70vh] overflow-hidden">

            <img
                src={image || "/images/placeholder.jpg"}
                alt={title}
                className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/60 to-slate-900/30"/>

            <div className="relative mx-auto flex h-full max-w-7xl items-center px-6">

                <div className="max-w-3xl">

                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">

                        Thamad Splash

                    </p>

                    <h1 className="text-5xl font-black leading-tight text-white md:text-7xl">

                        {title}

                    </h1>

                    {subtitle && (

                        <p className="mt-8 text-xl leading-9 text-slate-200">

                            {subtitle}

                            {category && (
                        <span className="inline-block rounded-full bg-cyan-500/20 px-4 py-2 text-sm font-semibold text-cyan-200">
                            {category}
                        </span>
                    )}

                        </p>

                    )}

                    <div className="mt-10">

                        <PrimaryButton href={backHref}>

                            ← {backLabel}

                        </PrimaryButton>

                    </div>

                </div>

            </div>

        </section>

    );

}
