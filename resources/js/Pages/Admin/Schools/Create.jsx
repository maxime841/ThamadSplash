import AdminLayout from "../../../Layouts/AdminLayout";
import PageLayout from "../../../Components/Admin/Layout/PageLayout";
import SchoolForm from "./SchoolForm";

export default function Create() {
    return (
        <AdminLayout>
            <PageLayout
                title="Nouvelle école"
                description="Créer une nouvelle école"
            >
                <SchoolForm />
            </PageLayout>
        </AdminLayout>
    );
}