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

export default function Index({ schools, filters }) {

    const [open, setOpen] = useState(false);
    const [selectedSchool, setSelectedSchool] = useState(null);

    return (
        <AdminLayout>

            <PageLayout
                title="École"
                description="Gestion des formations"
                actions={
                    <Link href={route("admin.schools.create")}>
                        <PrimaryButton>
                            Nouvelle école
                        </PrimaryButton>
                    </Link>
                }
            >

                <div className="mb-6">
                    <SearchBar
                        value={filters.search || ""}
                        placeholder="Rechercher une formation..."
                        onChange={(e) =>
                            router.get(
                                route("admin.schools.index"),
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
                        "Durée",
                        "Capacité",
                        "Actions",
                    ]}
                >

                    {schools.data.map((school) => (

                        <tr key={school.id}>

                            <td className="px-6 py-5">
                                {school.cover_image ? (
                                    <img
                                        src={`/storage/${school.cover_image}`}
                                        alt={school.title}
                                        className="w-20 h-14 rounded-lg object-cover"
                                    />
                                ) : (
                                    <div className="w-20 h-14 bg-gray-200 rounded-lg flex items-center justify-center">
                                        📷
                                    </div>
                                )}
                            </td>

                            <td className="px-6 py-5">
                                <p className="font-semibold">{school.title}</p>
                                <p className="text-sm text-slate-500">
                                    {school.subtitle}
                                </p>
                            </td>

                            <td className="px-6 py-5">
                                {school.price} €
                            </td>

                            <td className="px-6 py-5">
                                {school.duration}
                            </td>

                            <td className="px-6 py-5">
                                {school.capacity}
                            </td>

                            <td className="px-6 py-5">

                                <div className="flex gap-3">

                                    <Link
                                        href={route("admin.schools.edit", school.id)}
                                        className="p-2 rounded-lg text-blue-600 hover:bg-blue-50"
                                    >
                                        <Pencil size={18}/>
                                    </Link>

                                    <button
                                        onClick={()=>{
                                            setSelectedSchool(school);
                                            setOpen(true);
                                        }}
                                        className="p-2 rounded-lg text-red-600 hover:bg-red-50"
                                    >
                                        <Trash2 size={18}/>
                                    </button>

                                    <button
                                        disabled
                                        className="p-2 rounded-lg text-slate-400"
                                    >
                                        <Eye size={18}/>
                                    </button>

                                </div>

                            </td>

                        </tr>

                    ))}

                </DataTable>

                <Pagination links={schools.links} />

                <ConfirmDeleteModal
                    open={open}
                    title="Supprimer cette formation ?"
                    message={
                        selectedSchool
                            ? `Voulez-vous vraiment supprimer "${selectedSchool.title}" ?`
                            : ""
                    }
                    onCancel={()=>{
                        setOpen(false);
                        setSelectedSchool(null);
                    }}
                    onConfirm={()=>{
                        router.delete(
                            route("admin.schools.destroy", selectedSchool.id),
                            {
                                onSuccess: ()=>{
                                    setOpen(false);
                                    setSelectedSchool(null);
                                }
                            }
                        );
                    }}
                />

            </PageLayout>

        </AdminLayout>
    );
}