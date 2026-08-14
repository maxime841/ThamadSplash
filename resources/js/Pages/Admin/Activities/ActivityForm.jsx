import { useForm } from "@inertiajs/react";
import { route } from "../../../lib/route";
import { useState } from "react";

import InputField from "../../../Components/Admin/Forms/InputField";
import TextareaField from "../../../Components/Admin/Forms/TextareaField";
import ImageUploader from "../../../Components/Admin/Forms/ImageUploader";
import PrimaryButton from "../../../Components/Admin/Button/PrimaryButton";

export default function ActivityForm({ activity = null }) {

    const { data, setData, post, put, processing, errors } = useForm({
        title: activity?.title || "",
        subtitle: activity?.subtitle || "",
        description: activity?.description || "",
        category: activity?.category || "",
        sort_order: activity?.sort_order || 0,
        cover_image: null,
        published: activity?.published ?? false,
    });

    const [preview, setPreview] = useState(
        activity?.cover_image
            ? `/storage/${activity.cover_image}`
            : null
    );

    function submit(e) {
        e.preventDefault();

        if (activity) {
            put(route("admin.activities.update", activity.slug), {
                forceFormData: true,
            });
        } else {
            post(route("admin.activities.store"), {
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
                label="Nom de l'activité"
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

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

                <InputField
                    label="Catégorie"
                    name="category"
                    value={data.category}
                    onChange={(e) => setData("category", e.target.value)}
                    error={errors.category}
                    placeholder="Sportive, Aquatique, Enfant..."
                />

                <InputField
                    label="Ordre d'affichage"
                    name="sort_order"
                    type="number"
                    value={data.sort_order}
                    onChange={(e) => setData("sort_order", e.target.value)}
                    error={errors.sort_order}
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

                <span>Publier cette activité</span>

            </label>

            <PrimaryButton
                type="submit"
                disabled={processing}
            >
                {activity
                    ? "Mettre à jour"
                    : "Créer l'activité"}
            </PrimaryButton>

        </form>
    );
}