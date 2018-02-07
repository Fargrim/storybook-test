import React from 'react';
import PropTypes from 'prop-types';

export const Button = props => {
  const {
    name,
    type,
    onClick,
    children
  } = props;
  return <button type={type} name={name} onClick={onClick}>{children}</button>;
};

Button.defaultValues = {
  name: 'button',
  type: 'button',
  onClick: () => {},
  children: 'Click Me!',
};

Button.propTypes = {
  name: PropTypes.string,
  type: PropTypes.oneOf('submit', 'reset', 'button'),
  onClick: PropTypes.func,
  children: PropTypes.string
};

export default Button;
