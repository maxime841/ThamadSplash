import { CheckCircle, XCircle } from "lucide-react";

export default function Alert({ type = "success", message }) {
    if (!message) return null;

    const success = type === "success";

    return (
        <div
            className={`mb-6 flex items-center gap-3 rounded-xl p-4 shadow ${
                success
                    ? "bg-green-50 text-green-700"
                    : "bg-red-50 text-red-700"
            }`}
        >
            {success ? (
                <CheckCircle size={22} />
            ) : (
                <XCircle size={22} />
            )}

            <span>{message}</span>
        </div>
    );
}
