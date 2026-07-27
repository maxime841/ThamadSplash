import SiteLayout from "../../../Layouts/SiteLayout";
import CardGridSection from "../../../Components/Site/Sections/CardGridSection";

export default function Index({ schools }) {

    return (

        <SiteLayout>
a
           <CardGridSection
                eyebrow="Formation"
                title="Notre École"
                subtitle="Nos formations disponibles."
                items={schools}
                badge="École"
                routePrefix="schools"
            />

        </SiteLayout>

    );

}