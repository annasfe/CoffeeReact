import { useState } from "react";
import "./App.css";
import CoffeeView from "./components/CoffeeView";
import Form from "./components/Form";
import NavBar from "./components/NavBar";
import MyCoffees from "./MyCoffees";
import { Routes, Route, useNavigate } from "react-router-dom";
import CoffeeContext from "./CoffeeContext";

function App() {
  //setup the state data
  const [allCoffees, setCoffees] = useState(MyCoffees);
  const navigate = useNavigate();

  //define methods to handle input and other helper functions
  function addCoffee(coffee) {
    //create ID for new coffee
    coffee.id = allCoffees.length + 1;
    //add received coffee to coffee array:
    setCoffees([...allCoffees, coffee]);
    navigate("/");
  }


  return (
    <div className="App">
      <main>
        <NavBar />
        <div className="container">
          <h1>
            My coffee app <span>&#9749;</span>
          </h1>
          <CoffeeContext.Provider value={{allCoffees, addCoffee}}>
          <Routes>
            <Route path="/" element={<CoffeeView />} />
            <Route path="/form" element={<Form/>} />
          </Routes>
          </CoffeeContext.Provider>
        </div>
      </main>
    </div>
  );
}

export default App;
