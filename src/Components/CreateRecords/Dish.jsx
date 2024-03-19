import {
    DishCreateForm 
   } from '../../ui-components';
   import React from "react"
   import NavBar from "../NavBar"
   
   export const Dish = () => {
     return (
      <div>
        <NavBar />
        <div className="container1 "><DishCreateForm /></div>
         
       </div>
     )
   }
   
   export default Dish