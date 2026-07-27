export default function Footer() {
    return (
        <footer className="mt-24 bg-slate-900 text-slate-300">

            <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-3">

                <div>

                    <h2 className="text-2xl font-black text-white">
                        THAMAD SPLASH
                    </h2>

                    <p className="mt-4 leading-7">
                        Parc aquatique virtuel proposant attractions,
                        activités, événements, formations et locations.
                    </p>

                </div>

                <div>

                    <h3 className="mb-4 text-lg font-semibold text-white">
                        Navigation
                    </h3>

                    <ul className="space-y-3">

                        <li>Accueil</li>
                        <li>Attractions</li>
                        <li>Activités</li>
                        <li>Tarifs</li>
                        <li>Locations</li>

                    </ul>

                </div>

                <div>

                    <h3 className="mb-4 text-lg font-semibold text-white">
                        Contact
                    </h3>

                    <p>Second Life</p>

                    <p>Thamad Splash</p>

                    <p>support@thamadsplash.com</p>

                </div>

            </div>

            <div className="border-t border-slate-800 py-6 text-center text-sm">

                © {new Date().getFullYear()} Thamad Splash - Tous droits réservés.

            </div>

        </footer>
    );
}