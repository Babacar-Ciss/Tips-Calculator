import "./TipComponent.css";
import { useState } from "react";

const TipComponent = ({tipRatevalue, tipRateSelected}) => {
    const [active, setActive] = useState(true);
    
    return (
        <div>
            {
                active === true ? 
                        (<div className="TipComponent" tabIndex='0'  onClick={tipRateSelected} >
                            {tipRatevalue}%
                        </div>)
                       :
                        (<div className="TipComponent " tabIndex='0' onClick={tipRateSelected}  >
                            {tipRatevalue}%
                        </div>)
            }
        </div>     
    )
}


export default TipComponent;
