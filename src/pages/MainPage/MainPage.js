import React, { Component } from 'react';
import AccordionItem from '../../components/AccordionItem/AccordionItem';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [
        { id: 0, name: 'person1', notes: 'Notes about person1' },
        { id: 1, name: 'person2', notes: 'Notes about person2' },
        { id: 2, name: 'person3', notes: 'Notes about person3' },
      ],
    };
  }

  deletePersonHandler = (id) => { // 0
    let { people } = this.state; // array of people

    // Creating a copy of the state.
    people = [...people];

    const personIndex = people.findIndex((person) => person.id === id);

    people.splice(personIndex, 1); // 0, 1

    this.setState({ people });
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
