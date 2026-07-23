export default function DateField({
    label,
    name,
    value,
    onChange,
    error,
}) {
    return (
        <div>
            <label
                htmlFor={name}
                className="block text-sm font-semibold text-gray-700 mb-2"
            >
                {label}
            </label>

            <input
                id={name}
                type="date"
                value={value}
                onChange={onChange}
                className={`w-full rounded-xl border px-4 py-3 transition ${
                    error
                        ? "border-red-500"
                        : "border-gray-300 focus:border-cyan-500 focus:ring-cyan-500"
                }`}
            />

            {error && (
                <p className="mt-2 text-sm text-red-600">
                    {error}
                </p>
            )}
        </div>
    );
}