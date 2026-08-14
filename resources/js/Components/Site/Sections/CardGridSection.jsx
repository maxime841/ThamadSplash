import Section from "../Sections/Section";
import SectionTitle from "../Sections/SectionTitle";
import Grid from "../Layout/Grid";
import ContentCard from "../Cards/ContentCard";

export default function CardGridSection({
    title,
    subtitle,
    eyebrow,
    items = [],
    badge,
    routePrefix,
}) {
    return (
        <Section>

            <SectionTitle
                eyebrow={eyebrow}
                title={title}
                subtitle={subtitle}
            />

            {items.length === 0 ? (

                <div className="rounded-2xl border border-dashed border-slate-300 p-16 text-center">

                    <p className="text-slate-500">

                        Aucun contenu disponible.

                    </p>

                </div>

            ) : (

                <Grid>

                    {items.map((item) => {
                        console.log(item);

                        return (
                            <ContentCard
                                key={item.id}
                                title={item.title}
                                subtitle={item.subtitle}
                                image={
                                    item.cover_image
                                        ? `/storage/${item.cover_image}`
                                        : "/images/placeholder.jpg"
                                }
                                href={`/${routePrefix}/${item.slug}`}
                                badge={badge}
                            />
                        );
                    })}

                </Grid>

            )}

        </Section>
    );
}
