import React from "react"
import "./ViewRecords.css"
import NavBar from "../NavBar"

export const ViewRecords = () => {
   
    return (
        <div className="container1">
            <div>
                <NavBar />
             </div>

             <div className="header">
                <div className="text">Browse By...</div>
             </div>
             <div classname="input">
<input type="text" placeholder="Type here to search">
        
        </input>
</div>
             <div className="buttonholder">

       
        <button
          className="buttons">
          Moms
        </button>

        <br></br>

        <button
          className="buttons">
          Jars
        </button>

      </div>

        </div>
        

        

      )
    
  }
  
  export default ViewRecords