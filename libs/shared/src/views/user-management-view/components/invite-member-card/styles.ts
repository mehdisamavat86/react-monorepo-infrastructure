import { Card } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Wrapper = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding: 36px 23px;
  width: 465px;
  margin: auto;
`;

export const Header = styled('div')``;

export const Content = styled('div')`
  text-align: center;
  width: 100%;
`;

export const Title = styled('div')`
  > p {
    font-size: 18px;
    font-weight: 700;
    line-height: 28px;
  }
`;

export const Description = styled('p')`
  > p {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
  }
`;

export const Footer = styled('div')``;
