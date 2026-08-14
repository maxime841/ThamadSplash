import { useForm } from "@inertiajs/react";
import { route } from "../../../lib/route";

export default function SettingsForm({ settings }) {

    const { data, setData, put, processing, errors } = useForm({

        site_name: settings.site_name ?? "",
        site_slogan: settings.site_slogan ?? "",

        email: settings.email ?? "",
        phone: settings.phone ?? "",
        address: settings.address ?? "",

        facebook: settings.facebook ?? "",
        instagram: settings.instagram ?? "",
        youtube: settings.youtube ?? "",
        tiktok: settings.tiktok ?? "",

    });

    const submit = (e) => {

        e.preventDefault();

        put(route("admin.settings.update"));

    };

    const Input = ({
        label,
        value,
        onChange,
        error,
        type = "text",
    }) => (

        <div>

            <label className="mb-2 block font-semibold text-slate-700">

                {label}

            </label>

            <input
                type={type}
                value={value}
                onChange={onChange}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-cyan-500 focus:outline-none"
            />

            {error && (

                <p className="mt-1 text-sm text-red-500">

                    {error}

                </p>

            )}

        </div>

    );

    return (

        <form
            onSubmit={submit}
            className="space-y-8"
        >

            {/* Informations */}

            <div className="rounded-3xl bg-white p-8 shadow">

                <h2 className="mb-6 text-2xl font-bold">

                    🌐 Informations générales

                </h2>

                <div className="grid gap-6 md:grid-cols-2">

                    <Input
                        label="Nom du site"
                        value={data.site_name}
                        onChange={(e)=>setData("site_name",e.target.value)}
                        error={errors.site_name}
                    />

                    <Input
                        label="Slogan"
                        value={data.site_slogan}
                        onChange={(e)=>setData("site_slogan",e.target.value)}
                        error={errors.site_slogan}
                    />

                </div>

            </div>

            {/* Coordonnées */}

            <div className="rounded-3xl bg-white p-8 shadow">

                <h2 className="mb-6 text-2xl font-bold">

                    📞 Coordonnées

                </h2>

                <div className="grid gap-6">

                    <Input
                        label="Email"
                        type="email"
                        value={data.email}
                        onChange={(e)=>setData("email",e.target.value)}
                        error={errors.email}
                    />

                    <Input
                        label="Téléphone"
                        value={data.phone}
                        onChange={(e)=>setData("phone",e.target.value)}
                        error={errors.phone}
                    />

                    <div>

                        <label className="mb-2 block font-semibold">

                            Adresse

                        </label>

                        <textarea
                            rows="4"
                            value={data.address}
                            onChange={(e)=>setData("address",e.target.value)}
                            className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-cyan-500 focus:outline-none"
                        />

                    </div>

                </div>

            </div>

            {/* Réseaux */}

            <div className="rounded-3xl bg-white p-8 shadow">

                <h2 className="mb-6 text-2xl font-bold">

                    📱 Réseaux sociaux

                </h2>

                <div className="grid gap-6 md:grid-cols-2">

                    <Input
                        label="Facebook"
                        value={data.facebook}
                        onChange={(e)=>setData("facebook",e.target.value)}
                        error={errors.facebook}
                    />

                    <Input
                        label="Instagram"
                        value={data.instagram}
                        onChange={(e)=>setData("instagram",e.target.value)}
                        error={errors.instagram}
                    />

                    <Input
                        label="YouTube"
                        value={data.youtube}
                        onChange={(e)=>setData("youtube",e.target.value)}
                        error={errors.youtube}
                    />

                    <Input
                        label="TikTok"
                        value={data.tiktok}
                        onChange={(e)=>setData("tiktok",e.target.value)}
                        error={errors.tiktok}
                    />

                </div>

            </div>

            <div className="flex justify-end">

                <button
                    type="submit"
                    disabled={processing}
                    className="rounded-xl bg-cyan-600 px-8 py-4 font-semibold text-white transition hover:bg-cyan-700"
                >

                    Enregistrer les paramètres

                </button>

            </div>

        </form>

    );

}
