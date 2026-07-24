export default function ConfirmDeleteModal({
    open,
    title,
    message,
    onConfirm,
    onCancel,
}) {
    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">

            <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">

                <h2 className="text-xl font-bold text-gray-900">
                    {title}
                </h2>

                <p className="mt-3 text-gray-600">
                    {message}
                </p>

                <div className="mt-8 flex justify-end gap-3">

                    <button
                        onClick={onCancel}
                        className="rounded-xl border px-5 py-2 hover:bg-gray-100"
                    >
                        Annuler
                    </button>

                    <button
                        onClick={onConfirm}
                        className="rounded-xl bg-red-600 px-5 py-2 text-white hover:bg-red-700"
                    >
                        Supprimer
                    </button>

                </div>

            </div>

        </div>
    );
}