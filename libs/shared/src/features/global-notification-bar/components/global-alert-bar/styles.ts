import { ClosableAlert } from '@myapp/shared/components';
import { styled } from '@mui/material/styles';

export const Wrapper = styled(ClosableAlert)`
  padding: ${(p) => p.theme.spacing(0.5)};
  border-radius: 0;

  &,
  .MuiAlert-message,
  .MuiAlertTitle-root {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${(p) => p.theme.spacing(4)};
    color: ${(p) => p.theme.palette.text.primary};
    margin: 0;
  }

  .MuiAlert-message {
    padding: 0;
  }

  .MuiAlert-icon {
    padding: ${(p) => p.theme.spacing(1.0)};
    margin: 0;
    background: ${(p) =>
      p.theme.palette.mode === 'dark'
        ? p.theme.palette.background.neutral
        : p.theme.palette.common.white};
    border-radius: ${(p) => p.theme.shape.borderRadius}px;
  }

  .MuiAlert-action {
    display: none;
  }

  &.closable {
    .MuiAlert-action {
      display: contents;
    }
  }
`;
