import AdminLayout from "../../../Layouts/AdminLayout";
import PageLayout from "../../../Components/Admin/Layout/PageLayout";
import AttractionForm from "./AttractionForm";

export default function Edit({ attraction }) {
    return (
        <AdminLayout>
            <PageLayout
                title="Modifier l'attraction"
                description={attraction.title}
            >
                <AttractionForm attraction={attraction} />
            </PageLayout>
        </AdminLayout>
    );
}