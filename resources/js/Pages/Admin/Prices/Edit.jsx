import AdminLayout from "../../../Layouts/AdminLayout";
import PageLayout from "../../../Components/Admin/Layout/PageLayout";
import PriceForm from "./PriceForm";


import { router } from "@inertiajs/react";
import { route } from "../../../lib/route";

export default function Edit({ price }) {

    return (

        <AdminLayout>

            <PageLayout
                title="Modifier le tarif"
                description="Modifier les informations du tarif."
            >

                <PriceForm
                    price={price}
                    submitLabel="Enregistrer"
                    onSubmit={(data) =>

                        router.post(
                            route("admin.prices.update", price.slug),
                            {
                                ...data,
                                _method: "put",
                            }
                        )

                    }
                />

            </PageLayout>

        </AdminLayout>

    );
}