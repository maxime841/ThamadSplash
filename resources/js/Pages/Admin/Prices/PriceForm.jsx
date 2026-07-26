import { useForm } from "@inertiajs/react";
import { route } from "../../../lib/route";
import { useState } from "react";

import InputField from "../../../Components/Admin/Forms/InputField";
import TextareaField from "../../../Components/Admin/Forms/TextareaField";
import ImageUploader from "../../../Components/Admin/Forms/ImageUploader";
import PrimaryButton from "../../../Components/Admin/Button/PrimaryButton";

export default function PriceForm({ price = null }) {

    const { data, setData, post, put, processing, errors } = useForm({
        title: price?.title || "",
        description: price?.description || "",
        price: price?.price || "",
        category: price?.category || "",
        sort_order: price?.sort_order || 0,
        cover_image: null,
        published: price?.published ?? false,
    });

    const [preview, setPreview] = useState(
        price?.cover_image
            ? `/storage/${price.cover_image}`
            : null
    );

    function submit(e) {
        e.preventDefault();

        if (price) {
            put(route("admin.prices.update", price.id), {
                forceFormData: true,
            });
        } else {
            post(route("admin.prices.store"), {
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
                label="Nom du tarif"
                name="title"
                required
                value={data.title}
                onChange={(e) => setData("title", e.target.value)}
                error={errors.title}
            />

            <TextareaField
                label="Description"
                name="description"
                value={data.description}
                onChange={(e) => setData("description", e.target.value)}
                error={errors.description}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <InputField
                    label="Prix (€)"
                    name="price"
                    type="number"
                    value={data.price}
                    onChange={(e) => setData("price", e.target.value)}
                    error={errors.price}
                    placeholder="Ex : 19.90"
                />

                <InputField
                    label="Catégorie"
                    name="category"
                    value={data.category}
                    onChange={(e) => setData("category", e.target.value)}
                    error={errors.category}
                    placeholder="Adulte, Enfant, Groupe..."
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

                <span>Publier ce tarif</span>

            </label>

            <PrimaryButton
                type="submit"
                disabled={processing}
            >
                {price
                    ? "Mettre à jour"
                    : "Créer le tarif"}
            </PrimaryButton>

        </form>
    );
}