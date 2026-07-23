import { useRef, useState } from "react";

export default function ImageUploader({
    label,
    preview,
    onChange,
    error,
}) {
    const inputRef = useRef();
    const [dragActive, setDragActive] = useState(false);

    return (
        <div className="space-y-3">

            <label className="block text-sm font-semibold text-gray-700">
                {label}
            </label>

            <div
                onDragEnter={(e) => {
                e.preventDefault();
                setDragActive(true);
                }}

                onDragOver={(e) => {
                e.preventDefault();
                setDragActive(true);
                }}

                onDragLeave={(e) => {
                e.preventDefault();
                setDragActive(false);
                }}

                onDrop={(e) => {
                e.preventDefault();
                setDragActive(false);

                const file = e.dataTransfer.files[0];

                if (!file) return;

                onChange({
                    target: {
                    files: [file],
            },
        });
    }}
                onClick={() => inputRef.current.click()}
                className={`group cursor-pointer rounded-2xl border-2 border-dashed p-8 transition
${
    dragActive
        ? "border-cyan-500 bg-cyan-100"
        : "border-gray-300 bg-gray-50 hover:border-cyan-500 hover:bg-cyan-50"
}`}
            >

                {preview ? (

                    <img
                        src={preview}
                        alt="Aperçu"
                        className="mx-auto h-64 rounded-xl object-cover shadow-lg"
                    />

                ) : (

                    <div className="text-center">

                        <div className="text-6xl mb-4 transition group-hover:scale-110">
                            📷
                        </div>

                        <h3 className="text-lg font-semibold text-gray-700">
                            Déposez votre image ici
                        </h3>

                        <p className="mt-2 text-gray-500">
                            ou cliquez pour la sélectionner
                        </p>

                        <p className="mt-4 text-sm text-gray-400">
                            JPG • PNG • WEBP • 2 Mo maximum
                        </p>

                    </div>

                )}

                <input
                    ref={inputRef}
                    type="file"
                    accept="image/*"
                    hidden
                    onChange={onChange}
                />

            </div>

            {error && (
                <p className="text-sm text-red-600">
                    {error}
                </p>
            )}

        </div>
    );
}