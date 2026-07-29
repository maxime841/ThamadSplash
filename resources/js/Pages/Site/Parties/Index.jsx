import SiteLayout from "../../../Layouts/SiteLayout";
import Seo from "../../../Components/Site/Seo/Seo";
import HeroBanner from "../../../Components/Site/Detail/HeroBanner";
import CardGridSection from "../../../Components/Site/Sections/CardGridSection";

export default function Index({ parties }) {
    return (
        <>
            <Seo
                title="Soirées - Thamad Splash"
                description="Découvrez toutes les soirées proposées par Thamad Splash."
            />

            <SiteLayout>

                <HeroBanner
                    title="Nos soirées"
                    subtitle="Profitez d'expériences variées pour tous les visiteurs."
                    image="/images/hero-activities.jpg"
                />

                <CardGridSection
                    title="Toutes les soirées"
                    items={parties}
                    badge="Soirée"
                    routePrefix="parties"
                />

            </SiteLayout>
        </>
    );
}