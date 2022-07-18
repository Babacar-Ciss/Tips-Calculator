import ResetButton from "../ResetButton/ResetButton";
import TipCalculator from "../TipCalculator/TipCalculator";
import "./Display.css"

const Display = () => {

    return(
        <div className="Display">
            <div className="display-container">
                <TipCalculator title="Tip Amount" />
                <TipCalculator title="Total"/>
                <ResetButton />
            </div>
        </div>
    )
}


export default Display;