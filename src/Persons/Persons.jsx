import "./Persons.css"

const Persons = ({personHandler}) => {

    return(
        <div className="Persons">
            <form className="persons-input">
                <label className="persons-label"> Number of People </label>
                <input className="persons-value" 
                       type="number" 
                       placeholder="0" 
                       pattern="[0-9]+"
                       onChange={personHandler}/>
            </form>
        </div>
    )
}


export default Persons;
