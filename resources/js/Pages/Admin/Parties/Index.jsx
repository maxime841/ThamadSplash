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
        <PageLayout
    title="Soirées"
    description="Gestion des soirées"
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
        "DJ",
        "Statut",
        "Actions",
    ]}
>
    {parties.data.map((party) => (
        <tr key={party.id}>
            <td className="px-6 py-4">
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

            <td className="px-6 py-4">{party.title}</td>

            <td className="px-6 py-4">{party.event_date}</td>

            <td className="px-6 py-4">{party.dj}</td>

            <td className="px-6 py-4">
                {party.published ? "Publiée" : "Brouillon"}
            </td>

            <td className="px-6 py-4">
    <div className="flex items-center gap-3">
        <Link
            href={route("admin.parties.edit", party.id)}
            className="text-blue-600 hover:text-blue-800"
        >
            <Pencil size={18} />
        </Link>

        <button
    onClick={() => {
        setSelectedParty(party);
        setOpen(true);
    }}
    className="text-red-600 hover:text-red-800"
>
    <Trash2 size={18} />
</button>

        <Link
            href={`/party/${party.id}`}
            className="text-green-600 hover:text-green-800"
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
            route("admin.parties.destroy", selectedParty.id),
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
    );
}