export default function InputField({
    label,
    name,
    type = "text",
    value,
    onChange,
    error,
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

            <input
                id={name}
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                className={`w-full rounded-xl border px-4 py-3 transition
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