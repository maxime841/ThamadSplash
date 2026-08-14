import { useForm } from "@inertiajs/react";
import { route } from "../../../lib/route";
import { useState } from "react";

import InputField from "../../../Components/Admin/Forms/InputField";
import TextAreaField from "../../../Components/Admin/Forms/TextAreaField";
import ImageUploader from "../../../Components/Admin/Forms/ImageUploader";
import PrimaryButton from "../../../Components/Admin/Button/PrimaryButton";

export default function AttractionForm({ attraction = null }) {

    const { data, setData, post, put, processing, errors } = useForm({
        title: attraction?.title || "",
        subtitle: attraction?.subtitle || "",
        description: attraction?.description || "",
        category: attraction?.category || "",
        min_age: attraction?.min_age || "",
        min_height: attraction?.min_height || "",
        sort_order: attraction?.sort_order || 0,
        cover_image: null,
        published: attraction?.published ?? false,
    });

    const [preview, setPreview] = useState(
        attraction?.cover_image
            ? `/storage/${attraction.cover_image}`
            : null
    );

    function submit(e) {
        e.preventDefault();

        if (attraction) {
            put(route("admin.attractions.update", attraction.id), {
    forceFormData: true,
});
        } else {
           post(route("admin.attractions.store"), {
                forceFormData: true,
            });
        }
    }

    return (
        <form
            onSubmit={submit}
            className="space-y-8 rounded-2xl bg-white p-8 shadow-xl"
        >

            <InputField
                label="Nom de l'attraction"
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

            <TextAreaField
                label="Description"
                name="description"
                value={data.description}
                onChange={(e) => setData("description", e.target.value)}
                error={errors.description}
            />

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

                <InputField
                    label="Catégorie"
                    name="category"
                    value={data.category}
                    onChange={(e) => setData("category", e.target.value)}
                    error={errors.category}
                    placeholder="Aquatique, Sensations..."
                />

                <InputField
                    label="Ordre d'affichage"
                    name="sort_order"
                    type="number"
                    value={data.sort_order}
                    onChange={(e) => setData("sort_order", e.target.value)}
                    error={errors.sort_order}
                />

                <InputField
                    label="Âge minimum"
                    name="min_age"
                    type="number"
                    value={data.min_age}
                    onChange={(e) => setData("min_age", e.target.value)}
                    error={errors.min_age}
                />

                <InputField
                    label="Taille minimum (cm)"
                    name="min_height"
                    type="number"
                    value={data.min_height}
                    onChange={(e) => setData("min_height", e.target.value)}
                    error={errors.min_height}
                />

            </div>

            <ImageUploader
                label="Image principale"
                preview={preview}
                error={errors.cover_image}
                onChange={(e) => {
                    const file = e.target.files[0];

                    if (!file) return;

                    setData("cover_image", file);
                    setPreview(URL.createObjectURL(file));
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

                <span>Publier cette attraction</span>
            </label>

            <PrimaryButton
                type="submit"
                disabled={processing}
            >
                {attraction ? "Mettre à jour" : "Créer l'attraction"}
            </PrimaryButton>

        </form>
    );
}
