import SiteLayout from "../../../Layouts/SiteLayout";
import CardGridSection from "../../../Components/Site/Sections/CardGridSection";
import HeroBanner from "../../../Components/Site/Detail/HeroBanner";

export default function Index({ attractions }) {

    return (

        <SiteLayout>

             <HeroBanner
                title="Nos attractions"
                subtitle="Profitez d'expériences variées pour tous les visiteurs."
                image="/images/hero-activities.jpg"
            />

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