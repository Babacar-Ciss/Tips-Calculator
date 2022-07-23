import "./Persons.css"

const Persons = ({personHandler,removeValuePerson,numberOfPerson}) => {


    return(
        <div className="Persons">
            <form className="persons-input">
                <div className="persons-label-container">
                    <label className="persons-label"> Number of People </label>
                 {(numberOfPerson === "0" && numberOfPerson) ? (<label className="persons-warning"> Can’t be zero </label>) : null}   

                </div>
                <input className={ (numberOfPerson === "0" && numberOfPerson) ? "person-value-warning" : "persons-value"}
                       type="number" 
                       placeholder="0" 
                       pattern="[0-9]+"
                       onChange={personHandler}
                       value = {removeValuePerson}/>   
            </form>
        </div>
    )
}


export default Persons;
