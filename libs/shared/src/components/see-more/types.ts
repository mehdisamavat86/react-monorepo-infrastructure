import type { Nullable } from '@myapp/shared/definition';

export interface SeeMoreProps {
  className?: string;
  text: Nullable<string>;
  maxChars: number;
}
