import "./SelectTip.css";
import TipComponent from "../TipComponent/TipComponent";

const SelectTip = () => {

    return (
        <div className="SelectTip">
            <p className="selecttip-title">Select Tip %</p>
            <div className="selecttip-values">
                <TipComponent value="5%" />
                <TipComponent value="10%" />
                <TipComponent value="15%" />
                <TipComponent value="25%" />
                <TipComponent value="50%" />
                <input className="selecttip-custom" type="number" placeholder="Custom"/>
            </div>
           
        </div>
    )
}


export default SelectTip;
