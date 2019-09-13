import React, { Component } from 'react';
import Accordion from '../../components/Accordion/Accordion';


class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [
        { id: 1, name: 'person1', notes: 'Notes about person1' },
        { id: 2, name: 'person2', notes: 'Notes about person2' },
        { id: 3, name: 'person3', notes: 'Notes about person3' },
      ],
    };
  }

  render() {
    const { people } = this.state;
    return (
      <div className="MainPage">
        <div className="container center-align">
          <h1>Test MainPage</h1>
          {/* <AddButton /> */}
          <Accordion
            people={people}
          />
        </div>
      </div>
    );
  }
}

export default MainPage;
