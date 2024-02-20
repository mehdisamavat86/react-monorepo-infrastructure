import {
    ErrorResponse,
    PaginationRequest,
    PaginationResponse,
    ParsedPreset,
    Preset,
} from '@myapp/shared/definition';
import { QueryOptions } from '@myapp/shared/http';
import { useBaseQuery } from '@myapp/shared/http/hooks';
import { jsonParse } from '@myapp/shared/utils';
import { useWorkspace } from '@myapp/shared/workspace';
import { UseQueryResult } from '@tanstack/react-query';
import { PRESET_API_PREFIX } from './constants';

type BrowsePresetRequest = PaginationRequest<{
  type: string;
  name?: string | null;
}>;

export function useBrowsePresetApi<T = unknown>(
  params: BrowsePresetRequest,
  usingCurrentWorkspace = true,
  options?: QueryOptions
) {
  const workspace = useWorkspace()?.id;
  params.page = params.page || 0;
  params.size = params.size || 5;
  const { type, name, ...filters } = params;

  const api = useBaseQuery<BrowsePresetRequest, PaginationResponse<Preset>>(
    [useBrowsePresetApi.name, type, name, filters],
    {
      url: PRESET_API_PREFIX,
      params: {
        ...params,
        refId: usingCurrentWorkspace ? workspace : undefined,
      },
    },
    {
      ...options,
      onSuccess: (data) => {
        data.content = data.content.map((x) => ({
          ...x,
          value: jsonParse(x.value, {}) as any,
        }));
        options?.onSuccess?.(data);
      },
    }
  );

  const result: UseQueryResult<
    PaginationResponse<ParsedPreset<T>>,
    ErrorResponse
  > = {
    ...(api as any),
    currentPlan: api.data as PaginationResponse<ParsedPreset<T>>,
  };

  return result;
}
