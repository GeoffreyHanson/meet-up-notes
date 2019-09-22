import React from 'react';
// import PropTypes from 'prop-types';


const NewPersonForm = () => (
  <div className="NewPersonForm">
    <div className="row">
      <form className="col s12">
        <div className="row">
          <div className="input-field col s6">
            <i className="material-icons prefix">account_circle</i>
            <label htmlFor="name_field">Name</label>
            <input id="name_field" name="icon_prefix" type="text" className="validate" />
          </div>
          <div className="input-field col s6">
            <i className="material-icons prefix">note</i>
            <input id="icon_telephone" type="tel" className="validate" />
            <label htmlFor="icon_telephone">Notes</label>
          </div>
        </div>
      </form>
    </div>
  </div>
);

// NewPersonForm.defaultProps = {};
// NewPersonForm.propTypes = {};

export default NewPersonForm;
