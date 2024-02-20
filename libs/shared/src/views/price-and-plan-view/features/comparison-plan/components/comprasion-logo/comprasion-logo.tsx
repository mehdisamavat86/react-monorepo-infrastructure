import { Box, Typography } from '@mui/material';
import { classnames } from '@myapp/shared/utils';
import { memo } from 'react';
import * as Styled from './styles';
import * as SX from './sx';
import type { ComprasionLogoProps as Props } from './types';

export const ComprasionLogo = memo(({ className }: Props) => {
  return (
    <Styled.Wrapper
      className={classnames('ComprasionLogo', className)}
      sx={SX.root}
      justifyContent="center"
      alignItems="center"
    >
      <Box
        component="img"
        src="/assets/images/comparison-logo.svg"
        sx={SX.svg}
      />
      <Typography sx={SX.title}>Comparison Plan</Typography>
      <Box component="img" src="/assets/images/squiggle.svg" />
    </Styled.Wrapper>
  );
});

ComprasionLogo.displayName = 'ComprasionLogo';
