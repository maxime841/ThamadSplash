import AdminLayout from "../../../Layouts/AdminLayout";
import PageLayout from "../../../Components/Admin/Layout/PageLayout";
import { Link, router } from "@inertiajs/react";
import { route } from "../../../lib/route";
import { Mail, MailOpen, Search, Trash2, Eye } from "lucide-react";

export default function Index({ messages, filters }) {

    const search = (value) => {

        router.get(
            route("admin.contact-messages.index"),
            {
                search: value,
            },
            {
                preserveState: true,
                replace: true,
            }
        );

    };

    return (

        <AdminLayout>

            <PageLayout
                title="Messages"
                description="Messages reçus depuis le formulaire de contact."
            >

                <div className="mb-8">

                    <div className="relative">

                        <Search
                            size={18}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                        />

                        <input
                            type="text"
                            defaultValue={filters.search}
                            placeholder="Rechercher..."
                            onChange={(e) => search(e.target.value)}
                            className="w-full rounded-xl border border-slate-300 bg-white py-3 pl-12 pr-4 shadow-sm focus:border-cyan-500 focus:outline-none"
                        />

                    </div>

                </div>

                <div className="overflow-hidden rounded-2xl bg-white shadow">

                    <table className="min-w-full">

                        <thead className="bg-slate-100">

                            <tr>

                                <th className="px-6 py-4 text-left">
                                    Statut
                                </th>

                                <th className="px-6 py-4 text-left">
                                    Nom
                                </th>

                                <th className="px-6 py-4 text-left">
                                    Sujet
                                </th>

                                <th className="px-6 py-4 text-left">
                                    Date
                                </th>

                                <th className="px-6 py-4 text-right">
                                    Actions
                                </th>

                            </tr>

                        </thead>

                        <tbody>

                            {messages.data.map((message) => (

                                <tr
                                    key={message.id}
                                    className="border-t hover:bg-slate-50"
                                >

                                    <td className="px-6 py-5">

                                        {message.read_at ? (

                                            <MailOpen
                                                className="text-green-600"
                                                size={20}
                                            />

                                        ) : (

                                            <Mail
                                                className="text-cyan-600"
                                                size={20}
                                            />

                                        )}

                                    </td>

                                    <td className="px-6 py-5 font-semibold">

                                        {message.name}

                                    </td>

                                    <td className="px-6 py-5">

                                        {message.subject}

                                    </td>

                                    <td className="px-6 py-5">

                                        {new Date(
                                            message.created_at
                                        ).toLocaleDateString("fr-FR")}

                                    </td>

                                    <td className="px-6 py-5">

                                        <div className="flex justify-end gap-3">

                                            <Link
                                                href={route(
                                                    "admin.contact-messages.show",
                                                    message.id
                                                )}
                                                className="rounded-lg bg-cyan-600 p-2 text-white hover:bg-cyan-700"
                                            >

                                                <Eye size={18} />

                                            </Link>

                                            <button
                                                onClick={() => {

                                                    if (
                                                        confirm(
                                                            "Supprimer ce message ?"
                                                        )
                                                    ) {

                                                        router.delete(
                                                            route(
                                                                "admin.contact-messages.destroy",
                                                                message.id
                                                            )
                                                        );

                                                    }

                                                }}
                                                className="rounded-lg bg-red-600 p-2 text-white hover:bg-red-700"
                                            >

                                                <Trash2 size={18} />

                                            </button>

                                        </div>

                                    </td>

                                </tr>

                            ))}

                        </tbody>

                    </table>

                </div>

            </PageLayout>

        </AdminLayout>

    );

}
