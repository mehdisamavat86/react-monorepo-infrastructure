export interface HeaderBreadcrumbsProps {
  className?: string;
  config: {
    routes: Record<string, string>;
    titles: Record<string, string>;
  };
}

export type BreadcrumbNameMap = Record<string, string>;
