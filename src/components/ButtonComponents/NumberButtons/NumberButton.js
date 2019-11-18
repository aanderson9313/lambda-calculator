import React from "react";
import { tsPropertySignature } from "@babel/types";

const NumberButton = (props) => {
  return (
    <div>
    <button className = "darkBlue-btns">
      {props.button}
    </button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </div>
  );
};
export default NumberButton;