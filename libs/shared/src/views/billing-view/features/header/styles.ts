import { styled } from '@mui/material/styles';

export const Wrapper = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 24px;
`;

export const Content = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled('div')`
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
`;

export const Description = styled('div')`
  color: ${(p) => p.theme.palette.text.secondary};
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
`;
