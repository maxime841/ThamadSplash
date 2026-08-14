export default function TextAeaField({
    label,
    name,
    value,
    onChange,
    error,
    rows = 6,
    required = false,
    placeholder = "",
    disabled = false,
}) {
    return (
        <div className="space-y-2">

            {label && (
                <label
                    htmlFor={name}
                    className="block text-sm font-medium text-slate-700"
                >
                    {label}

                    {required && (
                        <span className="ml-1 text-red-500">*</span>
                    )}
                </label>
            )}

            <textarea
                id={name}
                name={name}
                rows={rows}
                value={value}
                placeholder={placeholder}
                disabled={disabled}
                onChange={onChange}
                className={`
                    w-full
                    rounded-xl
                    border
                    bg-white
                    px-4
                    py-3
                    text-sm
                    text-slate-800
                    placeholder:text-slate-400
                    shadow-sm
                    resize-none
                    transition-all
                    duration-200
                    focus:outline-none
                    focus:ring-4
                    disabled:cursor-not-allowed
                    disabled:bg-slate-100
                    ${
                        error
                            ? "border-red-300 focus:border-red-500 focus:ring-red-100"
                            : "border-slate-200 focus:border-cyan-500 focus:ring-cyan-100"
                    }
                `}
            />

            {error && (
                <p className="text-sm font-medium text-red-600">
                    {error}
                </p>
            )}

        </div>
    );
}
