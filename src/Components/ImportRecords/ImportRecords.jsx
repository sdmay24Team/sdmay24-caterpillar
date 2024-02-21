import React from "react"
import "./ImportRecords.css"
import NavBar from "../NavBar"

export const ImportRecords = () => {
  var fileSelected = false
  function browseFiles(){
    //Do file browsing
    fileSelected = true; //if successful
  }
  function submitFile(){
    //Turn file into record
    fileSelected = false; //if successful
    console.log('File submitted')
  }
  return (
    <div className="container1">

      <div>
        <NavBar />
      </div>

      <div className="header">
        <div className="text">Import Records</div>
      </div>

      <div className="buttonholder">
        <button
          className="buttons"
          onClick={browseFiles}>
          Browse Files
        </button>

        <br></br>

        <button
          className="buttons"
          onClick={fileSelected ? submitFile : console.log('No file selected')}>
          Submit
        </button>

      </div>
    
    </div>
    
  )
}

export default ImportRecords
