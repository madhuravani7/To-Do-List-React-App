import React, { useState } from "react";
import ListItem from "./listItem";
import Heading from "./Heading";
import InputField from "./Input";
import Button from "./Button";
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
  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="form">
        <Heading />
        <InputField change={handleChange} text="text" value={inputText} />
        <Button click={addItem} />
      </div>
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ListItem
              key={index}
              id={index}
              text={todoItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
