export default function Gallery({ images = [] }) {

    if (!images.length) return null;

    return (

        <section className="py-20">

            <div className="mx-auto max-w-7xl px-6">

                <h2 className="mb-10 text-4xl font-black">
                    Galerie
                </h2>

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

                    {images.map((image, index) => (

                        <img
                            key={index}
                            src={`/storage/${image}`}
                            alt=""
                            className="aspect-video w-full rounded-2xl object-cover shadow-lg transition duration-300 hover:scale-105"
                        />

                    ))}

                </div>

            </div>

        </section>

    );

}