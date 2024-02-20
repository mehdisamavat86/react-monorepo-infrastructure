import { HttpMethod, ParsedPreset, Preset } from '@myapp/shared/definition';
import {
    baseQueryClient,
    baseQueryClientUpdatePaginatedQueries,
} from '@myapp/shared/http/base-query-client';
import { useBaseMutation } from '@myapp/shared/http/hooks';
import { jsonParse, jsonStringify } from '@myapp/shared/utils';
import { useWorkspace } from '@myapp/shared/workspace';
import { PRESET_API_PREFIX } from './constants';
import { useBrowsePresetApi } from './use-browse-preset-api';

export function useCreatePresetMutationApi<T = any>(
  usingCurrentWorkspace = true
) {
  const workspace = useWorkspace()?.id;

  return useBaseMutation<
    Pick<Preset, 'name' | 'type' | 'value' | 'favorite'>,
    ParsedPreset<T>
  >(
    {
      url: `${PRESET_API_PREFIX}`,
      method: HttpMethod.post,
    },
    {
      onMutate(variables: any) {
        if (usingCurrentWorkspace) variables.refId = workspace;
        variables.value = jsonStringify(variables.value);
      },
      onSettled(data) {
        baseQueryClient.invalidateQueries([
          useBrowsePresetApi.name,
          data?.type,
        ]);
      },
      onSuccess: (response) => {
        response.value = jsonParse(response.value, response.value);
        baseQueryClientUpdatePaginatedQueries(
          [useBrowsePresetApi.name, response.type],
          response
        );
      },
    }
  );
}
