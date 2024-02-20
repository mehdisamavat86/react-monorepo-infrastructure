import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { DragDropContext } from 'react-beautiful-dnd';
import { Icon } from '../icon';

export const Wrapper = styled(DragDropContext)``;

export const List = styled(Box)`
  flex-direction: column;
  padding: 0;
`;

export const Item = styled(Box)`
  display: flex;
  padding: ${(p) => p.theme.spacing(0.5)} 0;
  gap: ${(p) => p.theme.spacing(4)};
  justify-content: space-between;
  align-items: center;
  border: 1px dashed transparent;

  &[style~='position:'] {
    top: auto !important;
    left: auto !important;
    background-color: ${(p) => p.theme.palette.background.neutral};
    border-color: ${(p) => p.theme.palette.divider};
  }
`;

export const Handler = styled(Icon)`
  fill: ${(p) => p.theme.palette.grey[500]};
`;
