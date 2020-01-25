import React, { FunctionComponent } from 'react';
import { NavButtons } from './NavButton';

type Props = {
  className?: string;
  withoutNav?: boolean;
};

export const Box: FunctionComponent<Props> = ({
  children,
  className,
  withoutNav = false
}) => {
  return (
    <div className='main center-box'>
      <div className={'Box ' + className}>{children}</div>
      {!withoutNav && <NavButtons />}
    </div>
  );
};

export default Box;
