import SiteLayout from "../../Layouts/SiteLayout";

import Hero from "../../Components/Site/Hero/Hero";
import AboutSection from "../../Components/Site/About/AboutSection";
import ContentSection from "../../Components/Site/Sections/ContentSection";
import Seo from "../../Components/Site/Seo/Seo";

export default function Home({

    parties,

    attractions,

    activities,

    rentals,

    schools,

}) {

    return (
        <>
    <Seo
        title="Thamad Splash - Parc aquatique virtuel"
        description="Découvrez les attractions, activités, soirées, locations et l'école de Thamad Splash."
    />

        <SiteLayout>

            <Hero />

            <AboutSection />

            <ContentSection
                eyebrow="Évènements"
                title="Nos soirées"
                subtitle="Ne manquez aucun événement."
                items={parties}
                badge="Soirée"
                routePrefix="parties"
            />

            <ContentSection
                eyebrow="Découverte"
                title="Les attractions"
                subtitle="Découvrez toutes nos attractions."
                items={attractions}
                badge="Attraction"
                routePrefix="attractions"
            />

            <ContentSection
                eyebrow="Fun"
                title="Les activités"
                subtitle="Des activités pour tous."
                items={activities}
                badge="Activité"
                routePrefix="activities"
            />

            <ContentSection
                eyebrow="Location"
                title="Nos espaces de vie"
                subtitle="Louez votre propre espace."
                items={rentals}
                badge="Location"
                routePrefix="rentals"
            />

            <ContentSection
                eyebrow="Formation"
                title="Notre école"
                subtitle="Développez vos compétences."
                items={schools}
                badge="École"
                routePrefix="schools"
            />

        </SiteLayout>
    </>

    );

}