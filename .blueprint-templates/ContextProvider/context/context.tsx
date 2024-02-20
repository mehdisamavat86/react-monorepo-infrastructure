import { createContext, useContext } from 'react';
import { 
  {{pascalCase name}}ContextData as ContextData,
  {{pascalCase name}}ContextProps as ContextProps
 } from './types';

const context = createContext<ContextData>({} as ContextData);

export const { Provider } = context;

export const use{{pascalCase name}}Context = () => useContext(context);

export const {{pascalCase name}}Provider = ({ children,value }: ContextProps) => {
  return <Provider value={value || {}}> {children}</Provider>;
};
