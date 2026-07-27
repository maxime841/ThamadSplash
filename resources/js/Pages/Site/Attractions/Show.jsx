import SiteLayout from "../../../Layouts/SiteLayout";

import Seo from "../../../Components/Site/Seo/Seo";
import HeroBanner from "../../../Components/Site/Detail/HeroBanner";
import ContentDetail from "../../../Components/Site/Detail/ContentDetail";
import DetailItem from "../../../Components/Site/Detail/DetailItem";
import RelatedContent from "../../../Components/Site/Detail/RelatedContent";
import CTASection from "../../../Components/Site/Sections/CTASection";
import PreviousNextNavigation from "../../../Components/Site/Detail/PreviousNextNavigation";

export default function Show({
    attraction,
    related,
    previous,
    next,
}) {
    return (
        <>
            <Seo
                title={`${attraction.title} - Thamad Splash`}
                description={
                    attraction.subtitle ??
                    attraction.description
                }
                image={
                    attraction.cover_image
                        ? `/storage/${attraction.cover_image}`
                        : "/images/placeholder.jpg"
                }
            />

            <SiteLayout>

                <HeroBanner
                    title={attraction.title}
                    subtitle={attraction.subtitle}
                    image={
                        attraction.cover_image
                            ? `/storage/${attraction.cover_image}`
                            : "/images/placeholder.jpg"
                    }
                    backHref="/attractions"
                    backLabel="Retour aux attractions"
                />

                <ContentDetail
                    title={attraction.title}
                    description={attraction.description}
                >

                    <DetailItem
                        label="Catégorie"
                        value={attraction.category || "-"}
                    />

                    <DetailItem
                        label="Statut"
                        value={
                            attraction.published
                                ? "Disponible"
                                : "Indisponible"
                        }
                    />

                </ContentDetail>

                <RelatedContent
                    title="Autres attractions"
                    items={related}
                    badge="Attraction"
                    routePrefix="attractions"
                />

                <PreviousNextNavigation
                    previous={previous}
                    next={next}
                    routePrefix="attractions"
                />

                <CTASection
                    title="Prêt à découvrir le parc ?"
                    description="Explorez toutes nos attractions, activités et événements."
                    button="Voir toutes les attractions"
                    href="/attractions"
                />

            </SiteLayout>
        </>
    );
}