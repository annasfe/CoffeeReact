import "./CoffeeView.css";
import CoffeeContext from "../CoffeeContext";
import { useContext } from "react";

function Grid({setFav}) {

  //get the coffees array from context
  let { allCoffees } = useContext(CoffeeContext);
  
  return (
    <div>
      <h3>1. Pick a favorite:</h3>
      <div className="grid mt-5">
        {allCoffees.map((coffee) => (
          <div key={coffee.id} className="mb-3">
            <img src={coffee.img} onClick={()=>setFav(coffee)}/>
            <p id={coffee.id}>{coffee.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Grid;
