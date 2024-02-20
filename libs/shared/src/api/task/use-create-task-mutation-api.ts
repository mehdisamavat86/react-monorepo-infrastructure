import { HttpMethod } from '@myapp/shared/definition';
import { useBaseMutation, type MutationOptions } from '@myapp/shared/http';
import { useWorkspace } from '@myapp/shared/workspace';
import { TASK_API_ENDPOINT } from './constants';
import type { CreateTaskRequest, Task, TaskData, TaskMetadata } from './types';

export function useCreateTaskMutationApi<
  T extends TaskData,
  M extends TaskMetadata = TaskMetadata
>(options?: MutationOptions) {
  const workspace = useWorkspace()?.id;
  return useBaseMutation<CreateTaskRequest<T>, Task<T, M>>(
    {
      url: `${TASK_API_ENDPOINT.replace(':wid', String(workspace))}`,
      method: HttpMethod.post,
    },
    options
  );
}
