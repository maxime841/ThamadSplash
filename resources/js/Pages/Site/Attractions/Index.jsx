import SiteLayout from "../../../Layouts/SiteLayout";
import CardGridSection from "../../../Components/Site/Sections/CardGridSection";

export default function Index({ attractions }) {

    return (

        <SiteLayout>

            <CardGridSection
                eyebrow="Découvrez"
                title="Nos Attractions"
                subtitle="Toutes les attractions disponibles au parc."
                items={attractions}
                badge="Attraction"
                routePrefix="attractions"
            />

        </SiteLayout>

    );

}