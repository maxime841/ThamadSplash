
import {Link} from '@inertiajs/react'; 
export default function Navbar() {
    return (
    <nav className="bg-slate-900 hover:text-cyan-400 text-white py-4 px-8 flex items-center  h-16">
        <ul className="flex space-x-4 flex items-center gap-6">
            <li><img src= "Images/ThamadSplash accueil.png" alt="Logo" className="h-10 w-10 object-cover: rounded-full" /></li>
            <li><Link href="/" className="text-2xl hover:underline">Accueil</Link></li>
            <li><Link href="/parc" className="text-2xl hover:underline">Parc Aquatique</Link></li>
            <li><Link href="/school" className="text-2xl hover:underline">Ecole</Link></li>
            <li><Link href="/club" className="text-2xl hover:underline">Club</Link></li>
            <li><Link href="/rent" className="text-2xl hover:underline">Location</Link></li>
            <li><Link href="/activities" className="text-2xl hover:underline">Activités</Link></li>
            <li><Link href="/contact" className="text-2xl hover:underline">Contact</Link></li>
        </ul>
    </nav>
    )
}