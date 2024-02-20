import { HttpMethod } from '@myapp/shared/definition';
import { QueryOptions, useBaseQuery } from '@myapp/shared/http';
import { TASK_API_ENDPOINT } from './constants';
import { BrowseTasksRequest, BrowseTasksResponse } from './types';

export function useBrowseTasksApi(
  request: BrowseTasksRequest,
  options?: QueryOptions
) {
  const { workspaceId, ...queryParams } = request;
  return useBaseQuery<BrowseTasksRequest, BrowseTasksResponse>(
    [useBrowseTasksApi.name, workspaceId, ...[queryParams]],
    {
      url: `${TASK_API_ENDPOINT.replace(':wid', workspaceId)}`,
      method: HttpMethod.get,
      params: queryParams,
    },
    {
      ...options,
      onSuccess: (data) => {
        data.content = data.content.map((d) => {
          d.parsedMetadata = d.metadata
            ? JSON.parse(d.metadata as string)
            : undefined;
          return d;
        });
        return data;
      },
    }
  );
}
