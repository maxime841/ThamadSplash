import SiteLayout from "../../../Layouts/SiteLayout";

import Seo from "../../../Components/Site/Seo/Seo";
import HeroBanner from "../../../Components/Site/Detail/HeroBanner";
import ContentDetail from "../../../Components/Site/Detail/ContentDetail";
import DetailItem from "../../../Components/Site/Detail/DetailItem";
import RelatedContent from "../../../Components/Site/Detail/RelatedContent";
import PreviousNextNavigation from "../../../Components/Site/Detail/PreviousNextNavigation";
import CTASection from "../../../Components/Site/Sections/CTASection";

export default function Show({
    school,
    related,
    previous,
    next,
}) {
    return (
        <>
            <Seo
                title={`${school.title} - Thamad Splash`}
                description={
                    school.subtitle ??
                    school.description
                }
                image={
                    school.cover_image
                        ? `/storage/${school.cover_image}`
                        : "/images/placeholder.jpg"
                }
            />

            <SiteLayout>

                <HeroBanner
                    title={school.title}
                    subtitle={school.subtitle}
                    category={school.category}
                    image={
                        school.cover_image
                            ? `/storage/${school.cover_image}`
                            : "/images/placeholder.jpg"
                    }
                    backHref="/schools"
                    backLabel="Retour a l'école"
                />

                <ContentDetail
                    title={school.title}
                    description={school.description}
                >
                    <DetailItem
                        label="Catégorie"
                        value={school.category || "-"}
                    />

                    <DetailItem
                        label="Statut"
                        value={
                            school.published
                                ? "Disponible"
                                : "Indisponible"
                        }
                    />
                </ContentDetail>

                <RelatedContent
                    title="Autres écoles"
                    items={related}
                    badge="Ecoles"
                    routePrefix="schools"
                />

                <PreviousNextNavigation
                    previous={previous}
                    next={next}
                    routePrefix="schools"
                />

                <CTASection
                    title="Découvrez toutes nos écoles"
                    description="Explorez toutes les expériences proposées par Thamad Splash."
                    button="Voir toutes les écoles"
                    href="/schools"
                />

            </SiteLayout>
        </>
    );
}