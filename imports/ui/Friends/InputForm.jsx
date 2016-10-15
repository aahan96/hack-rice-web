import React, { PropTypes } from 'react';
import {
  FormGroup,
  ControlLabel,
  FormControl,
} from 'react-bootstrap';
import { connect } from 'react-redux';

import { addTerm, getRestaurants } from '../redux/actions';

const FieldGroup = ({ id, label, ...props }) => (
  <FormGroup controlId={id}>
    <ControlLabel>{label}</ControlLabel>
    <FormControl {...props} />
  </FormGroup>
);

FieldGroup.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

const InputForm = ({ queries, handleKeyPress, handleSubmit }) => (
  <div>
    <h1>Step 1: Tell us what you want</h1>
    <form>
      <FieldGroup
        id="firstPhrase"
        type="text"
        label="First Phrase"
        placeholder="Ex: Chinese"
        onKeyPress={handleKeyPress(0)}
        onKeyUp={handleKeyPress(1)}
      />
      <FieldGroup
        id="secondPhrase"
        type="text"
        label="Second Phrase"
        placeholder="Ex: Nearby"
        onKeyPress={handleKeyPress(1)}
        onKeyUp={handleKeyPress(1)}
      />
      <FieldGroup
        id="thirdPhrase"
        type="text"
        label="Third Phrase"
        placeholder="Ex: Less than $20"
        onKeyPress={handleSubmit(queries)}
      />
    </form>
  </div>
);

InputForm.propTypes = {
  queries: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  handleKeyPress: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  queries: state.queries,
});

const mapDispatchToProps = dispatch => ({
  handleKeyPress: index => (e) => {
    // console.log(e.target.value);
    dispatch(addTerm(e.target.value, index));
  },
  handleSubmit: queries => (e) => {
    if (e.key === 'Enter') {
      dispatch(getRestaurants(queries.slice(0, -1), e.target.value));
    }
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(InputForm);
