import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import M from 'materialize-css';

const Accordion = (props) => {
  const { people } = props;

  // Testing useEffect here, might need to be changed to componentDidMount for prod.
  useEffect(() => {
    M.AutoInit();
  });

  // TODO: pass in people from props through .map() to populate
  return (
    <div className="row">
      <ul className="collapsible">
        {people.map((person) => (
          <li
            key={person.id}
          >
            <div className="collapsible-header">
              <i className="material-icons">filter_drama</i>
              {person.name}
            </div>
            <div className="collapsible-body">
              <span>
                {person.notes}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

Accordion.defaultProps = {
  people: PropTypes.arrayOf,
};

Accordion.propTypes = {
  people: PropTypes.arrayOf,
};

export default Accordion;
