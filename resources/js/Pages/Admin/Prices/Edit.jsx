import AdminLayout from "../../../Layouts/AdminLayout";
import PageLayout from "../../../Components/Admin/Layout/PageLayout";
import PriceForm from "./PriceForm";

export default function Edit({ price }) {
    return (
        <AdminLayout>
            <PageLayout
                title="Modifier le tarif"
                description={price.title}
            >
                <PriceForm price={price} />
            </PageLayout>
        </AdminLayout>
    );
}