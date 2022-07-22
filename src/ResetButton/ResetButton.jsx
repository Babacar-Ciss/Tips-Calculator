import "./ResetButton.css";
import { ExempleContext } from "../App";
import { useContext } from "react";

const ResetButton = ({reset}) => {
    
    const valueBill = useContext(ExempleContext);

    let button = "";
    
    if(valueBill === " " || valueBill === 0) {
        button = (<button className="button-reset-diseable" > RESET </button>)
    }   
    else {
        button = (<button className="button-reset"> RESET </button>)
    }

    return (
        <div className="ResetButton" onClick={reset}>
            {button}
        </div>
    )
}


export default ResetButton;