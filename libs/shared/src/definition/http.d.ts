export enum HttpMethod {
  get = 'GET',
  put = 'PUT',
  post = 'POST',
  patch = 'PATCH',
  delete = 'DELETE',
}

export type PaginationRequest<
  T extends unknown | Record<string, any> = unknown
> = T & {
  page?: number;
  size?: number;
  sort?: string;
  offset?: number;
};

export interface PaginationResponse<T = any> {
  content: T[];
  totalPages: number;
  totalElements: number;
  last: boolean;
  size: number;
  number: number;
  sort: Sort;
  numberOfElements: number;
  first: boolean;
  empty: boolean;
  metadata?: ResponseMetadata;
  top?: T[];
}

export interface ErrorResponse {
  message: string;
  cause: {
    code: number;
    subCode: number;
    message: string;
  };
}

interface Pageable {
  sort: Sort;
  offset: number;
  pageNumber: number;
  pageSize: number;
  paged: boolean;
  unpaged: boolean;
}

interface Sort {
  empty: boolean;
  unsorted: boolean;
  sorted: boolean;
}

export type ResponseMetadata = Record<string, ResponseMetadataItem[]>;

// export interface ResponseMetadataItem {
//   value: string;
//   count: number;
// }
export type ResponseMetadataItem = any;

// TODO Sayad replace all sort mods in project with this enum
export enum SortMode {
  ASC = 'asc',
  DESC = 'desc',
}
