import React from 'react';
import PropTypes from 'prop-types';


const NewPersonForm = (props) => {
  const {
    changed, name, notes, submit,
  } = props;
  return (
    <div className="NewPersonForm">
      <div className="row">
        <form className="col s12" onSubmit={submit}>
          <div className="row">
            <div className="input-field col s6">
              <i className="material-icons prefix">account_circle</i>
              <label htmlFor="name_field">Name</label>
              <input
                id="name"
                value={name}
                onChange={changed}
                name="name"
                type="text"
                className="validate"
              />
            </div>
            <div className="input-field col s6">
              <i className="material-icons prefix">note</i>
              <label htmlFor="notes_field">Notes</label>
              <input
                id="notes"
                value={notes}
                onChange={changed}
                name="notes"
                type="text"
                className="validate"
              />
            </div>
          </div>
          <div className="row left-align">
            <button
              className="btn waves-effect waves-light"
              type="submit"
              value="Submit"
              name="action"
            >
            Submit
              <i className="material-icons right">
              send
              </i>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

NewPersonForm.defaultProps = {
  changed: PropTypes.func,
  name: PropTypes.string,
  notes: PropTypes.string,
  submit: PropTypes.func,
};
NewPersonForm.propTypes = {
  changed: PropTypes.func,
  name: PropTypes.string,
  notes: PropTypes.string,
  submit: PropTypes.func,
};

export default NewPersonForm;
