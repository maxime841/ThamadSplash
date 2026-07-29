import SiteLayout from "../../../Layouts/SiteLayout";
import Seo from "../../../Components/Site/Seo/Seo";
import HeroBanner from "../../../Components/Site/Detail/HeroBanner";
import CardGridSection from "../../../Components/Site/Sections/CardGridSection";

export default function Index({ schools }) {
    return (
        <>
            <Seo
                title="Ecole - Thamad Splash"
                description="Découvrez l'école proposées par Thamad Splash."
            />

            <SiteLayout>

                <HeroBanner
                    title="Notre école"
                    subtitle="Profitez d'expériences variées pour tous les visiteurs."
                    image="/images/hero-schools.jpg"
                />

                <CardGridSection
                    title="Notre école"
                    items={schools}
                    badge="Ecole"
                    routePrefix="schools"
                />

            </SiteLayout>
        </>
    );
}