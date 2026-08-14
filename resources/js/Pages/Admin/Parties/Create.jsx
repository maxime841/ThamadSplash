import AdminLayout from "../../../Layouts/AdminLayout";
import PartyForm from "../../../Components/Admin/Forms/PartyForm";

export default function Create() {

    return (
        <AdminLayout>

            <h1 className="text-4xl font-bold mb-8">
                Nouvelle soirée
            </h1>

            <PartyForm />

        </AdminLayout>
    );
}
