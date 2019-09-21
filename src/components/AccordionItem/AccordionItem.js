import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import M from 'materialize-css';
import './AccordionItem.css';


const AccordionItem = (props) => {
  const {
    id, name, notes, changed, click,
  } = props;

  // Initializing materialize components
  useEffect(() => {
    M.AutoInit();
  });

  return (
    <li
      key={id} // 0
      id={id}
    >
      <div
        className="collapsible-header"
      >
        <i className="material-icons">filter_drama</i>

        {/* Name of person */}
        {name}

        <button
          onClick={click} // delete functionality
          type="button"
          className="material-icons right-align"
        >
                delete
        </button>
      </div>
      <div className="collapsible-body">
        {/* TODO: turn into input with two way binding */}
        <input type="text" onChange={changed} value={notes} />
        <span>
          {notes}
        </span>
      </div>
    </li>
  );
};


AccordionItem.defaultProps = {
  changed: PropTypes.func,
  click: PropTypes.func,
  id: PropTypes.number,
  name: PropTypes.string,
  notes: PropTypes.string,
};

AccordionItem.propTypes = {
  changed: PropTypes.func,
  click: PropTypes.func,
  id: PropTypes.number,
  name: PropTypes.string,
  notes: PropTypes.string,
};

export default AccordionItem;
