import React from "react";

function Button(props) {
  return (
    <button onClick={props.click}>
      <span>Add</span>
    </button>
  );
}

export default Button