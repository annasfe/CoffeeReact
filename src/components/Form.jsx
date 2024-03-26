import { useState, useContext } from "react";
import CoffeeContext from "../CoffeeContext";


function CoffeeForm() {
  const [coffee, setCoffee] = useState({
    name: "",
    img: "",
    price: 0,
  });
 
  //get the callback function to modify coffees array from context
  let {addCoffee} = useContext(CoffeeContext);

  function handleChange(event) {
    let newCoffee = { ...coffee, [event.target.name]: event.target.value };
    setCoffee(newCoffee);
  }

  function handleSubmit(event) {
    event.preventDefault();
    addCoffee(coffee);
  }

  return (
    <div>
      <h3>Add coffee</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            name="name"
            type="text"
            value={coffee.name}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <label>
          Image:
          <input
            name="img"
            type="url"
            value={coffee.img}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <label>
          Price:
          <input
            name="price"
            type="text"
            value={coffee.price}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <button type="submit">Add Coffee</button>
      </form>
    </div>
  );
}

export default CoffeeForm;
