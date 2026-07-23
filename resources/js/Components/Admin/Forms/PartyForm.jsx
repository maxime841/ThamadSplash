import { useForm } from "@inertiajs/react";
import { route } from "../../../lib/route";

export default function PartyForm({ party = null }) {

    const { data, setData, post, put, processing, errors } = useForm({
        title: party?.title || "",
        subtitle: party?.subtitle || "",
        description: party?.description || "",
        event_date: party?.event_date || "",
        event_time: party?.event_time || "",
        dj: party?.dj || "",
        cover_image: null,
        published: party?.published ?? false,
    });

    function submit(e) {
        e.preventDefault();

        if (party) {
            put(route("admin.parties.update", party.id));
        } else {
            post(route("admin.parties.store"));
        }
    }

    return (
        <form
            onSubmit={submit}
            className="bg-white rounded-2xl shadow-xl p-8 space-y-6"
        >

            <div>
                <label className="font-semibold">Titre</label>

                <input
                    type="text"
                    value={data.title}
                    onChange={(e) => setData("title", e.target.value)}
                    className="w-full border rounded-xl p-3 mt-2"
                />

                {errors.title && (
                    <p className="text-red-500">{errors.title}</p>
                )}
            </div>

            <div>
                <label className="font-semibold">Sous-titre</label>

                <input
                    type="text"
                    value={data.subtitle}
                    onChange={(e) => setData("subtitle", e.target.value)}
                    className="w-full border rounded-xl p-3 mt-2"
                />
            </div>

            <div>
                <label className="font-semibold">Description</label>

                <textarea
                    rows="6"
                    value={data.description}
                    onChange={(e) => setData("description", e.target.value)}
                    className="w-full border rounded-xl p-3 mt-2"
                />
            </div>

            <div className="grid md:grid-cols-2 gap-4">

                <div>
                    <label>Date</label>

                    <input
                        type="date"
                        value={data.event_date}
                        onChange={(e) => setData("event_date", e.target.value)}
                        className="w-full border rounded-xl p-3 mt-2"
                    />
                </div>

                <div>
                    <label>Heure</label>

                    <input
                        type="time"
                        value={data.event_time}
                        onChange={(e) => setData("event_time", e.target.value)}
                        className="w-full border rounded-xl p-3 mt-2"
                    />
                </div>

            </div>

            <div>

                <label>DJ</label>

                <input
                    type="text"
                    value={data.dj}
                    onChange={(e) => setData("dj", e.target.value)}
                    className="w-full border rounded-xl p-3 mt-2"
                />

            </div>

            <div>

                <label>Image principale</label>

                <input
                    type="file"
                    onChange={(e) =>
                        setData("cover_image", e.target.files[0])
                    }
                    className="w-full border rounded-xl p-3 mt-2"
                />

            </div>

            <div className="flex items-center gap-3">

                <input
                    type="checkbox"
                    checked={data.published}
                    onChange={(e) =>
                        setData("published", e.target.checked)
                    }
                />

                <span>Publier la soirée</span>

            </div>

            <button
                disabled={processing}
                className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-xl"
            >
                {party ? "Modifier" : "Créer"}
            </button>

        </form>
    );
}