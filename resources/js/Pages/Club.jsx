import Navbar from '../Components/Navbar';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

export default function Club() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);

    const events = [
  {
    id: 1,
    title: "Opening Foam Party",
    image: "/images/Opening-Foam-Party.jpg",
    description:
      "Merci d'avoir participé à notre incroyable Opening Foam Party !",
    gallery: [
      "/images/Opening-Foam-Party.jpg",
      "/images/Opening-Foam-Party-2.jpg",
      "/images/Opening-Foam-Party-3.jpg",
    ],
  },

  {
    id: 2,
    title: "Shatta Party",
    image: "/images/Shatta-Party.jpg",
    description:
      "Une soirée 100% shatta avec une ambiance caribéenne.",
    gallery: [
      "/images/Shatta-Party.jpg",
      "/images/Shatta-Party-2.jpg",
      "/images/Shatta-Party-3.jpg",
    ],
  },
  {
    id: 3,
    title: "Glam's party",
    image: "/images/Glam's-party.jpg",
    description:
      "Une soirée élégante avec une ambiance glamour.",
    gallery: [
      "/images/Glam's-party.jpg",
      "/images/Glam's-party-2.jpg",
      "/images/Glam's-party-3.jpg",
    ],
  },

  {
    id: 4,
    title: "House Party",
    image: "/images/House-Party.jpg",
    description:
      "Une soirée 100% shatta avec une ambiance caribéenne.",
    gallery: [
      "/images/House-Party.jpg",
      "/images/House-Party-2.jpg",
      "/images/House-Party-3.jpg",
    ],
  },
];

    return (
       <>
            <header>
                <Navbar />
            </header>
            <main className= "max-w-7xl mx-auto min-h-screen bg-gradient-to-b from-red-100 via-orange-200 to-purple-300">
                <section className="h-70vh bg-cover bg-center text-white bg-gradient to-b from-black/30 via-black/40 to-black/60">
                    <h1 className="text-5xl md:text-8xl font-extrabold text-center bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-700 bg-clip-text text-transparent 
                           drop-shadow tracking-wide ">Fyahh Club </h1>
                        <h2 className="text-3xl md:text-4xl font-light text-center text-black mb-8">Vivez des soirées d'antologies sur Second Life</h2>
                </section>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-4 md:px-8 lg:px-16 py-12">
                        <div className="lg:col-span-2">
                            <img src="/images/Fyahh-club.png" alt="Fyahh club" className="w-full h-auto rounded-2xl shadow-lg mb-6" />
                            <p className="text-lg text-gray-700 mb-6">
                                   Notre club Fyahh sous l'empreinte de la Jamaique, met a dispotion plusieurs type de soirées musicales dans Second Life. </p>
                            <p className="text-lg text-gray-700 mb-6">
                                      Nous proposons des soirées animées par des DJs talentueux, des performances en direct et des événements thématiques pour tous les goûts.
                            </p>
                            <p className="text-lg text-gray-700">
                                Que vous soyez amateur de musique électronique, de hip-hop, de reggae ou d'autres genres, notre club offre une expérience immersive et divertissante.
                            </p>
                        </div>
                    </div>
                       
                       <section className="py-12 px-4 md:px-8 lg:px-16">
                           <h2 className="text-3xl md:text-4xl font-bold text-cyan-700 mb-6 max-w-5xl mx-auto leading-8">À propos de notre Club</h2>
                           <p className="text-lg text-gray-700 mb-6">
                               Le Fyahh Club est un lieu de rencontre virtuel où les passionnés de musique et de danse peuvent se retrouver pour partager des moments inoubliables.   
                           </p>
                           <p className="text-lg text-gray-700 mb-6">
                               Si vous êtes Dj et que vous recherchez un club, nous pouvons vous prendre pour réaliser vos futur soirées Second Life. N'hésitez pas à nous contacter pour plus d'informations sur les opportunités de collaboration.
                           </p>
                           <p className="text-lg text-gray-700">
                               Venez nous rendre visite et laissez-vous emporter par l'aventure Clubbing du Fyahh Club !
                           </p>
                       </section>
                       <section className="grid grid-cols-3 lg:grid-cols-2 gap-8 px-4 md:px-8 lg:px-16 py-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-cyan-700 mb-6 col-span-full">Nos soirées</h1>
                    {events.map((event) => (
                    <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100">

    <img
        src={event.image}
        alt={event.title}
        className="w-full h-auto object-contain"
    />

    <div className="p-6">

        <h2 className="text-2xl font-bold text-cyan-700 mb-3">
            {event.title}
        </h2>

        <p className="text-gray-600 leading-7 mb-6">
            {event.description}
        </p>

        <button
            onClick={() => setSelectedEvent(event)}
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-xl font-semibold hover:scale-105 hover:shadow-lg transition duration-300"
        >
            Voir les détails
        </button>

    </div>

</div>
                    ))}
                    </section>
                </main>

                {selectedEvent && (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">

        <div className="relative w-full max-w-5xl rounded-3xl bg-white shadow-2xl overflow-hidden animate-fade">

            {/* Bouton fermer */}
            <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-red-500 text-white hover:bg-red-600 transition duration-300 text-xl font-bold"
            >
                ✕
            </button>

            <div className="p-8">

                <h2 className="text-4xl font-bold text-cyan-700 mb-4">
                    {selectedEvent.title}
                </h2>

                <p className="text-gray-600 leading-8 mb-8">
                    {selectedEvent.description}
                </p>

                <Swiper
                    spaceBetween={20}
                    slidesPerView={1}
                    className="rounded-2xl overflow-hidden"
                >
                    {selectedEvent.gallery.map((image) => (
                        <SwiperSlide key={image}>
                            <img
                                src={image}
                                className="w-full max-h-[70vh] object-contain rounded-2xl bg-black"
                                alt={selectedEvent.title}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="flex justify-end mt-8">
                    <button
                        onClick={() => setSelectedEvent(null)}
                        className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-xl font-semibold transition duration-300"
                    >
                        Fermer
                    </button>
                </div>

            </div>
        </div>

    </div>
)}
                <footer className="bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-700 text-white py-6 text-center">
                    <p>&copy; 2023 ThaMad Splash. Tous droits réservés.</p>
                </footer>
            </>
        );
        
}

