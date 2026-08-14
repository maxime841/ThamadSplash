import PrimaryButton from "../Buttons/PrimaryButton";

export default function CTASection({

    title,

    description,

    button,

    href,

}) {

    return (

        <section className="bg-cyan-600 py-24">

            <div className="mx-auto max-w-5xl px-6 text-center text-white">

                <h2 className="text-5xl font-black">

                    {title}

                </h2>

                <p className="mx-auto mt-8 max-w-3xl text-xl leading-9">

                    {description}

                </p>

                <div className="mt-10">

                    <PrimaryButton href={href}>

                        {button}

                    </PrimaryButton>

                </div>

            </div>

        </section>

    );

}
