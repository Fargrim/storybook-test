import React from 'react';
import PropTypes from 'prop-types';

// HH:MM A/PM
//((1[0-2]|0?[1-9]):([0-5][0-9])( ([AaPp][Mm])|([AaPp][Mm])))
export const Input = props => {
  const {
    value,
    placeholder,
    validate
  } = props;
  return (
    <div>
      <div className="error">{validate(value) ? '' : 'Invalid value'}</div>
      <input
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
};

Input.defaultProps = {
  value: '',
  placeholder: '',
  validate: () => true
};

Input.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  validate: PropTypes.func
};

export default Input;
