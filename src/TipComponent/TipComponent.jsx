import "./TipComponent.css";


const TipComponent = ({tipRatevalue, tipRateSelected}) => {
    
    return (
            <div className="TipComponent" tabIndex='0' onClick={tipRateSelected}  >
                {tipRatevalue}%
            </div>)

}

export default TipComponent;
