import AdminLayout from "../../../Layouts/AdminLayout";
import PageLayout from "../../../Components/Admin/Layout/PageLayout";
import ActivityForm from "./ActivityForm";

export default function Edit({ activity }) {
    return (
        <AdminLayout>
            <PageLayout
                title="Modifier l'activité"
                description={activity.title}
            >
                <ActivityForm activity={activity} />
            </PageLayout>
        </AdminLayout>
    );
}
