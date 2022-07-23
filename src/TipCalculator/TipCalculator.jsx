import "./TipCalculator.css"

const TipCalculator = ({title,total}) => {
    
    return(
        <div className="TipCalculator">
            <p>{title} <span> / person </span></p>
            <h1>${(total === "Infinity" || total <= 0 || total === "NaN")  ? "0.00" : total }</h1>
        </div>
    )
}

export default TipCalculator;