import { HttpMethod } from '@myapp/shared/definition';
import { useBaseQuery } from '@myapp/shared/http/hooks';
import { GET_FILE_ROOT_ENDPOINT } from '@myapp/shared/workspace/constants/endpoints';
import { GetExportFileResponse } from './types';

export function useGetExportFileQuery(id: string, workspaceId: string) {
  return useBaseQuery<void, GetExportFileResponse>(
    [id, workspaceId],
    {
      url: `${GET_FILE_ROOT_ENDPOINT}/${workspaceId}/tasks/${id}`,
      method: HttpMethod.get,
      params: {
        action: 'export',
      },
    },
    {}
  );
}
