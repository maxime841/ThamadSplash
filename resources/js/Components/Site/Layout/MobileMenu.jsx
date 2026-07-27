import { Link } from "@inertiajs/react";
import { X } from "lucide-react";

export default function MobileMenu({
    open,
    setOpen,
    navigation,
}) {

    if (!open) return null;

    return (

        <div className="fixed inset-0 z-50 bg-black/40">

            <aside className="absolute right-0 h-full w-72 bg-white shadow-xl">

                <div className="flex items-center justify-between border-b p-6">

                    <h2 className="text-xl font-bold">

                        Menu

                    </h2>

                    <button
                        onClick={() => setOpen(false)}
                    >
                        <X />
                    </button>

                </div>

                <nav className="flex flex-col">

                    {navigation.map((item) => (

                        <Link
                            key={item.href}
                            href={item.href}
                            className="border-b px-6 py-4 hover:bg-slate-100"
                            onClick={() => setOpen(false)}
                        >
                            {item.label}
                        </Link>

                    ))}

                </nav>

            </aside>

        </div>

    );

}