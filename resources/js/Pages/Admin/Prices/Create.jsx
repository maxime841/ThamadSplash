import AdminLayout from "../../../Layouts/AdminLayout";
import PageLayout from "../../../Components/Admin/Layout/PageLayout";
import PriceForm from "./PriceForm";

export default function Create() {
    return (
        <AdminLayout>
            <PageLayout
                title="Nouveau tarif"
                description="Créer un nouveau tarif"
            >
                <PriceForm />
            </PageLayout>
        </AdminLayout>
    );
}
