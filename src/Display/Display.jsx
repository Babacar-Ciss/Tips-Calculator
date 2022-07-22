import ResetButton from "../ResetButton/ResetButton";
import TipCalculator from "../TipCalculator/TipCalculator";
import { useContext } from "react";
import { ExempleContext } from "../App";
import { TotalPerPersonContext } from "../App";

import "./Display.css"

const Display = ({reset}) => {

    const totalAmount = useContext(ExempleContext);
    const totalPerPerson = useContext(TotalPerPersonContext);

    return(
        <div className="Display">
            <div className="display-container">
                <TipCalculator total={totalAmount}  title="Tip Amount" />
                <TipCalculator title="Total" total={totalPerPerson}/>
                <ResetButton reset={reset}/>
            </div>
        </div>
    )
}


export default Display;