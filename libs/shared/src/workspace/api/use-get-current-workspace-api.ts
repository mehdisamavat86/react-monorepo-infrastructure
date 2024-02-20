import { useAuthContext } from '@myapp/shared/auth';
import { PaginationResponse, Workspace } from '@myapp/shared/definition';
import { useBaseQuery } from '@myapp/shared/http/hooks';
import { DURATION_MS } from '@myapp/shared/utils';
import { WORKSPACE_ROOT_ENDPOINT } from '../constants/endpoints';

export function useGetCurrentWorkspaceApi(
  successCallback?: (data: PaginationResponse<Workspace>) => void
) {
  const auth = useAuthContext();

  return useBaseQuery<unknown, PaginationResponse<Workspace>>(
    [useGetCurrentWorkspaceApi.name],
    {
      url: WORKSPACE_ROOT_ENDPOINT,
      params: { page: 0, size: 1 },
    },
    {
      cacheTime: DURATION_MS.day,
      staleTime: DURATION_MS.day,
      enabled: !!auth.token,
      onSuccess: successCallback,
    }
  );
}
