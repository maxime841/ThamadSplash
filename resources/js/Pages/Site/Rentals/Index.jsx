import SiteLayout from "../../../Layouts/SiteLayout";
import Seo from "../../../Components/Site/Seo/Seo";
import HeroBanner from "../../../Components/Site/Detail/HeroBanner";
import CardGridSection from "../../../Components/Site/Sections/CardGridSection";

export default function Index({ rentals }) {
    return (
        <>
            <Seo
                title="Locations - Thamad Splash"
                description="Découvrez toutes les locations proposées par Thamad Splash."
            />

            <SiteLayout>

                <HeroBanner
                    title="Nos locations"
                    subtitle="Profitez d'expériences variées pour tous les visiteurs."
                    image="/images/hero-rentals.jpg"
                />

                <CardGridSection
                    title="Toutes les locations"
                    items={rentals}
                    badge="Location"
                    routePrefix="rentals"
                />

            </SiteLayout>
        </>
    );
}
