import { isEmpty, isEqual, omit } from 'lodash-es';
import { useCallback, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useQueryContext } from '../http';
import { objSanitizeNilValues } from '../utils/object';
import { useMount } from './use-mount';

export function useQueryStringState<
  T extends Record<string, string> = Record<string, string>
>() {
  const {
    previousParams,
    setPreviousParams,
    setParams: setContextParams,
  } = useQueryContext();
  const [_params, _setParams] = useSearchParams();
  const params = useMemo(
    () => (!_params ? null : Object.fromEntries(_params)) as T,
    [_params]
  );

  const setParams = (values?: Partial<T>) => {
    const newParams = objSanitizeNilValues({ ...params, ...values });

    if (isEqual(newParams, params)) return;

    setPreviousParams(params);

    const nonePaginationParams = omit(values, 'page', 'size');

    if (!isEmpty(nonePaginationParams)) newParams.page = 0;

    _setParams(new URLSearchParams(newParams));
    setContextParams(newParams);
  };
  const removeParam = (name: keyof T) => setParam(name, undefined);
  const setParam = (name: keyof T, value?: string) => {
    if (params[name] !== value) setParams({ [name]: value } as Partial<T>);
  };
  const getParam = useCallback(
    (name: keyof T, defaultValue = null) => params[name] ?? defaultValue,
    [params]
  );

  const removeAllParams = () => _setParams({});

  useMount(setParams);

  return {
    params,
    setParams,
    setParam,
    removeParam,
    removeAllParams,
    getParam,
    previousParams,
  };
}
