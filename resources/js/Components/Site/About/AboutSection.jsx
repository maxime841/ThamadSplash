import Section from "../Sections/Section";
import SectionTitle from "../Sections/SectionTitle";

export default function AboutSection() {

    return (

        <Section>

            <SectionTitle
                eyebrow="Bienvenue"
                title="Le plus grand parc aquatique virtuel"
                subtitle="Profitez de nombreuses attractions, soirées, formations et espaces de location dans un univers unique."
            />

            <div className="grid lg:grid-cols-2 gap-16 items-center">

                <img
                    src="../../images/Parc_vue_de_haut.png"
                    className="rounded-3xl shadow-xl"
                    alt=""
                />

                <div className="space-y-6 text-lg leading-8 text-slate-600">

                    <p>

                        Thamad Splash est un espace de loisirs où chacun peut
                        venir se divertir, participer à des événements,
                        découvrir de nouvelles activités ou louer son propre
                        espace.

                    </p>

                    <p>

                        Notre objectif est de proposer une expérience immersive
                        accessible à tous.

                    </p>

                </div>

            </div>

        </Section>

    );

}
