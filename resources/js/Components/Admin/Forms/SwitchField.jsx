export default function SwitchField({
    label,
    checked,
    onChange,
}) {
    return (
        <div className="flex items-center justify-between rounded-xl border border-gray-200 p-4">

            <div>

                <p className="font-semibold text-gray-800">
                    {label}
                </p>

                <p className="text-sm text-gray-500">
                    La soirée sera visible sur le site.
                </p>

            </div>

            <button
                type="button"
                onClick={() => onChange(!checked)}
                className={`relative inline-flex h-7 w-12 items-center rounded-full transition ${
                    checked
                        ? "bg-cyan-600"
                        : "bg-gray-300"
                }`}
            >
                <span
                    className={`inline-block h-5 w-5 transform rounded-full bg-white transition ${
                        checked
                            ? "translate-x-6"
                            : "translate-x-1"
                    }`}
                />
            </button>

        </div>
    );
}