import DomPurify from 'dompurify';

export interface SanitizeHtmlProps {
  className?: string;
  html: string | Node;
  options?: DomPurify.Config & { RETURN_TRUSTED_TYPE: true };
}
