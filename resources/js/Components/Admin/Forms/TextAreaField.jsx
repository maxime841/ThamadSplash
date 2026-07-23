export default function TextareaField({
    label,
    name,
    value,
    onChange,
    error,
    rows = 6,
    required = false,
    placeholder = "",
}) {
    return (
        <div className="mb-6">
            <label
                htmlFor={name}
                className="block text-sm font-semibold text-gray-700 mb-2"
            >
                {label}

                {required && (
                    <span className="text-red-500 ml-1">*</span>
                )}
            </label>

            <textarea
                id={name}
                rows={rows}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                className={`w-full rounded-xl border px-4 py-3 transition resize-none
                    ${
                        error
                            ? "border-red-500 focus:ring-red-500"
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