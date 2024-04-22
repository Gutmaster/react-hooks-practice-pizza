import React, {useEffect, useState} from "react";

function PizzaForm({pizza, submitPizza}) {
  const [newPizza, setNewPizza] = useState({topping: 'Pepperoni', size: 'Small', vegetarian: 'No'});
  
  useEffect(() => {
    if (pizza) {
      setNewPizza({
        id: pizza.id,
        topping: pizza.topping,
        size: pizza.size,
        vegetarian: pizza.vegetarian
      });
    }
  }, [pizza]);

  function handleSubmit(e){
    e.preventDefault();
    submitPizza(newPizza);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
            value = {newPizza.topping}
            onChange={e => {
              setNewPizza({
                id: newPizza.id,
                topping: e.target.value,
                size: newPizza.size,
                vegetarian: newPizza.vegetarian
              });
            }}
          />
        </div>
        <div className="col">
          <select 
            onChange={e => setNewPizza({
              id: newPizza.id,
              topping: newPizza.topping,
              size: e.target.value,
              vegetarian: newPizza.vegetarian})} 
            className="form-control" name="size" value={newPizza.size}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
              defaultChecked={newPizza.vegetarian}
              onChange={e => setNewPizza({
                id: newPizza.id,
                topping: newPizza.topping,
                size: newPizza.size,
                vegetarian: e.target.checked})} 
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
              defaultChecked={!newPizza.vegetarian}
              onChange={e => setNewPizza({
                id: newPizza.id,
                topping: newPizza.topping,
                size: newPizza.size,
                vegetarian: !e.target.checked})} 
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
