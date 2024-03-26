import {
    DishCreateForm,
    BucketCreateForm,
    CaretakerCreateForm,
    JarCreateForm,
    MomCreateForm
   } from '../../ui-components';
import React, { useState } from "react"
import NavBar from "../NavBar"

export const CreateRecord = () => {
    const [value, setValue] = useState("");
    const handleChange = (event) => {
        setValue(event.target.value)
    };
  return (
   <div>
     <NavBar />
     <div className="container1 ">
     <div className="text">Create New Container, Mom, or Caretaker</div>
        <select style={{width:200, margin:'auto'}} value={value} onChange={handleChange}>
            <option value="dish">Dish</option>
            <option value="jar">Jar</option>
            <option value="bucket">Bucket</option>
            <option value="mom">Mom</option>
            <option value="caretaker">Caretaker</option>
            
        </select>
        {value === "dish" && (
            <div><DishCreateForm /></div>)
        }
         {value === "jar" && (
            <div><JarCreateForm /></div>)
        }
         {value === "bucket" && (
            <div><BucketCreateForm /></div>)
        }
         {value === "mom" && (
            <div><MomCreateForm /></div>)
        }
         {value === "caretaker" && (
            <div><CaretakerCreateForm /></div>)
        }
     </div>
    </div>
  )
}

export default CreateRecord