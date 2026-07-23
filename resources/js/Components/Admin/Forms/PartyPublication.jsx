import SwitchField from "./SwitchField";

export default function PartyPublication({
    data,
    setData,
    processing,
    party,
}) {
    return (
        <div className="space-y-6">

            <SwitchField
                label="Publier la soirée"
                checked={data.published}
                onChange={(value) => setData("published", value)}
            />

            <div className="flex justify-end gap-4">

                <button
                    type="submit"
                    disabled={processing}
                    className="bg-cyan-600 hover:bg-cyan-700 disabled:bg-gray-400 text-white px-8 py-3 rounded-xl transition"
                >
                    {processing
                        ? "Enregistrement..."
                        : party
                            ? "Modifier"
                            : "Créer"}
                </button>

            </div>

        </div>
    );
}