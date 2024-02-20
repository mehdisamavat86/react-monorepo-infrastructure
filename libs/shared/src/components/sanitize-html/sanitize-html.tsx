import { sanitize } from '@myapp/shared/utils';
import { memo } from 'react';
import type { SanitizeHtmlProps as Props } from './types';

export const SanitizeHtml = memo(({ className, html, options }: Props) => {
  // eslint-disable-next-line react/no-danger
  return <div dangerouslySetInnerHTML={sanitize(html, options)} />;
});

SanitizeHtml.displayName = 'SanitizeHtml';
