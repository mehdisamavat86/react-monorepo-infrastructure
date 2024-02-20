import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Wrapper = styled(Box)<{ success: boolean }>`
  color: ${(p) =>
    p.success ? p.theme.palette.success.light : p.theme.palette.error.light};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 46px;
  width: 70px;
  height: 70px;
  position: relative;
  background: ${(p) =>
    p.success
      ? p.theme.palette.success.lighter
      : p.theme.palette.error.lighter};

  &,
  ::before,
  ::after {
    border-radius: 100%;
  }

  ::before,
  ::after {
    content: ' ';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    outline: 0px solid
      ${(p) =>
        p.success
          ? p.theme.palette.success.lighter
          : p.theme.palette.error.lighter};
    filter: brightness(105%);
  }

  ::after {
    outline-width: 8px;
    filter: brightness(${(p) => (p.success ? 110 : 105)}%);
  }
`;
