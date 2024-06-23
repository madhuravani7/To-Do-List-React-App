import React from "react";

function InputField(props) {
  return (
    <input onChange={props.change} type={props.text} value={props.value} />
  );
}

export default InputField;
