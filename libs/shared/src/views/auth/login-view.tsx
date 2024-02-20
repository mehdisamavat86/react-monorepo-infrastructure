import { useSearchParams } from '@myapp/shared/router';
import { ErrorCard } from './components/error-card';
import { SignInLoading } from './components/sign-in-loading';

export function LoginView() {
  const { code, error, error_description } = useSearchParams();

  if (error) return <ErrorCard message={String(error_description || error)} />;

  if (!code) return <ErrorCard message="Invalid code provided" />;

  return <SignInLoading code={String(code)} />;
}
