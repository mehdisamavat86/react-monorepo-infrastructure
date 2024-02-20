import { trimEnd } from 'lodash-es';
import { usePathname } from './use-pathname';

type ReturnType = boolean;

export function useActiveLink(path?: string, deep = true): ReturnType {
  const pathname = usePathname() ?? '';

  const checkPath = path?.startsWith('#');

  const currentPath = path === '/' ? '/' : path ?? '/';

  const normalActive =
    !checkPath && trimEnd(pathname, '/') === trimEnd(currentPath, '/');

  const deepActive = !checkPath && pathname.startsWith(currentPath);

  return deep ? deepActive : normalActive;
}
