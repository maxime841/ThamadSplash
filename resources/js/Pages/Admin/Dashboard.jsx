import AdminLayout from "../../Layouts/AdminLayout";
import StatCard from "../../Components/Admin/StatCard";

export default function Dashboard() {

    return (
        <AdminLayout>

            <h1 className="text-4xl font-bold mb-8">
                Tableau de bord
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

                <StatCard
                    title="Soirées"
                    value="0"
                    icon="🎉"
                />

                <StatCard
                    title="Attractions"
                    value="0"
                    icon="🎢"
                />

                <StatCard
                    title="Locations"
                    value="0"
                    icon="🏠"
                />

                <StatCard
                    title="Activités"
                    value="0"
                    icon="🎯"
                />

            </div>

        </AdminLayout>
    );
}