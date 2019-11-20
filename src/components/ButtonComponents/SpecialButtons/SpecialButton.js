import React from "react";

const SpecialButton = props => {
  return (
    <div className = "btns">
      <button className = "mediumBlue-btn" onClick = {() => props.setDisplay(props.special)}>

        {props.special}

      </button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </div>
  );
};
export default SpecialButton;