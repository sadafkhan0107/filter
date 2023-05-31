import { useState } from 'react';
import './App.css';
// import {useState} from "react";

function App() {
  const brandData = ["puma", "adiddas", "wildcraft", "levis", "celio", "armani"];
  const[brands, setBrands] = useState(brandData);
  // function handleBrandFilter(e){
  //   let updatedBrandList = brandData.filter((item) => item.includes(e.target.value))
  //   setBrands(updatedBrandList);
  // }
  function handleBrandFilter(e){
    let updatedBrandList = brandData.filter((item) => item.startsWith(e.target.value));
    setBrands(updatedBrandList);
  }

  return (
    <div className="App">
    <input onChange={handleBrandFilter} placeholder="Enter Brand you want"/> 
    <ul className='remove-dots'>
      {
        brands.map((brand) => (
          <li>{brand}</li>
        ))
      }
    </ul>
    </div>
  );
}

export default App;
