import { Link } from "@inertiajs/react";

export default function NavLink({ href, children, active = false }) {
    return (
        <Link
            href={href}
            className={`relative font-medium transition
                ${
                    active
                        ? "text-cyan-600"
                        : "text-slate-700 hover:text-cyan-600"
                }`}
        >
            {children}

            {active && (
                <span className="absolute -bottom-2 left-0 h-0.5 w-full rounded bg-cyan-600" />
            )}
        </Link>
    );
}