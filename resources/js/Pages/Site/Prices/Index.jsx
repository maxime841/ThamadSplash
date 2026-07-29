import SiteLayout from "../../../Layouts/SiteLayout";

import Seo from "../../../Components/Site/Seo/Seo";
import HeroBanner from "../../../Components/Site/Detail/HeroBanner";
import PriceCategory from "../../../Components/Site/Prices/PriceCategory";

export default function Index({ prices }) {

    return (
        <>
            <Seo
                title="Tarifs - Thamad Splash"
                description="Tous les tarifs de Thamad Splash."
            />

            <SiteLayout>

                <HeroBanner
                    title="Nos tarifs"
                    subtitle="Retrouvez tous les prix de Thamad Splash."
                    image="/images/hero-prices.jpg"
                />

                <section className="py-20">

                    <div className="mx-auto max-w-7xl px-6">

                        <div className="mb-14 rounded-3xl bg-cyan-50 border border-cyan-100 p-8">

                            <h2 className="text-3xl font-bold">

                                Bon à savoir

                            </h2>

                            <ul className="mt-6 space-y-3 text-lg text-slate-600">

                                <li>✔ Paiement en Linden Dollars (L$)</li>

                                <li>✔ Tarifs mis à jour automatiquement</li>

                                <li>✔ Certaines activités peuvent être gratuites lors d'événements spéciaux</li>

                            </ul>

                        </div>

                        <div className="space-y-10">

                            {Object.entries(prices).map(([category, items]) => (

                                <PriceCategory
                                    key={category}
                                    category={category}
                                    prices={items}
                                />

                            ))}

                        </div>

                    </div>

                </section>

            </SiteLayout>

        </>
    );
}