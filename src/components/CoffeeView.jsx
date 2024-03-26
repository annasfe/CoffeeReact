import "./CoffeeView.css";
import Grid from "./Grid";
import Favorite from "./Favorite";
import {useState} from "react";

function CoffeeView() {
  const [favorite, setFavorite] = useState(null);
  
  const setFav = (c) => {
    setFavorite(c);
  }

  return (
    <div>
      <div className="grid2">
        <Grid setFav={setFav}/>
        <Favorite favorite={favorite}/>
      </div>
    </div>
  );
}

export default CoffeeView;
