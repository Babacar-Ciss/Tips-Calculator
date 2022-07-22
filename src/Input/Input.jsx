import "./Input.css";
import InputTipValue from "../InputTipValue/InputTipValue";
import SelectTip from "../SelectTip/SelectTip";
import Persons from "../Persons/Persons";

const Input = ({changeBill, tipRateSelected,personHandler}) => {

    return(
        <div className="Input">
            <InputTipValue changedBill={changeBill} />
            <SelectTip tipRateSelected={tipRateSelected} />
            <Persons personHandler= {personHandler} />
        </div>
    )
}


export default Input;