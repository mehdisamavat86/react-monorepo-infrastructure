import { ConfirmDialog } from '@myapp/shared/components';
import { TextField as BaseTextField } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Wrapper = styled(ConfirmDialog)``;

export const Description = styled('div')`
  display: flex;
  align-items: center;
  gap: 5px;
  color: ${(p) =>
    p.theme.palette.mode === 'dark'
      ? p.theme.palette.grey[700]
      : p.theme.palette.grey[500]};
  font-size: 13.069px;
  font-weight: 700;
  line-height: 12.606px;
`;

export const TextField = styled(BaseTextField)`
  && {
    label {
      font-size: 24.271px;
      font-weight: 500;
      line-height: 33.606px;
      color: ${(p) => p.theme.palette.text.primary};
      transform: translate(12px, 6px) !important;
    }
  }

  input {
    width: auto;
    margin-top: 9px;
  }
`;

export const Credit = styled('div')`
  display: flex;
  gap: 3px;
  font-size: 24.271px;
  font-weight: 500;
  line-height: 33.606px;
  color: ${(p) => p.theme.palette.text.primary};
`;

export const FromTitle = styled('div')`
  display: flex;
  gap: 6px;
  align-items: center;

  svg {
    color: ${(p) => p.theme.palette.primary.main};
  }
`;
