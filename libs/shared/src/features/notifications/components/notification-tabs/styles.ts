import { Tabs } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Wrapper = styled(Tabs)`
  border-bottom: 1px solid
    ${(p) =>
      p.theme.palette.mode !== 'dark'
        ? p.theme.palette.grey[300]
        : p.theme.palette.grey[700]};
  margin-bottom: ${(p) => p.theme.spacing(2)};
  width: 100%;

  & .MuiTabs-flexContainer {
    margin-bottom: ${(p) => p.theme.spacing(1)};
    height: 100%;
  }

  & .MuiTabScrollButton-root {
    display: none;
  }
`;
