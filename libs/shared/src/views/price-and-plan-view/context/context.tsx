import { useBoolean } from '@myapp/shared/hooks';
import { createContext, useContext } from 'react';
import {
  DialogContextData as ContextData,
  DialogContextProps as ContextProps,
} from './types';

const context = createContext<ContextData>({} as ContextData);

export const { Provider } = context;

export const useDialogContext = () => useContext(context);

export const DialogProvider = ({ children, value }: ContextProps) => {
  const dialogState = useBoolean();

  return <Provider value={dialogState}> {children}</Provider>;
};
