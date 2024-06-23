import React, { useState } from "react";
import ListItem from "./listItem";
import Heading from "./Heading";
import InputField from "./Input";
import Button from "./Button"

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  return (
    <div className="container">
      <Heading/>
      <div className="form">
        <InputField change={handleChange} text="text" value={inputText} />
        <Button click={addItem}/>
      </div>
      <div>
        <ul>
          {items.map((todoItem) => (
            <ListItem text={todoItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
