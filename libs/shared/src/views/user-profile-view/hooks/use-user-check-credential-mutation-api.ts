import { HttpMethod } from '@myapp/shared/definition';
import { useBaseMutation } from '@myapp/shared/http/hooks';

export function useUserCheckCredentialMutationApi() {
  return useBaseMutation<{ password: string }, { valid: boolean }>({
    url: '/customer-management/um/users/profile?check=credential',
    method: HttpMethod.post,
  });
}
