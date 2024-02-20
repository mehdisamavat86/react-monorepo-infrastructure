import { useNavigate } from 'react-router-dom';

export const useRouter = () => {
  const redirect = useNavigate();
  const replace = (pathname: string) => redirect(pathname, { replace: true });
  return { redirect, replace };
};
