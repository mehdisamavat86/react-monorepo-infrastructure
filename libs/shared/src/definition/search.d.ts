import { PaginationResponse } from '@myapp/shared/definition';

export type SearchBrowseParams = {
  value?: string;
} & SearchQueryFilters;

export type SearchQueryFilters = {
  [key: string]: string;
};

export type SearchResponse = PaginationResponse<SearchItem>;

// TODO saman: changed from upper-cased to first-letter-uppercased, look for possible side-effects
export enum SearchType {
  similarity = 'Similarity',
  text = 'Text',
  company = 'Company',
  people = 'People',
}
