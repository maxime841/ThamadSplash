
import AdminLayout from "../../../Layouts/AdminLayout";
import PageLayout from "../../../Components/Admin/Layout/PageLayout";
import AttractionForm from "./AttractionForm";

export default function Create() {
    return (
        <AdminLayout>
            <PageLayout
                title="Nouvelle attraction"
                description="Créer une nouvelle attraction"
            >
                <AttractionForm />
            </PageLayout>
        </AdminLayout>
    );
}
