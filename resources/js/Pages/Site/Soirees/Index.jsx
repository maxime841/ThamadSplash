import SiteLayout from "../../../Layouts/SiteLayout";
import CardGridSection from "../../../Components/Site/Sections/CardGridSection";

export default function Index({ parties }) {

    return (

        <SiteLayout>

           <CardGridSection
                eyebrow="Évènements"
                title="Nos Soirées"
                subtitle="Retrouvez les prochaines soirées."
                items={parties}
                badge="Soirée"
                routePrefix="parties"
            />

        </SiteLayout>

    );

}