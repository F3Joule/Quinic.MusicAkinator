import React, { FunctionComponent } from 'react';

export const Box: FunctionComponent = ({ children }) => {
  return <div className='main center-box'>{children}</div>;
};

export default Box;
