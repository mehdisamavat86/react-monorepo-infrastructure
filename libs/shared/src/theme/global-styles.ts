import { Box } from '@mui/material';
import { alpha, keyframes, styled } from '@mui/material/styles';
import { palette as themePalette } from './palette';

const palette = themePalette('light');

export const spinningAnimation = keyframes`
  0% {transform: rotate(0deg)}
  100% {transform: rotate(360deg)}
`;

export const Global = styled(Box)`
  input:-webkit-autofill {
    -webkit-background-clip: text;
  }

  .spinning {
    animation: ${spinningAnimation} 1s linear infinite;
  }

  .MuiAutocomplete-listbox::-webkit-scrollbar-track {
    padding: 0;
    background-color: transparent;
  }

  .MuiAutocomplete-listbox::-webkit-scrollbar {
    width: 8px;
  }

  .MuiAutocomplete-listbox::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background-color: ${(p) => alpha(p.theme.palette.grey[600], 0.48)};
  }
`;
