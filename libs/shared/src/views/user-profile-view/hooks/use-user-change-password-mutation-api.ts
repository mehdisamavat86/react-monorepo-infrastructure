import { HttpMethod } from '@myapp/shared/definition';
import { useBaseMutation } from '@myapp/shared/http/hooks';

export function useUserChangePasswordMutationApi() {
  return useBaseMutation<{ password: string; currentPassword: string }, never>({
    url: '/customer-management/um/users/profile?change=password',
    method: HttpMethod.put,
  });
}
