import React from "react"
import { useTable } from "react-table";
import "./CaterpillarTable.css"


export const CaterpillarTable = () => {
    //Get Caterpillar list based on CreatedBy
    const catData = [
        { id: 1, Notes: "N/A", State: 1 },
        { id: 2, Notes: "Lots of gusto with this one. Not sure how to feel about it. Lorem Ipsum yata yata yata ", State: 1 },
        { id: 3, Notes: "N/A", State: 1 },
        { id: 4, Notes: "N/A", State: 4 },
        { id: 5, Notes: "N/A", State: 1 },
        { id: 6, Notes: "N/A", State: 2 },
        { id: 7, Notes: "N/A", State: 3 },
        { id: 8, Notes: "N/A", State: 1 },
        { id: 9, Notes: "N/A", State: 1 },
        { id: 10, Notes: "DUMMY DATA ", State: 1 },
        { id: 11, Notes: "N/A", State: 1 },
        { id: 12, Notes: "N/A", State: 4 },
        { id: 13, Notes: "N/A", State: 1 },
        { id: 14, Notes: "N/A", State: 2 },
        { id: 15, Notes: "N/A", State: 3 },
        { id: 16, Notes: "N/A", State: 1 },
    ]

    const data = React.useMemo(() => catData, []);

    const columns = React.useMemo(
        () => [
            {
                Header: "ID",
                accessor: "id",
            },
            {
                Header: "State",
                accessor: "State",
            },
            {
                Header: "Notes",
                accessor: "Notes",
            },
        ],
        []
    );

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        useTable({ columns, data });
    return (
        <div className="tableContainer">
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps()}>
                                    {column.render("Header")}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell) => (
                                    <td {...cell.getCellProps()}> {cell.render("Cell")} </td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>

    )

}

export default CaterpillarTable