import AdminLayout from "../../../Layouts/AdminLayout";
import PageLayout from "../../../Components/Admin/Layout/PageLayout";
import DataTable from "../../../Components/Admin/Table/DataTable";
import Pagination from "../../../Components/Admin/Table/Pagination";
import SearchBar from "../../../Components/Admin/Search/SearchBar";
import PrimaryButton from "../../../Components/Admin/Button/PrimaryButton";

import ConfirmDeleteModal from "../../../Components/Admin/Modal/ConfirmDeleteModal";

import { Link, router } from "@inertiajs/react";
import { route } from "../../../lib/route";

import { Pencil, Trash2 } from "lucide-react";
import { useState } from "react";

export default function Index({ users, filters }) {

    const [open, setOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    return (

        <AdminLayout>

            <PageLayout
                title="Administrateurs"
                description="Gestion des comptes administrateurs."
                actions={
                    <Link href={route("admin.users.create")}>
                        <PrimaryButton>
                            Nouvel administrateur
                        </PrimaryButton>
                    </Link>
                }
            >

                <div className="mb-6">

                    <SearchBar
                        value={filters.search || ""}
                        placeholder="Rechercher..."
                        onChange={(e) =>
                            router.get(
                                route("admin.users.index"),
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
                        "Nom",
                        "Email",
                        "Rôle",
                        "Actions",
                    ]}
                >

                    {users.data.map((user) => (

                        <tr key={user.id}>

                            <td className="px-6 py-5">
                                {user.name}
                            </td>

                            <td className="px-6 py-5">
                                {user.email}
                            </td>

                            <td className="px-6 py-5">
                                {user.role}
                            </td>

                            <td className="px-6 py-5">

                                <div className="flex gap-3">

                                    <Link
                                        href={route("admin.users.edit", user.id)}
                                        className="text-blue-600 hover:text-blue-800"
                                    >
                                        <Pencil size={18} />
                                    </Link>

                                    <button
                                        onClick={() => {
                                            setSelectedUser(user);
                                            setOpen(true);
                                        }}
                                        className="text-red-600 hover:text-red-800"
                                    >
                                        <Trash2 size={18} />
                                    </button>

                                </div>

                            </td>

                        </tr>

                    ))}

                </DataTable>

                <Pagination links={users.links} />

                <ConfirmDeleteModal
                    open={open}
                    title="Supprimer cet administrateur ?"
                    message={
                        selectedUser
                            ? `Voulez-vous supprimer ${selectedUser.name} ?`
                            : ""
                    }
                    onCancel={() => {
                        setOpen(false);
                        setSelectedUser(null);
                    }}
                    onConfirm={() => {

                        if (!selectedUser) return;

                        router.delete(
                            route(
                                "admin.users.destroy",
                                selectedUser.id
                            ),
                            {
                                onSuccess: () => {
                                    setOpen(false);
                                    setSelectedUser(null);
                                },
                            }
                        );

                    }}
                />

            </PageLayout>

        </AdminLayout>

    );
}
