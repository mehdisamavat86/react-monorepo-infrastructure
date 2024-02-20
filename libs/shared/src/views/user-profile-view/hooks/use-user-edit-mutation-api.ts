import { AuthUser, HttpMethod } from '@myapp/shared/definition';
import { useBaseMutation } from '@myapp/shared/http/hooks';

export function useUserEditMutationApi() {
  return useBaseMutation<AuthUser, AuthUser>({
    url: '/customer-management/um/users/profile',
    method: HttpMethod.put,
  });
}
