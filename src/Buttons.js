import { data } from "react-router-dom";
import { useState } from "react";


function Buttons ({filteredClothes}) {
   const [products, setProducts] = useState(data);
    
    return(
        <div className="cont">
          <button onClick={() => setProducts(data)}>Show all</button> 
       <button className="change" onClick={() => filteredClothes("dress")}>Dresses</button>
       <button className="change" onClick={() => filteredClothes("pants")}>Pants</button>
       <button className="change" onClick={() => filteredClothes("skirt")}>Skirts</button>
       <button className="change" onClick={() => filteredClothes("shoes")}>Shoes</button>
       <button className="change" onClick = {() => filteredClothes("shirt")}>Shirts</button>
        </div>
    )
}
export default Buttons;
