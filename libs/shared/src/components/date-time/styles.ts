import { styled } from '@mui/material/styles';
import { TextEllipsis } from '../text-ellipsis';

export const Wrapper = styled(TextEllipsis)`
  display: block;
  width: fit-content;
  column-gap: 6px;

  &.multiline {
    flex-direction: column;

    > span:last-child {
      font-size: smaller;
    }
  }
`;
