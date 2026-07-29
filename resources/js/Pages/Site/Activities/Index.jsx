import SiteLayout from "../../../Layouts/SiteLayout";
import Seo from "../../../Components/Site/Seo/Seo";
import HeroBanner from "../../../Components/Site/Detail/HeroBanner";
import CardGridSection from "../../../Components/Site/Sections/CardGridSection";

export default function Index({ activities }) {
    return (
        <>
            <Seo
                title="Activités - Thamad Splash"
                description="Découvrez toutes les activités proposées par Thamad Splash."
            />

            <SiteLayout>

                <HeroBanner
                    title="Nos activités"
                    subtitle="Profitez d'expériences variées pour tous les visiteurs."
                    image="/images/hero-activities.jpg"
                />

                <CardGridSection
                    title="Toutes les activités"
                    items={activities}
                    badge="Activité"
                    routePrefix="activities"
                />

            </SiteLayout>
        </>
    );
}