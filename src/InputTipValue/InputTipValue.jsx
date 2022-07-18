import "./InputTipValue.css"

const InputTipValue = () => {

    return(
        <div className="InputTipValue">
            <form className="bill-input">
                <label className="bill-label"> Bill </label>
                <input className="bill-value" type="number" placeholder="0"/>
            </form>
            
        </div>
    )
}


export default InputTipValue;
