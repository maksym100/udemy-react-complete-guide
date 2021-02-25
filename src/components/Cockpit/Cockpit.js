import classes from "./Cockpit.module.css";

const Cockpit = props => {
    let assignedClasses = [];

    if(props.persons.length <= 1) {
      assignedClasses.push(classes.red);
    }

    if(props.persons.length <= 0) {
      assignedClasses.push(classes.bold);
    }

    let btnClasses = ''
    if(props.showPersons) {
        btnClasses = classes.Red;
    }

    return (
        <div className={classes.Cockpit}>
            <h1>Hi, I'm a React App</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button className={btnClasses} onClick={props.clicked}>
                Toogle Persons
            </button>
        </div>
    );
}

export default Cockpit;