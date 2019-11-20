import React from "react";
import Numbers from "../ButtonComponents/NumberButtons/Numbers";
import { defaultCipherList } from "constants";


const Display = (props) => {
  
  return <div className="display">
    {props.display}
    </div>;
}
export default Display;