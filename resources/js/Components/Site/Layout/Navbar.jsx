import { Link, usePage } from "@inertiajs/react";
import { Menu } from "lucide-react";
import { useState } from "react";

import NavLink from "./NavLink";
import MobileMenu from "./MobileMenu";

export default function Navbar() {

    const { url } = usePage();

    const [open, setOpen] = useState(false);

    const navigation = [

        {
            label: "Accueil",
            href: "/",
        },

        {
            label: "Attractions",
            href: "/attractions",
        },

        {
            label: "Activités",
            href: "/activities",
        },

        {
            label: "Tarifs",
            href: "/prices",
        },

        {
            label: "Locations",
            href: "/rentals",
        },

        {
            label: "École",
            href: "/school",
        },

        {
            label: "Contact",
            href: "/contact",
        },

    ];

    return (

        <>

            <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">

                <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

                    <Link
                        href="/"
                        className="text-3xl font-black text-cyan-600"
                    >
                        THAMAD SPLASH
                    </Link>

                    <nav className="hidden items-center gap-8 lg:flex">

                        {navigation.map((item) => (

                            <NavLink
                                key={item.href}
                                href={item.href}
                                active={url === item.href}
                            >
                                {item.label}
                            </NavLink>

                        ))}

                    </nav>

                    <button
                        className="lg:hidden"
                        onClick={() => setOpen(true)}
                    >
                        <Menu />
                    </button>

                </div>

            </header>

            <MobileMenu
                open={open}
                setOpen={setOpen}
                navigation={navigation}
            />

        </>

    );

}