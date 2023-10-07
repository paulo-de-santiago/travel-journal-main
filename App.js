// @ts-nocheck
import React from "react";
import Card from "./components/Card.js";
import Navbar from "./components/Navbar.js";
import data from "./data";



 export default function App() {
   const items = data.map(item => {
     return (<Card 
      key={item.title}
      {...item}
     />)
   })
  return (
    <div className="app--container">
      <Navbar />
      {items}
    </div>
  );
}
