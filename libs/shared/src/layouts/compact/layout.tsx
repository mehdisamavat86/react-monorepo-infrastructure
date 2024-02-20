import { Container, Stack } from '@mui/material';
import { HeaderSimple as Header } from '../_common';

type Props = {
  className?: string;
  children: React.ReactNode;
};

export default function CompactLayout({ className, children }: Props) {
  return (
    <>
      <Header />

      <Container component="main" className={className}>
        <Stack
          sx={{
            py: 12,
            m: 'auto',
            maxWidth: 400,
            minHeight: '100vh',
            textAlign: 'center',
            justifyContent: 'center',
          }}
        >
          {children}
        </Stack>
      </Container>
    </>
  );
}
