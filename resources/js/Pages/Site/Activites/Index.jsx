import SiteLayout from "../../../Layouts/SiteLayout";
import CardGridSection from "../../../Components/Site/Sections/CardGridSection";

export default function Index({ activities }) {

    return (

        <SiteLayout>

            <CardGridSection
                eyebrow="Découverte"
                title="Nos Activités"
                subtitle="Découvrez toutes nos activités."
                items={activities}
                badge="Activité"
                routePrefix="activities"
            />

        </SiteLayout>
    );

}