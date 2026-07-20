
import {Link} from '@inertiajs/react'; 
import {useState} from 'react';
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <nav className="bg-slate-900 hover:text-cyan-400 text-white py-4 px-8 flex items-center justify-between h-16">
                <ul className="hidden md:flex items-center gap-6">
                    <li><img src="Images/ThamadSplash accueil.png" alt="Logo" className="h-10 w-10 object-cover rounded-full" /></li>
                    <li><Link href="/" className="text-2xl hover:underline">Accueil</Link></li>
                    <li><Link href="/parc" className="text-2xl hover:underline">Parc Aquatique</Link></li>
                    <li><Link href="/school" className="text-2xl hover:underline">Ecole</Link></li>
                    <li><Link href="/club" className="text-2xl hover:underline">Club</Link></li>
                    <li><Link href="/rent" className="text-2xl hover:underline">Location</Link></li>
                    <li><Link href="/activities" className="text-2xl hover:underline">Activités</Link></li>
                    <li><Link href="/contact" className="text-2xl hover:underline">Contact</Link></li>
                </ul>

                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden group inline-flex w-12 h-12 text-slate-800 bg-white text-center items-center justify-center rounded shadow-[0_1px_0_theme(colors.slate.950/.04),0_1px_2px_theme(colors.slate.950/.12),inset_0_-2px_0_theme(colors.slate.950/.04)] hover:shadow-[0_1px_0_theme(colors.slate.950/.04),0_4px_8px_theme(colors.slate.950/.12),inset_0_-2px_0_theme(colors.slate.950/.04)] transition" aria-pressed="false">
                    <span className="sr-only">Menu</span><svg className="w-6 h-6 fill-current pointer-events-none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <rect className="origin-center -translate-y-[5px] translate-x-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-[[aria-pressed=true]]:translate-x-0 group-[[aria-pressed=true]]:translate-y-0 group-[[aria-pressed=true]]:rotate-[315deg]" y="7" width="9" height="2" rx="1"></rect>
                        <rect className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-[[aria-pressed=true]]:rotate-45" y="7" width="16" height="2" rx="1"></rect>
                        <rect className="origin-center translate-y-[5px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-[[aria-pressed=true]]:translate-y-0 group-[[aria-pressed=true]]:rotate-[135deg]" y="7" width="9" height="2" rx="1"></rect>
                    </svg>
                </button>
            </nav>
            {isOpen && (
                <div className="md:hidden">
                    <ul className="flex flex-col items-center gap-4 py-4">
                        <li><Link href="/" className="text-2xl hover:underline">Accueil</Link></li>
                        <li><Link href="/parc" className="text-2xl hover:underline">Parc Aquatique</Link></li>
                        <li><Link href="/school" className="text-2xl hover:underline">Ecole</Link></li>
                        <li><Link href="/club" className="text-2xl hover:underline">Club</Link></li>
                        <li><Link href="/rent" className="text-2xl hover:underline">Location</Link></li>
                        <li><Link href="/activities" className="text-2xl hover:underline">Activités</Link></li>
                        <li><Link href="/contact" className="text-2xl hover:underline">Contact</Link></li>
                    </ul>
                </div>
            )}
        </>
    );
}