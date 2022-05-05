import React from 'react';
import { MyDemoClientContext } from './MyDemoContext';

export interface MyDemoProviderProps {
  demoName: string;
}

export const MyDemoProvider: React.FC<MyDemoProviderProps> = (props) => {
  const { demoName, children } = props;
  return (
    <MyDemoClientContext.Provider value={demoName}>
      {children}
    </MyDemoClientContext.Provider>
  );
};
