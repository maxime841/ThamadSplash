import AdminLayout from "../../../Layouts/AdminLayout";
import DataTable from "../../../Components/Admin/Table/DataTable";
import { Link, router } from "@inertiajs/react";
import { route } from "../../../lib/route";
import { Pencil, Trash2, Eye } from "lucide-react";
import PageLayout from "../../../Components/Admin/Layout/PageLayout";
import PrimaryButton from "../../../Components/Admin/Button/PrimaryButton";
import SearchBar from "../../../Components/Admin/Search/SearchBar";
import Pagination from "../../../Components/Admin/Table/Pagination";
import { useState } from "react";
import ConfirmDeleteModal from "../../../Components/Admin/Modal/ConfirmDeleteModal";


export default function Index({ attractions, filters }) {

    const [open, setOpen] = useState(false);
    const [selectedAttraction, setSelectedAttraction] = useState(null);

    return (
        <AdminLayout>
    <PageLayout
    title="Attractions"
    description="Gestion des attractions"
    breadcrumb={[
        { label: "Administration", href: "/admin" },
        { label: "Attractions" },
    ]}
    actions={
        <Link href={route("admin.attractions.create")}>
            <PrimaryButton>
                Nouvelle attraction
            </PrimaryButton>
        </Link>
    }
>

    {/* Barre de recherche */}

    <div className="mb-6">
    <SearchBar
        value={filters.search || ""}
        placeholder="Rechercher une attraction..."
        onChange={(e) =>
            router.get(
                route("admin.attractions.index"),
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

    {/* Tableau */}
    <DataTable
    headers={[
        "Image",
        "Titre",
        "Catégorie",
        "Statut",
        "Actions",
    ]}
>
    {attractions.data.map((attraction) => (
        <tr key={attraction.id}>
            <td className="px-6 py-5 align-middle">
                {attraction.cover_image ? (
                    <img
                        src={`/storage/${attraction.cover_image}`}
                        alt={attraction.title}
                        className="w-20 h-14 rounded-lg object-cover"
                    />
                ) : (
                    <div className="w-20 h-14 bg-gray-200 rounded-lg flex items-center justify-center">
                        📷
                    </div>
                )}
            </td>

            <td className="px-6 py-5 align-middle">
    <div>
        <p className="font-semibold text-slate-800">
            {attraction.title}
        </p>

        <p className="text-sm text-slate-500">
            {attraction.subtitle || "Aucun sous-titre"}
        </p>
    </div>
</td>

            <td className="px-6 py-5 align-middle">
                {attraction.category || "-"}
            </td>

            <td className="px-6 py-5 align-middle">
                {attraction.published ? "Publiée" : "Brouillon"}
            </td>

            <td className="px-6 py-5 align-middle">
    <div className="flex items-center gap-3">
        <Link
            href={route("admin.attractions.edit", attraction.id)}
            className="rounded-lg p-2 text-blue-600 transition hover:bg-blue-50"
        >
            <Pencil size={18} />
        </Link>

        <button
    onClick={() => {
        setSelectedAttraction(attraction);
        setOpen(true);
    }}
    className="rounded-lg p-2 text-red-600 transition hover:bg-red-50"
>
    <Trash2 size={18} />
</button>

        <Link
            href={`/attraction/${attraction.id}`}
            className="rounded-lg p-2 text-emerald-600 transition hover:bg-emerald-50"
        >
            <Eye size={18} />
        </Link>
    </div>
</td>
        </tr>
    ))}
</DataTable>

<Pagination links={attractions.links} />

<ConfirmDeleteModal
    open={open}
    title="Supprimer cette attraction ?"
    message={
        selectedAttraction
            ? `Voulez-vous vraiment supprimer "${selectedAttraction.title}" ? Cette action est irréversible.`
            : ""
    }
    onCancel={() => {
        setOpen(false);
        setSelectedAttraction(null);
    }}
    onConfirm={() => {
    if (!selectedAttraction) return;

    router.delete(
        route("admin.attractions.destroy", selectedAttraction.id),
        {
            onSuccess: () => {
                setOpen(false);
                setSelectedAttraction(null);
            },
        }
    );
}}
/>

</PageLayout>
</AdminLayout>
    );
}