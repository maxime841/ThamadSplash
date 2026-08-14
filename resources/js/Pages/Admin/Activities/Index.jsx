import { useState } from "react";
import { Link, router } from "@inertiajs/react";
import { Pencil, Trash2, Eye } from "lucide-react";

import AdminLayout from "../../../Layouts/AdminLayout";
import PageLayout from "../../../Components/Admin/Layout/PageLayout";
import DataTable from "../../../Components/Admin/Table/DataTable";
import Pagination from "../../../Components/Admin/Table/Pagination";
import SearchBar from "../../../Components/Admin/Search/SearchBar";
import PrimaryButton from "../../../Components/Admin/Button/PrimaryButton";
import ConfirmDeleteModal from "../../../Components/Admin/Modal/ConfirmDeleteModal";

import { route } from "../../../lib/route";

export default function Index({ activities, filters }) {

    const [open, setOpen] = useState(false);
    const [selectedActivity, setSelectedActivity] = useState(null);

    return (
        <AdminLayout>

            <PageLayout
                title="Activités"
                description="Gestion des activités"
                actions={
                    <Link href={route("admin.activities.create")}>
                        <PrimaryButton>
                            Nouvelle activité
                        </PrimaryButton>
                    </Link>
                }
            >

                <div className="mb-6">
                    <SearchBar
                        value={filters.search || ""}
                        placeholder="Rechercher une activité..."
                        onChange={(e) =>
                            router.get(
                                route("admin.activities.index"),
                                {
                                    search: e.target.value,
                                },
                                {
                                    preserveState: true,
                                    replace: true,
                                }
                            )
                        }
                    />
                </div>

                <DataTable
                    headers={[
                        "Image",
                        "Titre",
                        "Catégorie",
                        "Statut",
                        "Actions",
                    ]}
                >

                    {activities.data.map((activity) => (

                        <tr key={activity.id}>

                            <td className="px-6 py-5">

                                {activity.cover_image ? (

                                    <img
                                        src={`/storage/${activity.cover_image}`}
                                        alt={activity.title}
                                        className="w-20 h-14 rounded-lg object-cover"
                                    />

                                ) : (

                                    <div className="w-20 h-14 rounded-lg bg-gray-200 flex items-center justify-center">
                                        📷
                                    </div>

                                )}

                            </td>

                            <td className="px-6 py-5">

                                <div>

                                    <p className="font-semibold text-slate-800">
                                        {activity.title}
                                    </p>

                                    <p className="text-sm text-slate-500">
                                        {activity.subtitle || "Aucun sous-titre"}
                                    </p>

                                </div>

                            </td>

                            <td className="px-6 py-5">
                                {activity.category || "-"}
                            </td>

                            <td className="px-6 py-5">

                                {activity.published ? (

                                    <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">
                                        Publiée
                                    </span>

                                ) : (

                                    <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm text-yellow-700">
                                        Brouillon
                                    </span>

                                )}

                            </td>

                            <td className="px-6 py-5">

                                <div className="flex items-center gap-3">

                                    <Link
                                        href={route("admin.activities.edit", activity.slug)}
                                        className="rounded-lg p-2 text-blue-600 hover:bg-blue-50"
                                    >
                                        <Pencil size={18} />
                                    </Link>

                                    <button
                                        onClick={() => {
                                            setSelectedActivity(activity);
                                            setOpen(true);
                                        }}
                                        className="rounded-lg p-2 text-red-600 hover:bg-red-50"
                                    >
                                        <Trash2 size={18} />
                                    </button>

                                    <button
                                        disabled
                                        className="rounded-lg p-2 text-slate-400 cursor-not-allowed"
                                    >
                                        <Eye size={18} />
                                    </button>

                                </div>

                            </td>

                        </tr>

                    ))}

                </DataTable>

                <Pagination links={activities.links} />

                <ConfirmDeleteModal
                    open={open}
                    title="Supprimer cette activité ?"
                    message={
                        selectedActivity
                            ? `Voulez-vous vraiment supprimer "${selectedActivity.title}" ? Cette action est irréversible.`
                            : ""
                    }
                    onCancel={() => {
                        setOpen(false);
                        setSelectedActivity(null);
                    }}
                    onConfirm={() => {

                        if (!selectedActivity) return;

                        router.delete(
                            route("admin.activities.destroy", selectedActivity.slug),
                            {
                                onSuccess: () => {
                                    setOpen(false);
                                    setSelectedActivity(null);
                                },
                            }
                        );

                    }}
                />

            </PageLayout>

        </AdminLayout>
    );
}
