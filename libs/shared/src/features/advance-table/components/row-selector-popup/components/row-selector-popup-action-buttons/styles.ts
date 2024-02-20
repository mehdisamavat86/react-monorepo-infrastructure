import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { ContentRow as ContentRowBase } from '../../styles';

export const Wrapper = styled(ContentRowBase)``;

export const ActionButton = styled(Button)`
  font-size: ${(p) => p.theme.typography.caption.fontSize};
`;
