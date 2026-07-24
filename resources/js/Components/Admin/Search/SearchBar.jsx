import { Search } from "lucide-react";

export default function SearchBar({
    value,
    onChange,
    placeholder = "Rechercher...",
}) {
    return (
        <div className="relative max-w-md">
            <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
                type="text"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="w-full rounded-xl border border-gray-300 py-3 pl-10 pr-4 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-200"
            />
        </div>
    );
}