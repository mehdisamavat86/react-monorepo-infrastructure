export type QueryParamsValue = string | boolean | undefined | null;

export interface QueryParamsStoreData<
  T extends Record<string, QueryParamsValue> = any
> {
  params: T;
  setParams: (params: Partial<T>) => void;
  setParam: (key: keyof T, value: QueryParamsValue) => void; // TODO infer type using T[key]
  removeParam: (key: keyof T) => void;
}
