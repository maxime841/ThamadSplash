export default function Grid({ children }) {
    return (
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {children}
        </div>
    );
}
