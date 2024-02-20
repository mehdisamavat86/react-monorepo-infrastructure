import { AuthConsumer } from '@myapp/shared/auth';
import { PropsWithChildren } from 'react';

export default function AuthConsumerLayout({ children }: PropsWithChildren) {
  return <AuthConsumer>{children}</AuthConsumer>;
}
