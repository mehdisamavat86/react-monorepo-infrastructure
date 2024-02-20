import { useBaseQuery } from '@myapp/shared/http/hooks';

export function use{{pascalCase name}}Api() {
  return useBaseQuery<never, never>(
    [use{{pascalCase name}}Api.name, '// DEBUG key'],
    {
      url: '// DEBUG add url',
    }
  );
}
