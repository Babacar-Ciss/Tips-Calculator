import "./Input.css";
import InputTipValue from "../InputTipValue/InputTipValue";
import SelectTip from "../SelectTip/SelectTip";
import Persons from "../Persons/Persons";

const Input = ({changeBill, numberOfPerson, tipRateSelected,personHandler,removeValueBill,removeValuePerson,selectedTipsCustom,removeValueCustom,removeSelectedTip }) => {

    return(
        <div className="Input">
            <InputTipValue changedBill={changeBill} 
                           removeValueBill = {removeValueBill}  />
            
            <SelectTip tipRateSelected={tipRateSelected} 
                       selectedTipsCustom  = {selectedTipsCustom} 
                       removeValueCustom ={removeValueCustom} 
                       removeSelectedTip = {removeSelectedTip}/>
            
            <Persons personHandler= {personHandler} 
                     removeValuePerson = {removeValuePerson}
                     numberOfPerson = {numberOfPerson}/>
        </div>
    )
}


export default Input;