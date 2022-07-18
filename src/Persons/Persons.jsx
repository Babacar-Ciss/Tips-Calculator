import "./Persons.css"

const Persons = () => {

    return(
        <div className="Persons">
            <form className="persons-input">
                <label className="persons-label"> Number of People </label>
                <input className="persons-value" type="number" placeholder="0"/>
            </form>
            
        </div>
    )
}


export default Persons;
