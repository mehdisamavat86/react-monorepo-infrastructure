import { HttpMethod } from '@myapp/shared/definition';
import { useBaseMutation } from '@myapp/shared/http';
import { baseQueryClient } from '@myapp/shared/http/base-query-client';
import { useWorkspace } from '@myapp/shared/workspace';
import { TASK_API_ENDPOINT } from './constants';
import type { Task, TaskData, TaskMetadata, UpdateTaskRequest } from './types';
import { useBrowseTasksApi } from './use-browse-tasks-api';

export function useUpdateTaskMutationApi<
  T extends TaskData,
  M extends TaskMetadata = TaskMetadata
>(id?: string) {
  const workspace = useWorkspace()?.id;
  return useBaseMutation<UpdateTaskRequest<T>, Task<T, M>>(
    {
      url: `${TASK_API_ENDPOINT.replace(':wid', String(workspace))}/${id}`,
      method: HttpMethod.patch,
    },
    {
      onSettled: () => {
        baseQueryClient.invalidateQueries([useBrowseTasksApi.name]);
      },
    }
  );
}
