import { Link, Stack, Typography } from '@mui/material';
import { classnames } from '@myapp/shared/utils';
import { memo } from 'react';
import * as Styled from './styles';
import * as SX from './sx';
import type { ContactUsProps as Props } from './types';

export const ContactUs = memo(({ className }: Props) => {
  return (
    <Styled.Wrapper className={classnames('ContactUs', className)} sx={SX.root}>
      <Stack justifyContent="center" alignItems="center" gap={1}>
        <Typography sx={SX.title}>Custom Plan</Typography>
        <Typography sx={SX.description}>
          Needs more? Tell us about your needs.
        </Typography>
        <Link
          href="/"
          target="_blank"
          sx={SX.contactLink}
        >
          Contact us
        </Link>
      </Stack>
    </Styled.Wrapper>
  );
});

ContactUs.displayName = 'ContactUs';
