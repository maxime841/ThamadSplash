import {
    MapPin,
    Phone,
    Mail,
    Clock,
} from "lucide-react";

export default function ContactInfoCard() {

    const infos = [

        {
            icon: MapPin,
            title: "Adresse",
            value: "ThaMad Splash\nFrance",
        },

        {
            icon: Phone,
            title: "Téléphone",
            value: "+33 0 00 00 00 00",
        },

        {
            icon: Mail,
            title: "Email",
            value: "contact@thamadsplash.fr",
        },

        {
            icon: Clock,
            title: "Horaires",
            value: "Lundi au Dimanche\n9h00 - 18h00",
        },

    ];

    return (

        <div className="rounded-3xl bg-white p-10 shadow-xl">

            <h2 className="mb-8 text-3xl font-bold">

                Nos coordonnées

            </h2>

            <div className="space-y-8">

                {infos.map((info) => {

                    const Icon = info.icon;

                    return (

                        <div
                            key={info.title}
                            className="flex gap-5"
                        >

                            <div className="rounded-2xl bg-cyan-100 p-4">

                                <Icon
                                    className="text-cyan-600"
                                    size={28}
                                />

                            </div>

                            <div>

                                <h3 className="font-bold">

                                    {info.title}

                                </h3>

                                <p className="whitespace-pre-line text-slate-600">

                                    {info.value}

                                </p>

                            </div>

                        </div>

                    );

                })}

            </div>

        </div>

    );

}
