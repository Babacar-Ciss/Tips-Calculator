import "./Input.css";
import InputTipValue from "../InputTipValue/InputTipValue";
import SelectTip from "../SelectTip/SelectTip";
import Persons from "../Persons/Persons";

const Input = () => {

    return(
        <div className="Input">
            <InputTipValue />
            <SelectTip />
            <Persons />
        </div>
    )
}


export default Input;