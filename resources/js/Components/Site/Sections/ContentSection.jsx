import Section from "./Section";
import SectionTitle from "./SectionTitle";
import Grid from "../Layout/Grid";
import ContentCard from "../Cards/ContentCard";

export default function ContentSection({

    eyebrow,

    title,

    subtitle,

    items,

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

            <Grid>

                {items.map((item) => (

                    <ContentCard
                        key={item.id}
                        title={item.title}
                        subtitle={item.subtitle}
                        badge={badge}
                        href={`/${routePrefix}/${item.slug}`}
                        image={`/storage/${item.cover_image}`}
                    />

                ))}

            </Grid>

        </Section>

    );

}
