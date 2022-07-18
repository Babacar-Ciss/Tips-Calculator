import "./TipCalculator.css"


const TipCalculator = ({title}) => {

    return(
        <div className="TipCalculator">
            <p>{title} <span> / person </span></p>
            <h1>$0.00</h1>
        </div>
    )
}

export default TipCalculator;