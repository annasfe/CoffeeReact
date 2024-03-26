import { createContext } from 'react';
import { useState, useEffect, useContext } from "react";
import MyCoffees from "./src/MyCoffees";

const CoffeeContext = createContext({});

export default function CoffeeContextProvider({children}) {
    const [allCoffees, setCoffees] = useState([]);

    useEffect(()=>{
        setCoffees(MyCoffees);
    }, [])

    function addCoffee(coffee) {
        //create ID for new coffee
        coffee.id = allCoffees.length + 1;
        //add received coffee to coffee array:
        setCoffees([...allCoffees, coffee]);
      }

    return (
        <CoffeeContext.Provider value={{allCoffees, addCoffee}}>
            {children}
        </CoffeeContext.Provider>
    )
}

export const useCoffeeContext = () => {
    return useContext(CoffeeContext)
}