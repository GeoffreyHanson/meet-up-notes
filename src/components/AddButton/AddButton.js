import React from 'react';
import PropTypes from 'prop-types';

const AddButton = (props) => {
  const { click } = props;
  return (
    <div className="addButton">
      <button
        onClick={click}
        type="button"
        className="pink waves-effect waves-light btn-large"
      >
        <i className="material-icons left">
        add
        </i>
      Add Person
      </button>
    </div>
  );
};

AddButton.defaultProps = {
  click: PropTypes.func,
};

AddButton.propTypes = {
  click: PropTypes.func,
};

export default AddButton;
