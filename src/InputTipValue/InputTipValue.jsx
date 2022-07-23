import "./InputTipValue.css"

const InputTipValue = ({changedBill,removeValueBill}) => {

    return(

        <div className="InputTipValue">
            <form className="bill-input">
                <label className="bill-label"> Bill </label>
                <input className="bill-value" 
                       type="number" 
                       placeholder={0}
                       pattern="[0-9]+"
                       onChange={changedBill}
                       value = {removeValueBill}
                       />
            </form>
            
        </div>
    )
}


export default InputTipValue;
