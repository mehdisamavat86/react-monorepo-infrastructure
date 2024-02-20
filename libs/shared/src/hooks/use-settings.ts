import { merge } from 'lodash-es';
import { useGetSinglePresetApi, useUpdatePresetMutationApi } from '../api';
import { useCreatePresetMutationApi } from '../api/preset/use-create-preset-mutation-api';
import { DURATION_MS, jsonStringify } from '../utils';

const SETTINGS = 'SETTINGS';

export function useSettings(key: string) {
  const queryApi = useGetSinglePresetApi<string>(
    {
      type: SETTINGS,
      name: SETTINGS,
    },
    true,
    {
      cacheTime: DURATION_MS.days(30),
      staleTime: DURATION_MS.days(30),
    }
  );
  const { data } = queryApi;

  const apiCreate = useCreatePresetMutationApi();
  const apiUpdate = useUpdatePresetMutationApi(data?.id || '');
  const api: any = data ? apiUpdate : apiCreate;

  const setSetting = () => {
    api.mutateAsync({
      type: SETTINGS,
      name: SETTINGS,
      value: jsonStringify(
        merge(data?.value, {
          [key]: true,
        })
      ),
    });
    return null;
  };

  return {
    data: data?.value?.[key as any],
    setSetting,
    isLoading: queryApi.isLoading,
    isFetched: queryApi.isFetched,
  };
}
