import React from 'react';
import { useDesignable } from '@nocobase/client';
import { Button } from 'antd';
import { observer } from '@formily/react';

import { useContext } from 'react';
import { MyDemoClientContext } from './MyDemoContext';

let count = 0;

export const Hello: React.FC<any> = observer(({ name, type = 'default' }) => {
  const { patch, remove } = useDesignable();
  count++;

  const demoName = useContext(MyDemoClientContext);
  return (
    <div>
        <h1>
          Hello {name}! - {demoName}
        </h1>
      <div>type: {type}</div>
      <Button
        onClick={() => {
          patch('x-component-props.name', Math.random());
          patch('x-component-props.type', `type-${count}`);
        }}
      >
        更新
      </Button>
    </div>
  );
});
