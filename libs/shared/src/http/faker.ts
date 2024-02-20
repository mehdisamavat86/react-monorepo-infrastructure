export function fakeBrowseResponse<T = any>(
  content: T[],
  options: {
    pageNumber?: number;
    number?: number;
    size?: number;
    totalPages?: number;
    totalElements?: number;
    numberOfElements?: number;
  } = {}
) {
  const pageSize = options.size || 5;
  const pageNumber = options.size || 5;

  return {
    content,
    totalElements: options.totalElements ?? pageSize,
    totalPages: options.totalPages ?? 1,
    size: pageSize,
    number: pageNumber,
    numberOfElements: options.numberOfElements ?? content.length,
    empty: true,
    first: true,
    last: true,
    sort: {
      empty: true,
      sorted: false,
      unsorted: true,
    },
    pageable: {
      sort: {
        empty: true,
        sorted: false,
        unsorted: true,
      },
      offset: 0,
      pageNumber,
      pageSize,
      paged: true,
      unpaged: false,
    },
  };
}

export function fakeBrowseResponseOfQuery<T = any>(
  content: T[],
  options: {
    pageNumber?: number;
    number?: number;
    size?: number;
    totalPages?: number;
    totalElements?: number;
    numberOfElements?: number;
  } = {}
) {
  return {
    data: fakeBrowseResponse(content, options),
    status: 'success',
    isError: false,
    isSuccess: true,
  } as any;
}
