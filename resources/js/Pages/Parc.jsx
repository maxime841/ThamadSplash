import Navbar from '../Components/Navbar';

export default function Parc() {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main className= "max-w-7xl mx-auto min-h-screen bg-gradient-to-b from-cyan-100 via-sky-200 to-blue-300">
                <section className="h-70vh bg-cover bg-center text-white bg-gradient to-b from-black/30 via-black/40 to-black/60">
                    <h1 className="text-5xl md:text-8xl font-extrabold text-center bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-700 bg-clip-text text-transparent 
                    drop-shadow tracking-wide ">Parc aquatique Thamad Splash </h1>
                    <h2 className="text-3xl md:text-4xl font-light text-center text-black mb-8">Vivez l'aventure aquatique</h2>
                </section>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-4 md:px-8 lg:px-16 py-12">
                    <div className="lg:col-span-2">
                        <img src="/images/Parc_aquatique_ThamadSplash.png" alt="Parc aquatique Thamad Splash" className="w-full h-auto rounded-2xl shadow-lg mb-6" />
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
                    <h2 className="text-3xl md:text-4xl font-bold text-cyan-700 mb-6 max-w-5xl mx-auto leading-8">À propos de notre parc aquatique</h2>
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
                <section className="grid grid-cols-3 lg:grid-cols-2 gap-8 px-4 md:px-8 lg:px-16 py-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-cyan-700 mb-6 col-span-full">Nos attractions</h1>
                    <card className="rounded-2xl shadow-lg p-6 bg-white hover:shadow-2xl transition duration-300 border-top-4 border-blue-500">
                        <h2 className="text-3xl font-bold mb-4 text-cyan-700">Toboggan Hyperslide</h2>
                        <img src="/images/Toboggan-Hyperslide.png" alt="Toboggan hyperslide" className="w-full h-auto rounded-2xl mb-4" />
                         <p className="text-gray-600 leading-7">Hyperslide: Faites le plein de sensations fortes en dévalant un toboggan à grande vitesse.</p>
                    </card>
                    <card className="rounded-2xl shadow-lg p-6 bg-white hover:shadow-2xl transition duration-300 border-top-4 border-blue-500">
                        <h2 className="text-3xl font-bold mb-4 text-cyan-700">Adventure Pool</h2>
                        <img src="/images/Adventure-pool.png" alt="Adventure pool" className="w-full h-auto rounded-2xl mb-4" />
                         <p className="text-gray-600 leading-7">Venez vous aventurez dans la piscine adventure avec cascade, toboggan inclus et petits coins secrets</p>
                    </card>
                    <card className="rounded-2xl shadow-lg p-6 bg-white hover:shadow-2xl transition duration-300 border-top-4 border-blue-500">
                        <h2 className="text-3xl font-bold mb-4 text-cyan-700">Piscine Spa Adulte</h2>
                        <img src="/images/Pool-Spa-Adult.png" alt="Pool spa adult" className="w-full h-auto rounded-2xl mb-4" />
                         <p className="text-gray-600 leading-7">Venez vous détendre pendant que vos enfants ou amis s'amusent dans notre parc aquatique.</p>
                    </card>
                    <card className="rounded-2xl shadow-lg p-6 bg-white hover:shadow-2xl transition duration-300 border-top-4 border-blue-500">
                        <h2 className="text-3xl font-bold mb-4 text-cyan-700">Slider</h2>
                        <img src="/images/Slider.png" alt="Slider" className="w-full h-auto rounded-2xl mb-4" />
                         <p className="text-gray-600 leading-7">Venez vous amuser sur notre slider avec des glissades rapides.</p>
                    </card>
                    <card className="rounded-2xl shadow-lg p-6 bg-white hover:shadow-2xl transition duration-300 border-top-4 border-blue-500">
                        <h2 className="text-3xl font-bold mb-4 text-cyan-700">Espace jeux et détente</h2>
                        <img src="/images/Games-and-chill.png" alt="Espace jeux et détente" className="w-full h-auto rounded-2xl mb-4" />
                         <p className="text-gray-600 leading-7">Venez vous amuser avec nos mini jeux et ainsi que vous détendre avec notre coin bar et spa.</p>
                    </card>
                    <card className="rounded-2xl shadow-lg p-6 bg-white hover:shadow-2xl transition duration-300 border-top-4 border-blue-500">
                        <h2 className="text-3xl font-bold mb-4 text-cyan-700">Capitaine Nemo</h2>
                        <img src="/images/Captain-Nemo.png" alt="Attraction capitaine nemo" className="w-full h-auto rounded-2xl mb-4" />
                         <p className="text-gray-600 leading-7">Venez explorez le monde du captaie Nemo. ainsi que d'explorez nos fonds sous marins.</p>
                    </card>
                    <card className="rounded-2xl shadow-lg p-6 bg-white hover:shadow-2xl transition duration-300 border-top-4 border-blue-500">
                        <h2 className="text-3xl font-bold mb-4 text-cyan-700">Piscine attractive</h2>
                        <img src="/images/Pool-attract.png" alt="piscine attractive" className="w-full h-auto rounded-2xl mb-4" />
                         <p className="text-gray-600 leading-7">Venez vous amusez dans cette piscine avec toboggan plongeoir et diverse animations.</p>
                    </card>
                    <card className="rounded-2xl shadow-lg p-6 bg-white hover:shadow-2xl transition duration-300 border-top-4 border-blue-500">
                        <h2 className="text-3xl font-bold mb-4 text-cyan-700">Roller coaster</h2>
                        <img src="/images/Roller-coaster.png" alt="Roller coaster" className="w-full h-auto rounded-2xl mb-4" />
                         <p className="text-gray-600 leading-7">Sensations fortes garanties avec notre grand huit aquatique. plus piscine avec activités.</p>
                    </card>
                    <card className="rounded-2xl shadow-lg p-6 bg-white hover:shadow-2xl transition duration-300 border-top-4 border-blue-500">
                        <h2 className="text-3xl font-bold mb-4 text-cyan-700">Tyrolienne</h2>
                        <img src="/images/Tyrolienne.png" alt="Tyrolienne" className="w-full h-auto rounded-2xl mb-4" />
                         <p className="text-gray-600 leading-7">Venez vous balancer en toute sécurité sur notre tyrolienne.</p>
                    </card>
                    <card className="rounded-2xl shadow-lg p-6 bg-white hover:shadow-2xl transition duration-300 border-top-4 border-blue-500">
                        <h2 className="text-3xl font-bold mb-4 text-cyan-700">Piscine enfants et Adultes</h2>
                        <img src="/images/Pool-child-with-adult.png" alt="Piscine enfants et adultes" className="w-full h-auto rounded-2xl mb-4" />
                         <p className="text-gray-600 leading-7">Emmenez vos enfants zooby lullabee dans cette piscine specialement conçue pour eux.</p>
                    </card>
                </section>
            </main>
            <footer className="bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-700 text-white py-6 text-center">
        <p>&copy; 2023 ThaMad Splash. Tous droits réservés.</p>
    </footer>
        </>
        
    );
}