export default function PrimaryButton({
    children,
    className = "",
    ...props
}) {
    return (
        <button
            {...props}
            className={`inline-flex items-center justify-center rounded-xl bg-cyan-600 px-5 py-3 font-medium text-white transition hover:bg-cyan-700 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
        >
            {children}
        </button>
    );
}