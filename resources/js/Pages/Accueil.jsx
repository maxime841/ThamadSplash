import {Link} from '@inertiajs/react';
export default function Accueil() {
    return (
        <main className= "max-width-7xl mx-auto bg-slate-950 min-h-screen">
            <h1 className="text-6xl md:text-8xl font-extrabold text-center bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-700 bg-clip-text text-transparent 
            drop-shadow tracking-wide ">Bienvenue dans le parc aquatique Thamad Splash</h1>
            <img src="/images/ThamadSplash accueil.png" alt="Parc aquatique Thamad Splash" className="mx-auto rounded-lg shadow-lg mt-8" />
            <p className="text-center text-lg mt-8 text-slate-300">
                Nous sommes ravis de vous accueillir dans notre espace aquatique !
            </p>
            <div className="flex justify-center mt-8">
                <Link href="/site" className="bg-blue-500 text-white px-6 py-3 rounded-lg mt-4 hover:bg-blue-600 mb-8">
                    Visitez notre site
                </Link>
            </div>
        </main>
    );
}