import { Box, type BoxProps } from '@mui/material';

export default function Main({ children, sx, ...other }: BoxProps) {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        minHeight: 1,
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '100%',
        overflowY: 'auto',
        ...sx,
      }}
      {...other}
    >
      {children}
    </Box>
  );
}
