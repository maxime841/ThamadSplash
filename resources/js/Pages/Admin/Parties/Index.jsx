import AdminLayout from "../../../Layouts/AdminLayout";
import DataTable from "../../../Components/Admin/DataTable";
import { Link } from "@inertiajs/react";
import { route } from "../../../lib/route";
import { Pencil, Trash2, Eye } from "lucide-react";

export default function Index({ parties }) {

    const columns = [
    {
    id: "party",
    header: "Soirée",

    cell: ({ row }) => (

        <div className="flex items-center gap-4">

            {row.original.cover_image ? (

                <img
                    src={`/storage/${row.original.cover_image}`}
                    alt={row.original.title}
                    className="w-20 h-14 rounded-lg object-cover"
                />

            ) : (

                <div className="w-20 h-14 rounded-lg bg-gray-200 flex items-center justify-center">
                    📷
                </div>

            )}

            <div>

                <p className="font-semibold">
                    {row.original.title}
                </p>

                <p className="text-sm text-gray-500">
                    {row.original.dj || "DJ non renseigné"}
                </p>

            </div>

        </div>

    ),
},
    {
        accessorKey: "event_date",
        header: "Date",
    },
    {
        accessorKey: "published",
        header: "Statut",
        cell: ({ row }) =>
            row.original.published ? (
                <span className="px-3 py-1 rounded-full bg-green-100 text-green-700">
                    Publiée
                </span>
            ) : (
                <span className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-700">
                    Brouillon
                </span>
            ),
    },
    {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => (

        <div className="flex items-center gap-3">

            <Link
                href={route("admin.parties.edit", row.original.id)}
                className="text-blue-600 hover:text-blue-800"
            >
                <Pencil size={18} />
            </Link>

            <button
                className="text-red-600 hover:text-red-800"
            >
                <Trash2 size={18} />
            </button>

            <Link
                href={`/party/${row.original.id}`}
                className="text-green-600 hover:text-green-800"
            >
                <Eye size={18} />
            </Link>

        </div>

    ),
}
];

    return (
        <AdminLayout>

            <div className="flex justify-between items-center mb-8">

                <div>
                    <h1 className="text-4xl font-bold">
                        Gestion des soirées
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Gérez toutes les soirées du club.
                    </p>
                </div>

                <Link
                    href={route("admin.parties.create")}
                    className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-xl"
                >
                    + Nouvelle soirée
                </Link>

            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">

                <DataTable
                    columns={columns}
                    data={parties.data}
                />

                <div className="mt-4 text-sm text-gray-500">
                     Affichage de {parties.from} à {parties.to} sur {parties.total} soirées.
                </div>

            </div>

        </AdminLayout>
    );
}