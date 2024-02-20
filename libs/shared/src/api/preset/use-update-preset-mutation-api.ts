import { HttpMethod, ParsedPreset, Preset } from '@myapp/shared/definition';
import { baseQueryClientUpdatePaginatedQueries } from '@myapp/shared/http/base-query-client';
import { useBaseMutation } from '@myapp/shared/http/hooks';
import { jsonParse, jsonStringify } from '@myapp/shared/utils';
import { PRESET_API_PREFIX } from './constants';
import { useBrowsePresetApi } from './use-browse-preset-api';

export function useUpdatePresetMutationApi<T = any>(id: string) {
  return useBaseMutation<Preset, ParsedPreset<T>>(
    {
      url: `${PRESET_API_PREFIX}/${id}`,
      method: HttpMethod.patch,
    },
    {
      onMutate(variables) {
        variables.value = jsonStringify(variables.value) || '';
      },
      onSuccess: (responseData) => {
        responseData.value = jsonParse(responseData.value, responseData.value);
        baseQueryClientUpdatePaginatedQueries(
          [useBrowsePresetApi.name, responseData.type],
          responseData
        );
      },
    }
  );
}
