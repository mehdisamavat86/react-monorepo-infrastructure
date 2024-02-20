import { HttpMethod } from '@myapp/shared/definition';
import { useBaseMutation } from '@myapp/shared/http/hooks';

export function use{{pascalCase name}}MutationApi() {
  return useBaseMutation<never, never>({
    url: '// DEBUG add url',
    method: HttpMethod.post,
  });
}