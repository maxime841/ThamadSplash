import AdminLayout from "../../../Layouts/AdminLayout";
import PageLayout from "../../../Components/Admin/Layout/PageLayout";
import { Link, router } from "@inertiajs/react";
import { route } from "../../../lib/route";

export default function Show({ message }) {
    const destroy = () => {
        if (!confirm("Supprimer ce message ?")) return;

        router.delete(
            route("admin.contact-messages.destroy", message.id)
        );
    };

    return (
        <AdminLayout>
            <PageLayout
                title={message.subject}
                description="Détail du message reçu."
            >
                <div className="space-y-6">

                    <div className="rounded-2xl bg-white shadow p-8">

                        <div className="grid md:grid-cols-2 gap-6">

                            <div>
                                <p className="text-sm text-slate-500">
                                    Nom
                                </p>

                                <p className="font-semibold text-lg">
                                    {message.name}
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-slate-500">
                                    Email
                                </p>

                                <a
                                    href={`mailto:${message.email}`}
                                    className="font-semibold text-cyan-600 hover:underline"
                                >
                                    {message.email}
                                </a>
                            </div>

                            <div>
                                <p className="text-sm text-slate-500">
                                    Téléphone
                                </p>

                                <p>
                                    {message.phone || "-"}
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-slate-500">
                                    Reçu le
                                </p>

                                <p>
                                    {new Date(
                                        message.created_at
                                    ).toLocaleString("fr-FR")}
                                </p>
                            </div>

                        </div>

                    </div>

                    <div className="rounded-2xl bg-white shadow p-8">

                        <h2 className="text-xl font-bold mb-4">
                            Message
                        </h2>

                        <div className="whitespace-pre-wrap leading-7 text-slate-700">
                            {message.message}
                        </div>

                    </div>

                    <div className="flex justify-between">

                        <Link
                            href={route(
                                "admin.contact-messages.index"
                            )}
                            className="rounded-xl border border-slate-300 px-6 py-3 hover:bg-slate-100"
                        >
                            ← Retour
                        </Link>

                        <button
                            onClick={destroy}
                            className="rounded-xl bg-red-600 px-6 py-3 text-white hover:bg-red-700"
                        >
                            Supprimer
                        </button>

                    </div>

                </div>
            </PageLayout>
        </AdminLayout>
    );
}