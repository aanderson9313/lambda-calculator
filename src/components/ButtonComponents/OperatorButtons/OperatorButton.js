import React from "react";

const OperatorButton = (props) => {
  return (
    <div className = "btns">
    <button className = "lightBlue-btn">
      {props.button.value}
    </button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </div>
  );
};
export default OperatorButton;