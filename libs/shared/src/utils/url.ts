import { trimEnd, trimStart } from 'lodash-es';
import q from 'querystring';
import { API_MOCK_URL, DOWNLOAD_BASE_URL } from '../constants';
import { DownloadableFileLink } from '../definition';

const HTTP_REGEX = new RegExp(
  '^(https?:\\/\\/)?' + // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
    '(\\#[-a-z\\d_]*)?$',
  'i'
);

export function toUrlQueryString(data: Record<string, any>) {
  return q.stringify(data);
}

export function parseUrlQueryString<T extends Record<string, any> = any>(
  url?: string
) {
  return (url ? q.parse(url.split('?')[1]) : {}) as T;
}

export function toUrl(url: string, params?: Record<string, any>): string {
  const sep = url.includes('?') ? '&' : '?';
  const queryString = toUrlQueryString(params ?? {});
  if (queryString.length) return `${url}${sep}${queryString}`;
  return `${url}`;
}

export function urlJoin(...paths: (string | null | undefined)[]): string {
  return paths
    .filter(Boolean)
    .map((p) => (p?.endsWith('://') ? p : trimStart(trimEnd(p!, '/'), '/')))
    .filter((x) => x !== '/')
    .join('/')
    .replace('///', '//');
}

export function toValidDownloadUrl(url?: string) {
  if (!url) return url;
  if (!url.startsWith('http')) url = urlJoin(DOWNLOAD_BASE_URL, url);
  return url;
}

export function isValidDownloadLink(value?: DownloadableFileLink) {
  return !!(value?.excel || value?.csv || value?.tsv);
}

export function urlParamify(
  url: string,
  params?: Record<string, any>,
  queryString?: Record<string, any>
) {
  if (params)
    Object.keys(params).forEach((k) => {
      url = toUrl(url.replaceAll(`:${k}`, String(params[k])), queryString);
    });

  return url;
}

export const toRoute = urlParamify;

export function urlToValidHttps(url?: string) {
  if (!url) return url;
  if (!url.startsWith('http')) url = urlJoin('https://', url);

  return url;
}

export function urlMock(path: string, json = true) {
  return urlJoin(API_MOCK_URL, `${path}${json ? '.json' : ''}`);
}

export const isValidDomain = (url: string) => {
  return HTTP_REGEX.test(url);
};

export function trimCurrentHostname(url?: string) {
  return url?.replace(window.origin, '') || '';
}

export function decodeQueryParamValues(encoded?: string, separator?: string) {
  return encoded?.split(separator ?? ',') || [];
}

export function encodeQueryParamValues(decoded?: string[], separator?: string) {
  return decoded?.join(separator ?? ',') || undefined;
}

export function isValidUrl(value: string) {
  try {
    // eslint-disable-next-line no-new
    new URL(value);
    return true;
  } catch (err) {
    return false;
  }
}
