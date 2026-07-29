import AdminLayout from "../../../Layouts/AdminLayout";
import PageLayout from "../../../Components/Admin/Layout/PageLayout";
import UserForm from "../../../Components/Admin/Forms/UserForm";
import { router } from "@inertiajs/react";
import { route } from "../../../lib/route";

export default function Create() {
    return (
        <AdminLayout>

            <PageLayout
                title="Nouvel administrateur"
                description="Créer un nouveau compte administrateur."
            >

                <UserForm
                    submitLabel="Créer"
                    onSubmit={(data) =>
                        router.post(
                            route("admin.users.store"),
                            data
                        )
                    }
                />

            </PageLayout>

        </AdminLayout>
    );
}