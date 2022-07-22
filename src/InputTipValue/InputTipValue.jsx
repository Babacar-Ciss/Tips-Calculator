import "./InputTipValue.css"

const InputTipValue = ({changedBill}) => {

    return(
        <div className="InputTipValue">
            <form className="bill-input">
                <label className="bill-label"> Bill </label>
                <input className="bill-value" 
                       type="number" 
                       placeholder={0}
                       pattern="[0-9]+"
                       onChange={changedBill}
                       />
            </form>
            
        </div>
    )
}


export default InputTipValue;
