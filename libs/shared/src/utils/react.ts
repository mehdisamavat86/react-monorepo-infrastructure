import DomPurify from 'dompurify';
import { Fragment, cloneElement, createElement, isValidElement } from 'react';
import { isPrimitiveType } from './object';

export function isReactRenderableElement(el: any) {
  return isValidElement(el) || (typeof el === 'object' && '$$typeof' in el);
}

export function renderElement(
  el: any,
  props?: Record<string, any>,
  defaultValue: any = el
): JSX.Element {
  if (el !== null) {
    if (isReactRenderableElement(el) || typeof el === 'function')
      return isValidElement(el)
        ? cloneElement(el, props)
        : createElement(el, props);
    if (el && isPrimitiveType(el))
      return createElement(Fragment, props, String(el));
  }
  return defaultValue && renderElement(defaultValue, props, null);
}

const defaultSanitizeOptions = {
  allowedTags: ['ul', 'li', 'b', 'i', 'em', 'strong', 'a'],
  allowedAttributes: {
    a: ['href'],
  },
  allowedIframeHostnames: [],
};

export const sanitize = (
  dirty: string | Node,
  options?: DomPurify.Config & { RETURN_TRUSTED_TYPE: true }
) => ({
  __html: DomPurify.sanitize(dirty, {
    ...defaultSanitizeOptions,
    ...options,
  }) as unknown as string,
});
