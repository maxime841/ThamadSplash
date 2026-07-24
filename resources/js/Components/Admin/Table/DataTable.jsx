export default function DataTable({
    headers = [],
    children,
}) {
    return (
        <div className="overflow-hidden rounded-2xl bg-white shadow">

            <table className="min-w-full divide-y divide-gray-200">

                <thead className="bg-gray-50">
                    <tr>
                        {headers.map((header) => (
                            <th
                                key={header}
                                className="px-6 py-4 text-left text-sm font-semibold text-gray-700"
                            >
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>

                <tbody className="divide-y divide-gray-100 bg-white">
                    {children}
                </tbody>

            </table>

        </div>
    );
}