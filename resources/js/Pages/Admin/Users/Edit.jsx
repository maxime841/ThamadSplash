import AdminLayout from "../../../Layouts/AdminLayout";
import PageLayout from "../../../Components/Admin/Layout/PageLayout";
import UserForm from "../../../Components/Admin/Forms/UserForm";
import { router } from "@inertiajs/react";
import { route } from "../../../lib/route";

export default function Edit({ user }) {
    return (
        <AdminLayout>
            <PageLayout
                title="Modifier l'administrateur"
                description="Modifier les informations du compte."
            >
                <UserForm
                    user={user}
                    submitLabel="Enregistrer"
                    onSubmit={(data) =>
                        router.put(
                            route("admin.users.update", user.id),
                            data
                        )
                    }
                />
            </PageLayout>
        </AdminLayout>
    );
}