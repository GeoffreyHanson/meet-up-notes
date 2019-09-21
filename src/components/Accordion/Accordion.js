import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import M from 'materialize-css';
import AccordionItem from '../AccordionItem/AccordionItem';

const Accordion = (props) => {
  const { people, click } = props;

  // Testing useEffect here, might need to be changed to componentDidMount for prod.
  useEffect(() => {
    M.AutoInit();
  });

  return (
    <div className="row">
      <ul className="collapsible">
        {people.map((person) => (
          <AccordionItem
            click={click}
            id={person.id}
            key={person.id}
            name={person.name}
            notes={person.notes}
          />
        ))}
      </ul>
    </div>
  );
};

Accordion.defaultProps = {
  people: PropTypes.arrayOf,
  click: PropTypes.func,
};

Accordion.propTypes = {
  people: PropTypes.arrayOf,
  click: PropTypes.func,
};

export default Accordion;
