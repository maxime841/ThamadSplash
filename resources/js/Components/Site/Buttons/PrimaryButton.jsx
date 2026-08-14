import { Link } from "@inertiajs/react";

export default function PrimaryButton({
    href,
    children,
}) {
    return (
        <Link
            href={href}
            className="inline-flex items-center rounded-xl bg-cyan-600 px-7 py-3 text-white font-semibold transition hover:bg-cyan-700"
        >
            {children}
        </Link>
    );
}
