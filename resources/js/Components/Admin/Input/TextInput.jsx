export default function TextInput({
    label,
    error,
    className = "",
    ...props
}) {
    return (
        <div className="space-y-2">

            {label && (
                <label className="block text-sm font-medium text-slate-700">
                    {label}
                </label>
            )}

            <input
                {...props}
                className={`w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 ${className}`}
            />

            {error && (
                <p className="text-sm text-red-600">
                    {error}
                </p>
            )}

        </div>
    );
}
