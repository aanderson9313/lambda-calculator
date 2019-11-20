import React from "react";
import { tsPropertySignature } from "@babel/types";

const NumberButton = (props) => {
  function handleClickEvent() {
    props.consoleLog(props.number)
    }

  return (
    <div className = "btns">
    <button className = "darkBlue-btns" onClick = {() => props.setDisplay(props.number)}>
      {props.number}
    </button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </div>
  );
}
export default NumberButton;