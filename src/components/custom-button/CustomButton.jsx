import React from 'react';

import './CustomButton.scss';

export const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => (
  <button className={`${inverted ? 'inverted' : ''} custom-button`} {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
