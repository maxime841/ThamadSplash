import SiteLayout from "../../../Layouts/SiteLayout";

import Seo from "../../../Components/Site/Seo/Seo";
import HeroBanner from "../../../Components/Site/Detail/HeroBanner";
import ContentDetail from "../../../Components/Site/Detail/ContentDetail";
import DetailItem from "../../../Components/Site/Detail/DetailItem";
import RelatedContent from "../../../Components/Site/Detail/RelatedContent";
import PreviousNextNavigation from "../../../Components/Site/Detail/PreviousNextNavigation";
import CTASection from "../../../Components/Site/Sections/CTASection";

export default function Show({
    activity,
    related,
    previous,
    next,
}) {
    return (
        <>
            <Seo
                title={`${activity.title} - Thamad Splash`}
                description={
                    activity.subtitle ??
                    activity.description
                }
                image={
                    activity.cover_image
                        ? `/storage/${activity.cover_image}`
                        : "/images/placeholder.jpg"
                }
            />

            <SiteLayout>

                <HeroBanner
                    title={activity.title}
                    subtitle={activity.subtitle}
                    category={activity.category}
                    image={
                        activity.cover_image
                            ? `/storage/${activity.cover_image}`
                            : "/images/placeholder.jpg"
                    }
                    backHref="/activities"
                    backLabel="Retour aux activités"
                />

                <ContentDetail
                    title={activity.title}
                    description={activity.description}
                >
                    <DetailItem
                        label="Catégorie"
                        value={activity.category || "-"}
                    />

                    <DetailItem
                        label="Statut"
                        value={
                            activity.published
                                ? "Disponible"
                                : "Indisponible"
                        }
                    />
                </ContentDetail>

                <RelatedContent
                    title="Autres activités"
                    items={related}
                    badge="Activité"
                    routePrefix="activities"
                />

                <PreviousNextNavigation
                    previous={previous}
                    next={next}
                    routePrefix="activities"
                />

                <CTASection
                    title="Découvrez toutes nos activités"
                    description="Explorez toutes les expériences proposées par Thamad Splash."
                    button="Voir toutes les activités"
                    href="/activities"
                />

            </SiteLayout>
        </>
    );
}