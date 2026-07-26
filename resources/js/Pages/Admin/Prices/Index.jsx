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

export default function Index({ prices, filters }) {

    const [open, setOpen] = useState(false);
    const [selectedPrice, setSelectedPrice] = useState(null);

    return (
        <AdminLayout>

            <PageLayout
                title="Tarifs"
                description="Gestion des tarifs"
                actions={
                    <Link href={route("admin.prices.create")}>
                        <PrimaryButton>
                            Nouveau tarif
                        </PrimaryButton>
                    </Link>
                }
            >

                <div className="mb-6">

                    <SearchBar
                        value={filters.search || ""}
                        placeholder="Rechercher un tarif..."
                        onChange={(e) =>
                            router.get(
                                route("admin.prices.index"),
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
                        "Tarif",
                        "Prix",
                        "Catégorie",
                        "Statut",
                        "Actions",
                    ]}
                >

                    {prices.data.map((price) => (

                        <tr key={price.id}>

                            <td className="px-6 py-5">

                                {price.cover_image ? (

                                    <img
                                        src={`/storage/${price.cover_image}`}
                                        alt={price.title}
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
                                        {price.title}
                                    </p>

                                    <p className="text-sm text-slate-500">
                                        {price.description || "Aucune description"}
                                    </p>

                                </div>

                            </td>

                            <td className="px-6 py-5 font-semibold">
                                {Number(price.price).toFixed(2)} €
                            </td>

                            <td className="px-6 py-5">
                                {price.category || "-"}
                            </td>

                            <td className="px-6 py-5">

                                {price.published ? (

                                    <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">
                                        Publié
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
                                        href={route("admin.prices.edit", price.id)}
                                        className="rounded-lg p-2 text-blue-600 hover:bg-blue-50"
                                    >
                                        <Pencil size={18} />
                                    </Link>

                                    <button
                                        onClick={() => {
                                            setSelectedPrice(price);
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

                <Pagination links={prices.links} />

                <ConfirmDeleteModal
                    open={open}
                    title="Supprimer ce tarif ?"
                    message={
                        selectedPrice
                            ? `Voulez-vous vraiment supprimer "${selectedPrice.title}" ? Cette action est irréversible.`
                            : ""
                    }
                    onCancel={() => {
                        setOpen(false);
                        setSelectedPrice(null);
                    }}
                    onConfirm={() => {

                        if (!selectedPrice) return;

                        router.delete(
                            route("admin.prices.destroy", selectedPrice.id),
                            {
                                onSuccess: () => {
                                    setOpen(false);
                                    setSelectedPrice(null);
                                },
                            }
                        );

                    }}
                />

            </PageLayout>

        </AdminLayout>
    );
}