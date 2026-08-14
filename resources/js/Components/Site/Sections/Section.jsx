export default function Section({
    children,
    className = "",
}) {
    return (
        <section className={`py-24 ${className}`}>
            <div className="mx-auto max-w-7xl px-6">
                {children}
            </div>
        </section>
    );
}
