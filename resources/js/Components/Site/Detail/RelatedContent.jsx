import SectionTitle from "../Sections/SectionTitle";
import Grid from "../Layout/Grid";
import ContentCard from "../Cards/ContentCard";

export default function RelatedContent({

    title,

    items,

    badge,

    routePrefix,

}) {

    if (!items.length) return null;

    return (

        <section className="bg-slate-50 py-24">

            <div className="mx-auto max-w-7xl px-6">

                <SectionTitle
                    title={title}
                    subtitle="Découvrez également ces contenus."
                />

                <Grid>

                    {items.map(item => (

                        <ContentCard
                            key={item.id}
                            title={item.title}
                            subtitle={item.subtitle}
                            badge={badge}
                            href={`/${routePrefix}/${item.slug}`}
                            image={
                                item.cover_image
                                ? `/storage/${item.cover_image}`
                                : "/images/placeholder.jpg"
                            }
                        />

                    ))}

                </Grid>

            </div>

        </section>

    );

}
