import React from 'react';
import PropTypes from 'prop-types';

export const Button = props => {
  const {
    name,
    type,
    onClick,
    children
  } = props;
  return <button type={type} name={name} onClick={onClick}>{children}</button>
}

Button.defaultValues = {
  label: 'Click Me!',
  name: 'button',
  type: 'button',
  onClick: () => {}
};

Button.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.oneOf('submit', 'reset', 'button'),
  onClick: PropTypes.func
};

export default Button;
