import Navbar from '../Components/Navbar';
export default function Parc() {
    return (
        <body>
            <header>
                <Navbar />
            </header>
            <main className= "max-width-7xl mx-auto min-h-screen bg-gradient-to-b from-cyan-100 via-sky-200 to-blue-300">
                <section className="h-70vh bg-cover bg-center text-white bg-gradient to-b from-black/30 via-black/40 to-black/60">
                    <h1 className="text-5xl md:text-8xl font-extrabold text-center bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-700 bg-clip-text text-transparent 
                    drop-shadow tracking-wide ">Parc aquatique Thamad Splash </h1>
                    <h2 className="text-3xl md:text-4xl font-light text-center text-black mb-8">Vivez l'aventure aquatique</h2>
                </section>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-4 md:px-8 lg:px-16 py-12">
                    <div className="lg:col-span-2">
                        <img src="/images/parc.jpg" alt="Parc aquatique Thamad Splash" className="w-full h-auto rounded-2xl shadow-lg mb-6" />
                        <p className="text-lg text-gray-700 mb-6">
                            Le parc aquatique Thamad Splash est un lieu de divertissement idéal pour les familles, les amis et les amateurs de sensations fortes. 
                            Avec une variété d'attractions aquatiques, des toboggans palpitants aux piscines relaxantes, il y en a pour tous les goûts.
                        </p>
                        <p className="text-lg text-gray-700 mb-6">
                            Que vous souhaitiez vous amuser dans les vagues, glisser sur nos toboggans ou simplement vous détendre au soleil, notre parc aquatique offre une expérience inoubliable pour tous les visiteurs.
                        </p>
                        <p className="text-lg text-gray-700">
                            Nous nous engageons à offrir un environnement sûr et agréable, avec des installations modernes et un personnel amical pour garantir que chaque visiteur passe un moment mémorable.
                        </p>
                    </div>
                    <aside className="lg:sticky lg:top-6 h-fit bg-gradient-to-b from-amber-50 via-orange-100 to-stone-200 rounded-2xl shadow-xl p-6 border cyan-100">
                        <h1 className="text-2xl font-bold text-cyan-700 mb-6">Nos Tarifs</h1>
                        <div className="flex justify-between items-center py-3 border-b border-gray-200">
                            <span className="text-lg font-semibold text-gray-700">Ticket 1 jour</span>
                            <span className="text-lg font-semibold text-gray-900">10 ls</span>
                            <span className="text-lg font-semibold text-gray-700">Ticket 2 Jours</span>
                            <span className="text-lg font-semibold text-gray-900">20 ls</span>
                        </div>
                    </aside>
                </div>
                
                <section className="py-12 px-4 md:px-8 lg:px-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-cyan-700 mb-6">À propos de notre parc aquatique</h2>
                    <p className="text-lg text-gray-700 mb-6">
                        Bienvenue au parc aquatique Thamad Splash, où l'aventure et le plaisir se rencontrent ! 
                        Vous y trouverez une attraction de tobbogan aquatique, des piscines avec plongeon et animations comprises. Des sliders pour les enfants et des zones de détente pour les adultes.
                        De plus, vous avez une partie attraction roller coaster pour les amateurs de sensations fortes. avec piscine et trampolines inclut. 
                        Et pour finir une ballade sous l'eau pour découvrir les merveilles de la vie marine, ainsi que les amateurs du monde de némo et de la vie sous-marine.   
                    </p>
                    <p className="text-lg text-gray-700 mb-6">
                        Profitez de nos installations modernes, de notre personnel amical et de notre ambiance conviviale. 
                        Nous nous engageons à offrir une expérience sécurisée et agréable à tous nos visiteurs.
                    </p>
                    <p className="text-lg text-gray-700">
                        Venez nous rendre visite et laissez-vous emporter par l'aventure aquatique au parc Thamad Splash !
                    </p>
                </section>
            </main>
        </body>
        
    );
}