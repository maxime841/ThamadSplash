import ImageUploader from "./ImageUploader";

export default function PartyMedia({
    preview,
    setPreview,
    setData,
    errors,
}) {
    return (
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
    );
}