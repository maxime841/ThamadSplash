export default function SectionTitle({
    eyebrow,
    title,
    subtitle,
    center = true,
}) {
    return (
        <div className={center ? "text-center mb-14" : "mb-14"}>

            {eyebrow && (
                <p className="text-cyan-600 font-semibold uppercase tracking-[0.2em] mb-3">
                    {eyebrow}
                </p>
            )}

            <h2 className="text-4xl md:text-5xl font-black text-slate-900">
                {title}
            </h2>

            {subtitle && (
                <p className="mt-5 max-w-3xl mx-auto text-slate-500 text-lg leading-8">
                    {subtitle}
                </p>
            )}

        </div>
    );
}
