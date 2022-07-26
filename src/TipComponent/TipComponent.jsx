import "./TipComponent.css";
import { useRef} from "react";

const TipComponent = ({tipRatevalue, tipRateSelected,currentValue}) => {
    const current = useRef();

    return (
            <div  className="TipComponent" 
                  currentValue = {current} 
                  tabIndex='0' 
                  ref={current}
                  onClick={(e) =>  {
                    current.current.parentElement.childNodes.forEach(el => {
                        el.classList.remove("active")
                       }); 
                    current.current.classList.add("active")
                    tipRateSelected(e);
                  } 
                    }>
                {tipRatevalue}%
            </div>)
}

export default TipComponent;
