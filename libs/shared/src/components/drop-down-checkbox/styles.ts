import { styled } from '@mui/material/styles';
import { DropDown } from '../drop-down/drop-down';

export const Wrapper = styled(DropDown)`
  .MuiInputBase-input {
    max-width: ${(p) => (p.sx as any)?.width || '200px'};
    text-overflow: ellipsis;
  }
`;
