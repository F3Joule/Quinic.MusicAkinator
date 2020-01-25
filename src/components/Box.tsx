import React, { FunctionComponent } from 'react';

export const Box: FunctionComponent = ({ children }) => {
    return <div className='Box'>
        {children}
    </div>
}

export default Box;