import { BorderedCard, CopyToClipboard } from '@myapp/shared/components';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Wrapper = styled(BorderedCard)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${(p) => p.theme.spacing(4)};
  padding: 32px;
  width: 480px;
  height: 480px;
  margin: auto;
`;

export const Title = styled(Typography)<{ success: boolean }>`
  font-size: 21.67px;
  color: ${(p) =>
    p.success ? p.theme.palette.success.main : p.theme.palette.error.main};
`;

export const Text = styled(Typography)<{ success: boolean }>`
  font-size: 14px;
  color: ${(p) =>
    p.success ? p.theme.palette.success.main : p.theme.palette.error.main};
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
`;

export const SessionNumber = styled(Box)`
  font-size: 14px;
  color: ${(p) => p.theme.palette.common.black};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;

  > b {
    width: 200px;
    overflow-wrap: break-word;
    word-wrap: break-word;
    word-break: break-word;
    font-size: 11px;
    font-weight: 400;
  }
`;

export const Copy = styled(CopyToClipboard)`
  float: right;

  &,
  button {
    padding: 0 !important;
    margin: 0 Im !important;
    width: initial !important;
    display: contents;
  }

  svg {
    position: absolute;
    font-size: 14px;
    margin-top: 4px;
    margin-left: 4px;
  }
`;

export const IconWrapper = styled(Box)<{ success: boolean }>`
  color: ${(p) =>
    p.success ? p.theme.palette.success.main : p.theme.palette.error.main};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  width: 60px;
  height: 60px;
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
    outline: 3px solid
      ${(p) =>
        p.success ? p.theme.palette.success.main : p.theme.palette.error.main};
    opacity: 0.5;
  }

  ::after {
    outline-width: 8px;
    opacity: 0.2;
  }
`;
