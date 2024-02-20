import { ParsedPreset } from '@myapp/shared/definition';
import { QueryOptions } from '@myapp/shared/http';
import { Nullable } from 'vitest';
import { useBrowsePresetApi } from './use-browse-preset-api';

export type GetSinglePresetRequest = { type: string; name?: string | null };

export function useGetSinglePresetApi<T = unknown>(
  params: GetSinglePresetRequest,
  usingCurrentWorkspace = true,
  options?: QueryOptions
) {
  const api = useBrowsePresetApi<T>(
    { ...params, page: 0, size: 1 },
    usingCurrentWorkspace,
    options
  );

  return {
    ...api,
    data: (api.data?.content?.[0] || null) as Nullable<ParsedPreset<T>>,
  };
}
