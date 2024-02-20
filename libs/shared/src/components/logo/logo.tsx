import { Box, type BoxProps } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { forwardRef } from 'react';
import * as Styled from './styles';

export interface LogoProps extends BoxProps {
  disabledLink?: boolean;
  full?: boolean;
}

const Logo = forwardRef<HTMLDivElement, LogoProps>(
  ({ disabledLink = false, sx, full, ...other }, ref) => {
    const theme = useTheme();
    const logoFull =
      theme.palette.mode === 'dark' ? 'logo_full_dark' : 'logo_full';
    const logoName = full ? logoFull : 'logo_single';
    const img = <Styled.Img src={`/assets/logo/${logoName}.svg`} alt="logo" />;

    return (
      <Box
        ref={ref}
        component="div"
        sx={{
          height: 40,
          width: '100%',
          display: 'inline-flex',
          ...sx,
        }}
        {...other}
      >
        {disabledLink ? img : <Styled.Link to="/">{img}</Styled.Link>}
      </Box>
    );
  }
);

export default Logo;
