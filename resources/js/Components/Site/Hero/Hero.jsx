import PrimaryButton from "../Buttons/PrimaryButton";

export default function Hero() {

    return (

        <section className="relative overflow-hidden">

            <img
                src="/images/hero.jpg"
                className="h-[85vh] w-full object-cover"
                alt=""
            />

            <div className="absolute inset-0 bg-black/55"/>

            <div className="absolute inset-0 flex items-center">

                <div className="mx-auto max-w-7xl px-6">

                    <h1 className="max-w-3xl text-6xl font-black leading-tight text-white">

                        Bienvenue à

                        <span className="text-cyan-400">

                            {" "}Thamad Splash

                        </span>

                    </h1>

                    <p className="mt-8 max-w-2xl text-xl leading-9 text-slate-200">

                        Découvrez un parc aquatique unique proposant
                        des attractions, des soirées, des formations
                        et des espaces à louer.

                    </p>

                    <div className="mt-10">

                        <PrimaryButton href="/activities">

                            Découvrir

                        </PrimaryButton>

                    </div>

                </div>

            </div>

        </section>

    );

}