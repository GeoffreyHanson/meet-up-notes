import React, { Component } from 'react';
import AccordionItem from '../../components/AccordionItem/AccordionItem';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [
        { id: 0, name: 'Person1', notes: 'Notes about person1' },
        { id: 1, name: 'Person2', notes: 'Notes about person2' },
        { id: 2, name: 'Person3', notes: 'Notes about person3' },
      ],
    };
  }

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

  render() {
    const { people } = this.state;
    return (
      <div className="MainPage">
        <div className="container center-align">
          <h1>Test MainPage</h1>
          {/* <AddButton /> */}
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
