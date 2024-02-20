import { toUrl } from '@myapp/shared/utils';
import { useNavigate } from 'react-router-dom';

export function useRedirect() {
  const redirect = useNavigate();

  return (url: string, params?: Record<string, any>) =>
    redirect(toUrl(url, params));
}
