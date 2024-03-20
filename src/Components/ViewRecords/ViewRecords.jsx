import React from "react"
import { useTable } from "react-table";
import "./ViewRecords.css"
import NavBar from "../NavBar"
import CaterpillarTable from "../CaterpillarTable"
import RecordTable from "../RecordTable"
//import { generateClient } from 'aws-amplify/api'
//import { listCaterpillars } from "../../graphql/queries"


export const ViewRecords = () => {

    return (
        <div className="container1">
            <div>
                <NavBar />
            </div>

            <div className="header">
                <div className="text">View Records</div>
            </div>

            <div>
                <CaterpillarTable />
            </div>

            <div>
                <RecordTable />
            </div>
        </div>




    )

}

export default ViewRecords