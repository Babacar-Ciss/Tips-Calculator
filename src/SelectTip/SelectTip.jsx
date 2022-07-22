import "./SelectTip.css";
import TipComponent from "../TipComponent/TipComponent";
import { useState } from "react";

const SelectTip = ({tipRateSelected }) => {
    const RATE_TIPS = [5,10,15,25,50]

    const tipsButtonMapping = RATE_TIPS.map((rateTip,index) => (
        <TipComponent tipRatevalue={rateTip} 
                      value = {rateTip}
                      key={rateTip+index}
                      tipRateSelected = {tipRateSelected}/>
    ))

    return (
        <div className="SelectTip">
            <p className="selecttip-title">Select Tip %</p>
            <div className="selecttip-values">
                {tipsButtonMapping}
                <input className="selecttip-custom" type="number" placeholder="Custom"/>
            </div>
           
        </div>
    )
}


export default SelectTip;
