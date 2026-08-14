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

export default function Index({ rentals, filters }) {

    const [open, setOpen] = useState(false);
    const [selectedRental, setSelectedRental] = useState(null);

    return (
        <AdminLayout>

            <PageLayout
                title="Locations"
                description="Gestion des locations"
                actions={
                    <Link href={route("admin.rentals.create")}>
                        <PrimaryButton>
                            Nouvelle location
                        </PrimaryButton>
                    </Link>
                }
            >

                <div className="mb-6">
                    <SearchBar
                        value={filters.search || ""}
                        placeholder="Rechercher une location..."
                        onChange={(e) =>
                            router.get(
                                route("admin.rentals.index"),
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
                        "Prix",
                        "Prims",
                        "Statut",
                        "Actions",
                    ]}
                >
                    {rentals.data.map((rental) => (

                        <tr key={rental.id}>

                            <td className="px-6 py-5">

                                {rental.cover_image ? (

                                    <img
                                        src={`/storage/${rental.cover_image}`}
                                        alt={rental.title}
                                        className="w-20 h-14 rounded-lg object-cover"
                                    />

                                ) : (

                                    <div className="w-20 h-14 bg-gray-200 rounded-lg flex items-center justify-center">
                                        📷
                                    </div>

                                )}

                            </td>

                            <td className="px-6 py-5">

                                <div>

                                    <p className="font-semibold text-slate-800">
                                        {rental.title}
                                    </p>

                                    <p className="text-sm text-slate-500">
                                        {rental.subtitle}
                                    </p>

                                </div>

                            </td>

                            <td className="px-6 py-5 font-semibold">
                                {Number(rental.price).toFixed(2)} €
                            </td>

                            <td className="px-6 py-5">
                                {rental.prims_remaining} / {rental.prims_allowed}
                            </td>

                            <td className="px-6 py-5">

                                <span
                                    className={`rounded-full px-3 py-1 text-sm
                                    ${
                                        rental.status === "available"
                                            ? "bg-green-100 text-green-700"
                                            : rental.status === "pending"
                                            ? "bg-yellow-100 text-yellow-700"
                                            : rental.status === "rented"
                                            ? "bg-red-100 text-red-700"
                                            : "bg-gray-100 text-gray-700"
                                    }`}
                                >
                                    {rental.status}
                                </span>

                            </td>

                            <td className="px-6 py-5">

                                <div className="flex items-center gap-3">

                                    <Link
                                        href={route("admin.rentals.edit", rental.slug)}
                                        className="rounded-lg p-2 text-blue-600 hover:bg-blue-50"
                                    >
                                        <Pencil size={18} />
                                    </Link>

                                    <button
                                        onClick={() => {
                                            setSelectedRental(rental);
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

                <Pagination links={rentals.links} />

                <ConfirmDeleteModal
                    open={open}
                    title="Supprimer cette location ?"
                    message={
                        selectedRental
                            ? `Voulez-vous vraiment supprimer "${selectedRental.title}" ?`
                            : ""
                    }
                    onCancel={() => {
                        setOpen(false);
                        setSelectedRental(null);
                    }}
                    onConfirm={() => {

                        if (!selectedRental) return;

                        router.delete(
                            route("admin.rentals.destroy", selectedRental.slug),
                            {
                                onSuccess: () => {
                                    setOpen(false);
                                    setSelectedRental(null);
                                },
                            }
                        );

                    }}
                />

            </PageLayout>

        </AdminLayout>
    );
}
