import AdminLayout from "../../../Layouts/AdminLayout";
import PageLayout from "../../../Components/Admin/Layout/PageLayout";
import RentalForm from "./RentalForm";

export default function Edit({ rental }) {
    return (
        <AdminLayout>
            <PageLayout
                title="Modifier la location"
                description={rental.title}
            >
                <RentalForm rental={rental} />
            </PageLayout>
        </AdminLayout>
    );
}
