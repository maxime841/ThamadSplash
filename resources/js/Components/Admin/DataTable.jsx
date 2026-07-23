import {
    flexRender,
    getCoreRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    getFilteredRowModel,
    useReactTable,
} from "@tanstack/react-table";

import { useState } from "react";

export default function DataTable({ columns, data }) {

    const [sorting, setSorting] = useState([]);
    const [globalFilter, setGlobalFilter] = useState("");

    const table = useReactTable({
        data,
        columns,

        state: {
            sorting,
            globalFilter,
        },

        onSortingChange: setSorting,
        onGlobalFilterChange: setGlobalFilter,

        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
    });

    return (
        <div className="bg-white rounded-2xl shadow-xl p-6">

            <div className="flex justify-between mb-6">

                <input
                    value={globalFilter ?? ""}
                    onChange={(e) => setGlobalFilter(e.target.value)}
                    placeholder="Rechercher..."
                    className="border rounded-xl px-4 py-2 w-80"
                />

            </div>

            <table className="w-full">

                <thead className="bg-slate-100">

                    {table.getHeaderGroups().map(headerGroup => (

                        <tr key={headerGroup.id}>

                            {headerGroup.headers.map(header => (

                                <th
                                    key={header.id}
                                    onClick={header.column.getToggleSortingHandler()}
                                    className="p-4 text-left cursor-pointer"
                                >

                                    {flexRender(
                                        header.column.columnDef.header,
                                        header.getContext()
                                    )}

                                </th>

                            ))}

                        </tr>

                    ))}

                </thead>

                <tbody>

                    {table.getRowModel().rows.map(row => (

                        <tr
                            key={row.id}
                            className="border-b hover:bg-slate-50"
                        >

                            {row.getVisibleCells().map(cell => (

                                <td
                                    key={cell.id}
                                    className="p-4"
                                >

                                    {flexRender(
                                        cell.column.columnDef.cell,
                                        cell.getContext()
                                    )}

                                </td>

                            ))}

                        </tr>

                    ))}

                </tbody>

            </table>

            <div className="flex justify-end gap-3 mt-6">

                <button
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                    className="px-4 py-2 rounded bg-gray-200"
                >
                    Précédent
                </button>

                <button
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                    className="px-4 py-2 rounded bg-cyan-600 text-white"
                >
                    Suivant
                </button>

            </div>

        </div>
    );
}