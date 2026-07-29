import SiteLayout from "../../Layouts/SiteLayout";
import Seo from "../../Components/Site/Seo/Seo";

import ContactHero from "../../Components/Site/Contact/ContactHero";
import ContactInfoCard from "../../Components/Site/Contact/ContactInfoCard";
import ContactForm from "../../Components/Site/Contact/ContactForm";

export default function Contact() {

    return (

        <>
            <Seo
                title="Contact - ThaMad Splash"
                description="Contactez l'équipe ThaMad Splash."
            />

            <SiteLayout>

                <ContactHero />

                <section className="py-20">

                    <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">

                        <ContactInfoCard />

                        <ContactForm />

                    </div>

                </section>

            </SiteLayout>

        </>

    );

}