import { Maybe } from '@myapp/shared/definition';
import type { Dispatch, PropsWithChildren, SetStateAction } from 'react';

export interface QueryContextData {
  totalElements: number | undefined;
  setTotalElements: Dispatch<SetStateAction<number | undefined>>;
  params: Maybe<Record<string, QueryParamsValue>>;
  setParams: Dispatch<SetStateAction<Maybe<Record<string, QueryParamsValue>>>>;
  previousParams: Maybe<Record<string, QueryParamsValue>>;
  setPreviousParams: Dispatch<
    SetStateAction<Maybe<Record<string, QueryParamsValue>>>
  >;
}

export interface QueryContextProps extends PropsWithChildren {
  value?: QueryContextData;
}

export type QueryParamsValue = string;
