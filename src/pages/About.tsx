import React from 'react';
import { observer } from '@formily/react';


export const About: React.FC<any> = observer(({ type = 'default' }) => {
  return (
    <div>
      <h1>About</h1>
      <div>type: {type}</div>
    </div>
  );
});
