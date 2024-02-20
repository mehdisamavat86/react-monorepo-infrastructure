import { HttpMethod, Preset } from '@myapp/shared/definition';
import { baseQueryClientUpdatePaginatedQueries } from '@myapp/shared/http/base-query-client';
import { useBaseMutation } from '@myapp/shared/http/hooks';
import { PRESET_API_PREFIX } from './constants';
import { useBrowsePresetApi } from './use-browse-preset-api';

export function useDeletePresetMutationApi(preset: Preset) {
  return useBaseMutation(
    {
      url: `${PRESET_API_PREFIX}/${preset.id}`,
      method: HttpMethod.delete,
    },
    {
      onSuccess: () => {
        baseQueryClientUpdatePaginatedQueries(
          [useBrowsePresetApi.name, preset.type],
          preset,
          true
        );
      },
    }
  );
}
