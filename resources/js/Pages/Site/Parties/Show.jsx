import SiteLayout from "../../../Layouts/SiteLayout";

import Seo from "../../../Components/Site/Seo/Seo";
import HeroBanner from "../../../Components/Site/Detail/HeroBanner";
import ContentDetail from "../../../Components/Site/Detail/ContentDetail";
import DetailItem from "../../../Components/Site/Detail/DetailItem";
import RelatedContent from "../../../Components/Site/Detail/RelatedContent";
import PreviousNextNavigation from "../../../Components/Site/Detail/PreviousNextNavigation";
import CTASection from "../../../Components/Site/Sections/CTASection";

export default function Show({
    party,
    related,
    previous,
    next,
}) {
    return (
        <>
            <Seo
                title={`${party.title} - Thamad Splash`}
                description={
                    party.subtitle ??
                    party.description
                }
                image={
                    party.cover_image
                        ? `/storage/${party.cover_image}`
                        : "/images/placeholder.jpg"
                }
            />

            <SiteLayout>

                <HeroBanner
                    title={party.title}
                    subtitle={party.subtitle}
                    category={party.category}
                    image={
                        party.cover_image
                            ? `/storage/${party.cover_image}`
                            : "/images/placeholder.jpg"
                    }
                    backHref="/parties"
                    backLabel="Retour aux soirées"
                />

                <ContentDetail
                    title={party.title}
                    description={party.description}
                >
                    <DetailItem
                        label="Catégorie"
                        value={party.category || "-"}
                    />

                    <DetailItem
                        label="Statut"
                        value={
                            party.published
                                ? "Disponible"
                                : "Indisponible"
                        }
                    />
                </ContentDetail>

                <RelatedContent
                    title="Autres soirées"
                    items={related}
                    badge="soirée"
                    routePrefix="parties"
                />

                <PreviousNextNavigation
                    previous={previous}
                    next={next}
                    routePrefix="parties"
                />

                <CTASection
                    title="Découvrez toutes nos soirées"
                    description="Explorez toutes les expériences proposées par Thamad Splash."
                    button="Voir toutes les soirées"
                    href="/parties"
                />

            </SiteLayout>
        </>
    );
}