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


export default function Index({ parties, filters }) {

    const [open, setOpen] = useState(false);
    const [selectedParty, setSelectedParty] = useState(null);

    return (
        <AdminLayout>
    <PageLayout
    title="Soirées"
    description="Gestion des soirées"
    breadcrumb={[
        { label: "Administration", href: "/admin" },
        { label: "Soirées" },
    ]}
    actions={
        <Link href={route("admin.parties.create")}>
            <PrimaryButton>
                Nouvelle soirée
            </PrimaryButton>
        </Link>
    }
>

    {/* Barre de recherche */}

    <div className="mb-6">
    <SearchBar
        value={filters.search || ""}
        placeholder="Rechercher une soirée..."
        onChange={(e) =>
            router.get(
                route("admin.parties.index"),
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
        "Date",
        "Statut",
        "Actions",
    ]}
>
    {parties.data.map((party) => (
        <tr key={party.id}>
            <td className="px-6 py-5 align-middle">
                {party.cover_image ? (
                    <img
                        src={`/storage/${party.cover_image}`}
                        alt={party.title}
                        className="w-20 h-14 rounded-lg object-cover"
                    />
                ) : (
                    <div className="w-20 h-14 bg-gray-200 rounded-lg flex items-center justify-center">
                        📷
                    </div>
                )}
            </td>

            <td className="px-6 py-5 align-middle"><div>
    <p className="font-semibold text-slate-800">
        {party.title}
    </p>

    <p className="text-sm text-slate-500">
        {party.dj || "DJ non renseigné"}
    </p>
</div></td>

            <td className="px-6 py-5 align-middle">{party.event_date}</td>

            <td className="px-6 py-5 align-middle">
                {party.published ? "Publiée" : "Brouillon"}
            </td>

            <td className="px-6 py-5 align-middle">
    <div className="flex items-center gap-3">
        <Link
            href={route("admin.parties.edit", party.slug)}
            className="rounded-lg p-2 text-blue-600 transition hover:bg-blue-50"
        >
            <Pencil size={18} />
        </Link>

        <button
    onClick={() => {
        setSelectedParty(party);
        setOpen(true);
    }}
    className="rounded-lg p-2 text-red-600 transition hover:bg-red-50"
>
    <Trash2 size={18} />
</button>

        <Link
            href={`/party/${party.id}`}
            className="rounded-lg p-2 text-emerald-600 transition hover:bg-emerald-50"
        >
            <Eye size={18} />
        </Link>
    </div>
</td>
        </tr>
    ))}
</DataTable>

<Pagination links={parties.links} />

<ConfirmDeleteModal
    open={open}
    title="Supprimer cette soirée ?"
    message={
        selectedParty
            ? `Voulez-vous vraiment supprimer "${selectedParty.title}" ? Cette action est irréversible.`
            : ""
    }
    onCancel={() => {
        setOpen(false);
        setSelectedParty(null);
    }}
    onConfirm={() => {
        router.delete(
            route("admin.parties.destroy", selectedParty.slug),
            {
                onSuccess: () => {
                    setOpen(false);
                    setSelectedParty(null);
                },
            }
        );
    }}
/>

</PageLayout>
</AdminLayout>
    );
}
