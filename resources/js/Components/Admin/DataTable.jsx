export default function DataTable({
    headers = [],
    children,
}) {
    return (
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

            <table className="min-w-full">

                <thead className="bg-slate-50">
                    <tr>
                        {headers.map((header) => (
                            <th
                                key={header}
                                className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-500"
                            >
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>

                <tbody className="divide-y divide-slate-100">
                    {children}
                </tbody>

            </table>

        </div>
    );
}
