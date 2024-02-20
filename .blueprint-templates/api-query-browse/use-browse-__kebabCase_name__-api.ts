import {
    PaginationRequest,
    PaginationResponse,
} from '@myapp/shared/definition';
import { useBaseQuery } from '@myapp/shared/http/hooks';

export function useBrowse{{pascalCase name}}Api(params: PaginationRequest) {
  const { page = 0, ...other } = params;

  return useBaseQuery<typeof params, PaginationResponse<any /* DEBUG type */>>(
    [useBrowse{{pascalCase name}}Api.name, page, other],
    {
      url: '// DEBUG add url',
      params,
    }
  );
}
