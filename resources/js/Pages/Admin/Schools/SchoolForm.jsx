import { useForm } from "@inertiajs/react";
import { route } from "../../../lib/route";
import { useState } from "react";

import InputField from "../../../Components/Admin/Forms/InputField";
import TextAreaField from "../../../Components/Admin/Forms/TextAreaField";
import ImageUploader from "../../../Components/Admin/Forms/ImageUploader";
import PrimaryButton from "../../../Components/Admin/Button/PrimaryButton";

export default function SchoolForm({ school = null }) {

    const { data, setData, post, put, processing, errors } = useForm({
        title: school?.title || "",
        subtitle: school?.subtitle || "",
        description: school?.description || "",
        category: school?.category || "",
        price: school?.price || "",
        duration: school?.duration || "",
        capacity: school?.capacity || "",
        sort_order: school?.sort_order || 0,
        cover_image: null,
        published: school?.published ?? false,
    });

    const [preview, setPreview] = useState(
        school?.cover_image
            ? `/storage/${school.cover_image}`
            : null
    );

    function submit(e) {
        e.preventDefault();

        if (school) {
            put(route("admin.schools.update", school.slug), {
                forceFormData: true,
            });
        } else {
            post(route("admin.schools.store"), {
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

            <TextAreaField
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
                    label="Prix"
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
                    label="Durée"
                    name="duration"
                    value={data.duration}
                    onChange={(e) => setData("duration", e.target.value)}
                    error={errors.duration}
                />

                <InputField
                    label="Capacité"
                    name="capacity"
                    type="number"
                    value={data.capacity}
                    onChange={(e) => setData("capacity", e.target.value)}
                    error={errors.capacity}
                />

            </div>

            <ImageUploader
                label="Image"
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

                <span>Publier cette formation</span>

            </label>

            <PrimaryButton
                type="submit"
                disabled={processing}
            >
                {school
                    ? "Mettre à jour"
                    : "Créer la formation"}
            </PrimaryButton>

        </form>
    );
}
