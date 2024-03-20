import React from "react"
import { useTable } from "react-table";
import "./RecordTable.css"


export const RecordTable = () => {
    //Get Record list based on CreatedBy
    const recordData = [
        { Type: "PupaeCheck", id: 1, Notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae consectetur neque, eu fermentum augue. Phasellus nec eleifend libero. Curabitur dapibus elit eget orci eleifend, ac vulputate nisi convallis."},
        { Type: "PostDiapauseCheck", id: 2, Notes: "N/A"},
        { Type: "PostDiapauseCheck", id: 3, Notes: "N/A" },
        { Type: "DiapauseCheck", id: 4, Notes: "Ut vulputate nec est in tincidunt. Sed id posuere erat. Nulla fringilla rutrum mauris a dignissim." },
        { Type: "PostDiapauseCheck", id: 5, Notes: "N/A" },
        { Type: "DiapauseCheck", id: 6, Notes: "N/A" },
        { Type: "DiapauseCheck", id: 7, Notes: "N/A" },
        { Type: "DiapauseCheck", id: 8, Notes: "N/A" },
        { Type: "DiapauseCheck", id: 9, Notes: "N/A" },
        { Type: "PostDiapauseCheck", id: 10, Notes: "DUMMY DATA " },
        { Type: "DiapauseCheck", id: 11, Notes: "N/A" },
        { Type:"PostDiapauseCheck", id: 12, Notes: "N/A" },
        { Type: "DiapauseCheck", id: 13, Notes: "N/A" },
    ]

    const data = React.useMemo(() => recordData, []);

    const columns = React.useMemo(
        () => [
            {
                Header: "Type",
                accessor: "Type",
            },
            {
                Header: "ID",
                accessor: "id",
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

export default RecordTable