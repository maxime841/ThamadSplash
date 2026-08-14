import RentalInfoCard from "../../../Components/Site/Rentals/RentalInfoCard";

import SiteLayout from "../../../Layouts/SiteLayout";

import Seo from "../../../Components/Site/Seo/Seo";
import CTASection from "../../../Components/Site/Sections/CTASection";

export default function Show({
    rental,
    related,
    previous,
    next,
}) {
    return (
        <>
            <Seo
                title={`${rental.title} - Thamad Splash`}
                description={
                    rental.subtitle ??
                    rental.description
                }
                image={
                    rental.cover_image
                        ? `/storage/${rental.cover_image}`
                        : "/images/placeholder.jpg"
                }
            />

            <SiteLayout>

                <section className="py-20">

    <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-3">

        <div className="lg:col-span-2">

            <h2 className="mb-8 text-4xl font-bold">
                {rental.title}
            </h2>

            <div className="prose max-w-none">
                {rental.description}
            </div>

        </div>

        <RentalInfoCard rental={rental} />

    </div>

</section>

                <CTASection
                    title="Découvrez toutes nos locations"
                    description="Explorez toutes les expériences proposées par Thamad Splash."
                    button="Voir toutes les locations"
                    href="/rentals"
                />

            </SiteLayout>
        </>
    );
}
