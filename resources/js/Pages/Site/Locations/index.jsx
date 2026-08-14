import SiteLayout from "../../../Layouts/SiteLayout";
import CardGridSection from "../../../Components/Site/Sections/CardGridSection";

export default function Index({ rentals }) {

    return (

        <SiteLayout>
a
           <CardGridSection
                eyebrow="Location"
                title="Nos Espaces"
                subtitle="Découvrez nos espaces disponibles."
                items={rentals}
                badge="Location"
                routePrefix="rentals"
            />

        </SiteLayout>

    );

}
