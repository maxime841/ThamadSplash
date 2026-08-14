import AdminLayout from "../../../Layouts/AdminLayout";
import PageLayout from "../../../Components/Admin/Layout/PageLayout";
import SchoolForm from "./SchoolForm";

export default function Edit({ school }) {
    return (
        <AdminLayout>
            <PageLayout
                title="Modifier la formation"
                description={school.title}
            >
                <SchoolForm school={school} />
            </PageLayout>
        </AdminLayout>
    );
}
