import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const ClampText = styled(Typography)<{
  lines?: number;
  width?: number | string;
  size?: 'small' | 'smaller';
}>`
  margin: 0;
  padding: 0;
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  overflow-wrap: break-word;
  white-space: normal;
  -webkit-line-clamp: ${(p) => p.lines || 1};
  -moz-line-clamp: ${(p) => p.lines || 1};
  -ms-line-clamp: ${(p) => p.lines || 1};
  line-clamp: ${(p) => p.lines || 1};
  height: calc(${(p) => p.lines || 1} * 1.5em);
  width: ${(p) => p.width || '100%'};
  font-size: ${(p) => p.size || 'auto'};
`;
