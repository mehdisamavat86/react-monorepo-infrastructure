import { UseBoolean } from '@myapp/shared/hooks';
import type { PropsWithChildren } from 'react';

export interface DialogContextData extends UseBoolean {}

export interface DialogContextProps extends PropsWithChildren {
  value?: DialogContextData;
}
