import Navbar from '../Components/Navbar';
import { Link } from '@inertiajs/react';

export default function Site() {

return (
    <>
    <header>
        <Navbar />
    </header>
    <main>
        <section className="banniere w-full text-white text-center py-10 bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-700">
            <h1 className="text-6xl font-bold mb-4">Bienvenue sur l'espace ThaMad Splash</h1>
            <p className="text-xl mb-8">Découvrez nos services et nos activitées pour un moment détente en famille, amis, ou couple.</p>
            <Link href="/site" className="bg-blue-500 text-white px-6 py-3 rounded-lg mt-4 hover:bg-blue-600 mb-8">
                    Réservez votre place
                </Link>
        </section>
        <section className="services py-10 bg-gradient-to-b from-white to-cyan-100">
            <div className="grid md:grid-cols-2 gap-14 px-12">
                <card className="rounded-2xl shadow-lg p-6 bg-white hover:shadow-2xl transition duration-300 border-top-4 border-blue-500">
                    <h2 className="text-3xl font-bold mb-4 text-cyan-700">Parc Aquatique</h2>
                    <p className="text-gray-600 leading-7">Venez vous amusez dans notre parc aquatique avec des toboggans, une piscine et bien plus encore !</p>
                </card>
                <card className="rounded-2xl shadow-lg p-6 bg-white hover:shadow-2xl transition duration-300 border-top-4 border-green-500">
                    <h2 className="text-3xl font-bold mb-4 text-green-700">Ecole</h2>
                    <p className="text-gray-600 leading-7">Ammenez vos enfants zooby Lullabee ou meme vos avatar enfant pour une experience d'education !</p>
                </card>
            </div>
            <div className="flex justify-center mt-12">
                <card className="rounded-2xl shadow-lg p-6 bg-white hover:shadow-2xl transition duration-300 border-top-4 border-orange-500">
                    <h2 className="text-3xl font-bold mb-4 text-orange-700">Activités</h2>
                    <p className="text-gray-600 leading-7">Participez à nos activités variées et amusantes pour un moment inoubliable en famille ou entre amis.</p>
                </card>
            </div>
        </section>
    </main>
    <footer className="bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-700 text-white py-6 text-center">
        <p>&copy; 2023 ThaMad Splash. Tous droits réservés.</p>
    </footer>
    </>
)
}