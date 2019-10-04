import React, { Component } from 'react';
import AddButton from '../../components/AddButton/AddButton';
import NewPersonForm from '../../components/NewPersonForm/NewPersonForm';
import AccordionItem from '../../components/AccordionItem/AccordionItem';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.name = React.createRef();
    this.notes = React.createRef();
    this.state = {
      people: [
        { id: 0, name: 'Person1', notes: 'Notes about person1' },
        { id: 1, name: 'Person2', notes: 'Notes about person2' },
        { id: 2, name: 'Person3', notes: 'Notes about person3' },
      ],
      showForm: false,
      name: '',
      notes: '',
    };
  }

  // Deletes people from the list.
  deletePersonHandler = (id) => { // 0
    let { people } = this.state;

    // Creating a copy of the state.
    people = [...people];

    // Getting the index from the passed id
    // Loop through people. For each person, check if that person's id
    // is the same as the one passed.
    const personIndex = people.findIndex((person) => person.id === id);

    // Removing the person from the array
    people.splice(personIndex, 1); // 0, 1

    // Updating state
    this.setState({ people });
  }

  // Handling input for the notes of people on the list.
  inputChangedHandler = (event, id) => {
    const { people } = this.state;

    // Getting index from the id
    const personIndex = people.findIndex((person) => person.id === id);

    // Creating a copy of the person at the index.
    const person = {
      ...people[personIndex],
    };

    // Changing the copy's notes to those from the event.
    person.notes = event.target.value;

    // Updating the person with the updated copy.
    people[personIndex] = person;

    this.setState({
      people,
    });
  }

  // Toggles the form for adding people.
  addButtonToggleClickHandler = () => {
    const { showForm } = this.state;

    // Creating a copy of the state.
    const show = showForm;

    // Setting the state to the opposite boolean.
    this.setState({ showForm: !show });
  }

  // Handling input to the form.
  newPersonInputHandler = (event) => {
    // Using computed property name syntax to update name and notes in state
    // based on the id of the input field.
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  // Adds new people to the list based on information in the form.
  personSubmitHandler = (event) => {
    event.preventDefault();

    const { name, notes } = this.state;
    let { people } = this.state;

    // Making a copy of state.
    people = [...people];

    console.log(people);


    // Creating a new person object from the form data.
    const newPerson = {
      id: people.length,
      name,
      notes,
    };

    // Adding the new object to the array.
    people.push(newPerson);

    this.setState({
      name: '',
      notes: '',
      people,
    });
  }

  render() {
    const {
      name, notes, people, showForm,
    } = this.state;
    const personForm = showForm ? (
      <NewPersonForm
        name={name}
        notes={notes}
        changed={(event) => this.newPersonInputHandler(event)}
        submit={((event) => this.personSubmitHandler(event))}
      />
    ) : (null);

    return (
      <div className="MainPage">
        <div className="container center-align">
          <h1>Test MainPage</h1>
          {/* <AddButton /> */}
          <div className="row left-align">
            <AddButton
              click={() => this.addButtonToggleClickHandler()}
            />
          </div>
          <div>
            {/* TODO: Should conditionality be in the render or return? */}
            {/* {showForm ? (<NewPersonForm />) : null} */}
            {personForm}
          </div>
          <div className="row">
            <ul className="collapsible">
              {people.map((person) => (
                <AccordionItem
                  click={() => this.deletePersonHandler(person.id)}
                  id={person.id}
                  key={person.id}
                  name={person.name}
                  notes={person.notes}
                  changed={(event) => this.inputChangedHandler(event, person.id)}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
