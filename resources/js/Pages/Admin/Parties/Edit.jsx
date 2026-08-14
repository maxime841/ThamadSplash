import AdminLayout from "../../../Layouts/AdminLayout";
import PartyForm from "../../../Components/Admin/Forms/PartyForm";

export default function Edit({ party }) {

    return (
        <AdminLayout>

            <h1 className="text-4xl font-bold mb-8">
                Modifier la soirée
            </h1>

            <PartyForm party={party} />

        </AdminLayout>
    );
}
