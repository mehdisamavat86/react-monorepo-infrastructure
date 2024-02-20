import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Wrapper = styled(Paper)`
  background-color: ${(p) => p.theme.palette.background.neutral};
  color: ${(p) => p.theme.palette.text.primary};
  border: 1px solid ${(p) => p.theme.palette.divider};
  padding: 12px;
  width: 100%;
  white-space: pre;
  overflow-y: auto;
`;
