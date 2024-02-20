import { HttpMethod } from '@myapp/shared/definition';
import { useBaseMutation } from '@myapp/shared/http';
import { baseQueryClient } from '@myapp/shared/http/base-query-client';
import { useWorkspace } from '@myapp/shared/workspace';
import { TASK_API_ENDPOINT } from './constants';
import { useBrowseTasksApi } from './use-browse-tasks-api';

export function useDeleteTaskMutationApi(id?: string) {
  const workspace = useWorkspace()?.id;
  return useBaseMutation(
    {
      url: `${TASK_API_ENDPOINT.replace(':wid', String(workspace))}/${id}`,
      method: HttpMethod.delete,
    },
    {
      onSettled: () => {
        baseQueryClient.invalidateQueries([useBrowseTasksApi.name]);
      },
    }
  );
}
