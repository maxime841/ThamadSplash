import AdminLayout from "../../../Layouts/AdminLayout";
import PageLayout from "../../../Components/Admin/Layout/PageLayout";
import RentalForm from "./RentalForm";

export default function Create() {
    return (
        <AdminLayout>
            <PageLayout
                title="Nouvelle location"
                description="Créer une nouvelle location"
            >
                <RentalForm />
            </PageLayout>
        </AdminLayout>
    );
}