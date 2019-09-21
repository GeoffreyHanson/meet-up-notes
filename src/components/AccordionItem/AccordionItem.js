import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import M from 'materialize-css';
import './AccordionItem.css';


const AccordionItem = (props) => {
  const {
    id, name, notes, click,
  } = props;


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
        {name}
        <button
          onClick={click}
          type="button"
          className="material-icons right-align"
        >
                delete
        </button>
      </div>
      <div className="collapsible-body">
        <span>
          {notes}
        </span>
      </div>
    </li>
  );
};


AccordionItem.defaultProps = {
  click: PropTypes.func,
  id: PropTypes.number,
  name: PropTypes.string,
  notes: PropTypes.string,
};

AccordionItem.propTypes = {
  click: PropTypes.func,
  id: PropTypes.number,
  name: PropTypes.string,
  notes: PropTypes.string,
};

export default AccordionItem;
