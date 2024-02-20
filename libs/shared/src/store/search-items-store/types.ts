import { Nullable } from '@myapp/shared/definition';

export interface SearchItem {
  logo_url: string;
  domain: string;
  annual_revenue?: number;
  sic_codes?: string[];
  company_name: string;
  company_type?: string;
  company_name_for_email?: string;
  description_summary: Nullable<string>;
  latest_funding: Nullable<string>;
  latest_funding_amount: Nullable<number>;
  last_raised_at: Nullable<number>;
  total_funding: Nullable<number>;
  company_hq: Nullable<string[]>;
  company_phone?: Nullable<string[]>;
  company_phone_text?: Nullable<string>;
  size: string;
  country?: string;
  company_city?: string;
  industry: string;
  technologies: Nullable<string[]>;
  fml_languages: Nullable<string[]>;
  inferred_revenue: Nullable<string>;
  relevancy: string;
  founded?: string;
  linkedin_exists: boolean;
  linkedin_id: Nullable<string>;
  linkedin_specialties_tags: Nullable<string[]>;
  facebook_exists: boolean;
  facebook_id: Nullable<string>;
  twitter_exists: boolean;
  twitter_id: Nullable<string>;
  similarity_score: number;
}

export interface SearchItemsStoreData {
  searchItems: SearchItem[];
  setSearchItems: (items: SearchItem[]) => void;
}
