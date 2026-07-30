import AdminLayout from "../../../Layouts/AdminLayout";
import PageLayout from "../../../Components/Admin/Layout/PageLayout";
import SettingsForm from "../../../Components/Admin/Forms/SettingsForm";

export default function Index({ settings }) {
    return (
        <AdminLayout>
            <PageLayout
                title="Paramètres"
                description="Configurez les informations générales du site."
            >
                <SettingsForm settings={settings} />
            </PageLayout>
        </AdminLayout>
    );
}