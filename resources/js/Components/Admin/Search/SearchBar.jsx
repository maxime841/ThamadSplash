import { Search } from "lucide-react";

export default function SearchBar({
    value,
    onChange,
    placeholder = "Rechercher...",
}) {
    return (
        <div className="relative w-full max-w-md">

            <Search
                size={18}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
                type="text"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="
                    h-12
                    w-full
                    rounded-xl
                    border
                    border-slate-200
                    bg-white
                    pl-11
                    pr-4
                    text-sm
                    text-slate-700
                    placeholder:text-slate-400
                    shadow-sm
                    transition-all
                    duration-200
                    focus:border-cyan-500
                    focus:outline-none
                    focus:ring-4
                    focus:ring-cyan-100
                "
            />

        </div>
    );
}
