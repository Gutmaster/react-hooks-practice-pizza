import React, {useState, useEffect} from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const [pizzas, setPizzas] = useState([]);
  const [selectedPizza, setSelectedPizza] = useState(null);

  function fetchPizzas() {
    fetch("http://localhost:3001/pizzas")
    .then(res => res.json())
    .then(pizzas => setPizzas(pizzas))
  }

  useEffect(() => fetchPizzas(), [selectedPizza]);

  function submitPizza(pizza){
    fetch(`http://localhost:3001/pizzas/${pizza.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(pizza)
    })
   .then(res => res.json())
   .then(data => setSelectedPizza(data))
  }

  return (
    <>
      <Header />
      <PizzaForm pizza={selectedPizza} submitPizza={submitPizza}/>
      <PizzaList pizzas={pizzas} setSelectedPizza={setSelectedPizza} submitPizza={submitPizza}/>
    </>
  );
}

export default App;
