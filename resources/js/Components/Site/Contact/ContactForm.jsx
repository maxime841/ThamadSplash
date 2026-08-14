import { useForm } from "@inertiajs/react";
import { route } from "../../../lib/route";

export default function ContactForm() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("contact.store"), {
            onSuccess: () => reset(),
        });
    };

    return (
        <div className="rounded-3xl bg-white p-10 shadow-xl">

            <h2 className="mb-8 text-3xl font-bold">
                Envoyez-nous un message
            </h2>

            <form onSubmit={submit} className="space-y-6">

                <div>
                    <label className="mb-2 block font-semibold">
                        Nom
                    </label>

                    <input
                        type="text"
                        value={data.name}
                        onChange={(e) =>
                            setData("name", e.target.value)
                        }
                        className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-cyan-500 focus:outline-none"
                    />

                    {errors.name && (
                        <p className="mt-1 text-sm text-red-500">
                            {errors.name}
                        </p>
                    )}
                </div>

                <div>
                    <label className="mb-2 block font-semibold">
                        Email
                    </label>

                    <input
                        type="email"
                        value={data.email}
                        onChange={(e) =>
                            setData("email", e.target.value)
                        }
                        className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-cyan-500 focus:outline-none"
                    />

                    {errors.email && (
                        <p className="mt-1 text-sm text-red-500">
                            {errors.email}
                        </p>
                    )}
                </div>

                <div>
                    <label className="mb-2 block font-semibold">
                        Téléphone
                    </label>

                    <input
                        type="text"
                        value={data.phone}
                        onChange={(e) =>
                            setData("phone", e.target.value)
                        }
                        className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-cyan-500 focus:outline-none"
                    />

                    {errors.phone && (
                        <p className="mt-1 text-sm text-red-500">
                            {errors.phone}
                        </p>
                    )}
                </div>

                <div>
                    <label className="mb-2 block font-semibold">
                        Sujet
                    </label>

                    <input
                        type="text"
                        value={data.subject}
                        onChange={(e) =>
                            setData("subject", e.target.value)
                        }
                        className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-cyan-500 focus:outline-none"
                    />

                    {errors.subject && (
                        <p className="mt-1 text-sm text-red-500">
                            {errors.subject}
                        </p>
                    )}
                </div>

                <div>
                    <label className="mb-2 block font-semibold">
                        Message
                    </label>

                    <textarea
                        rows="6"
                        value={data.message}
                        onChange={(e) =>
                            setData("message", e.target.value)
                        }
                        className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-cyan-500 focus:outline-none"
                    />

                    {errors.message && (
                        <p className="mt-1 text-sm text-red-500">
                            {errors.message}
                        </p>
                    )}
                </div>

                <button
                    type="submit"
                    disabled={processing}
                    className="w-full rounded-xl bg-cyan-600 py-4 font-semibold text-white transition hover:bg-cyan-700 disabled:opacity-50"
                >
                    {processing ? "Envoi..." : "Envoyer le message"}
                </button>

            </form>

        </div>
    );
}
