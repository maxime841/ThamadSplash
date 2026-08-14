import { Link } from "@inertiajs/react";

export default function Breadcrumb({ items = [] }) {
    return (
        <nav className="mb-4 flex items-center gap-2 text-sm text-slate-500">
            {items.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                    {index > 0 && <span>/</span>}

                    {item.href ? (
                        <Link
                            href={item.href}
                            className="transition hover:text-cyan-600"
                        >
                            {item.label}
                        </Link>
                    ) : (
                        <span className="font-medium text-slate-700">
                            {item.label}
                        </span>
                    )}
                </div>
            ))}
        </nav>
    );
}
