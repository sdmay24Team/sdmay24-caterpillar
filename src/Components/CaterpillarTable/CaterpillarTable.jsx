import React from "react"
import { useTable, useFilters } from "react-table";
import "./CaterpillarTable.css"
import { generateClient } from 'aws-amplify/api'
import { listCaterpillars } from "../../graphql/queries"
import { Amplify } from "aws-amplify"
import config from "../.././aws-exports"
import { CageFilter } from "./CageFilter.js"


Amplify.configure(config);

const client = generateClient();

export const catData = await client.graphql({ query: listCaterpillars});


export const CaterpillarTable = () => {
    //Get Caterpillar list based on CreatedBy
    

    const data = React.useMemo(() => catData.data.listCaterpillars.items, []);

    const columns = React.useMemo(
        () => [
            {
                Header: "ID",
                accessor: "IndividualID",
                Filter: ""
            },
            {
                Header: "Cage",
                accessor: "Cage",
                Filter: CageFilter
            },
            {
                Header: "Date Found",
                accessor: "DateFound",
                Filter: " "
            },
        ],
        []
    );

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        useTable({ 
            columns,
            data
            },
            useFilters
        );
    return (
        <div className="tableContainer">
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps()}>
                                    {column.render("Header")}
                                    <div>{column.canFilter ? column.render('Filter') : null}</div>
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