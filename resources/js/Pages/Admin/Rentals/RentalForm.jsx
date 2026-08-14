import { useForm } from "@inertiajs/react";
import { route } from "../../../lib/route";
import { useState } from "react";

import InputField from "../../../Components/Admin/Forms/InputField";
import TextareaField from "../../../Components/Admin/Forms/TextareaField";
import ImageUploader from "../../../Components/Admin/Forms/ImageUploader";
import PrimaryButton from "../../../Components/Admin/Button/PrimaryButton";

export default function RentalForm({ rental = null }) {

    const { data, setData, post, put, processing, errors } = useForm({
        title: rental?.title || "",
        subtitle: rental?.subtitle || "",
        description: rental?.description || "",
        category: rental?.category || "",

        price: rental?.price || "",

        prims_allowed: rental?.prims_allowed || 0,
        prims_remaining: rental?.prims_remaining || 0,

        rental_duration: rental?.rental_duration || 60,
        rental_time_remaining: rental?.rental_time_remaining || 0,

        status: rental?.status || "available",

        sort_order: rental?.sort_order || 0,

        cover_image: null,

        published: rental?.published ?? false,
    });

    const [preview, setPreview] = useState(
        rental?.cover_image
            ? `/storage/${rental.cover_image}`
            : null
    );

    function submit(e) {
        e.preventDefault();

        if (rental) {
            put(route("admin.rentals.update", rental.slug), {
                forceFormData: true,
            });
        } else {
            post(route("admin.rentals.store"), {
                forceFormData: true,
            });
        }
    }

    return (

        <form
            onSubmit={submit}
            className="bg-white rounded-2xl shadow-xl p-8 space-y-8"
        >

            <InputField
                label="Titre"
                name="title"
                required
                value={data.title}
                onChange={(e) => setData("title", e.target.value)}
                error={errors.title}
            />

            <InputField
                label="Sous-titre"
                name="subtitle"
                value={data.subtitle}
                onChange={(e) => setData("subtitle", e.target.value)}
                error={errors.subtitle}
            />

            <TextareaField
                label="Description"
                name="description"
                value={data.description}
                onChange={(e) => setData("description", e.target.value)}
                error={errors.description}
            />

            <InputField
                label="Catégorie"
                name="category"
                value={data.category}
                onChange={(e) => setData("category", e.target.value)}
                error={errors.category}
            />

            <div className="grid md:grid-cols-2 gap-6">

                <InputField
                    label="Prix (€)"
                    name="price"
                    type="number"
                    value={data.price}
                    onChange={(e) => setData("price", e.target.value)}
                    error={errors.price}
                />

                <InputField
                    label="Ordre"
                    name="sort_order"
                    type="number"
                    value={data.sort_order}
                    onChange={(e) => setData("sort_order", e.target.value)}
                    error={errors.sort_order}
                />

            </div>

            <div className="grid md:grid-cols-2 gap-6">

                <InputField
                    label="Prims autorisés"
                    name="prims_allowed"
                    type="number"
                    value={data.prims_allowed}
                    onChange={(e) =>
                        setData("prims_allowed", e.target.value)
                    }
                    error={errors.prims_allowed}
                />

                <InputField
                    label="Prims restants"
                    name="prims_remaining"
                    type="number"
                    value={data.prims_remaining}
                    onChange={(e) =>
                        setData("prims_remaining", e.target.value)
                    }
                    error={errors.prims_remaining}
                />

            </div>

            <div className="grid md:grid-cols-2 gap-6">

                <InputField
                    label="Durée de location (minutes)"
                    name="rental_duration"
                    type="number"
                    value={data.rental_duration}
                    onChange={(e) =>
                        setData("rental_duration", e.target.value)
                    }
                    error={errors.rental_duration}
                />

                <InputField
                    label="Temps restant (minutes)"
                    name="rental_time_remaining"
                    type="number"
                    value={data.rental_time_remaining}
                    onChange={(e) =>
                        setData("rental_time_remaining", e.target.value)
                    }
                    error={errors.rental_time_remaining}
                />

            </div>

            <div>

                <label className="block mb-2 text-sm font-semibold text-gray-700">
                    Statut
                </label>

                <select
                    value={data.status}
                    onChange={(e) => setData("status", e.target.value)}
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-200"
                >
                    <option value="available">
                        Disponible
                    </option>

                    <option value="pending">
                        En attente
                    </option>

                    <option value="rented">
                        Loué
                    </option>

                    <option value="maintenance">
                        Maintenance
                    </option>
                </select>

            </div>

            <ImageUploader
                label="Image"
                preview={preview}
                error={errors.cover_image}
                onChange={(e) => {

                    const file = e.target.files[0];

                    if (!file) return;

                    setData("cover_image", file);

                    setPreview(
                        URL.createObjectURL(file)
                    );

                }}
            />

            <label className="flex items-center gap-3">

                <input
                    type="checkbox"
                    checked={data.published}
                    onChange={(e) =>
                        setData("published", e.target.checked)
                    }
                />

                <span>Publier cette location</span>

            </label>

            <PrimaryButton
                type="submit"
                disabled={processing}
            >
                {rental
                    ? "Mettre à jour"
                    : "Créer la location"}
            </PrimaryButton>

        </form>

    );
}