import 'notistack';
import { ReactNode } from 'react';

export declare module 'notistack' {
  export interface VariantOverrides {
    progress: {
      title?: ReactNode;
    };
    complete: {
      title?: ReactNode;
    };
  }
}
