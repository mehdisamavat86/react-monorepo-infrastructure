import { BorderedCard } from '@myapp/shared/components';
import { Box as BaseBox } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Box = styled(BaseBox)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;

  ${(p) => p.theme.breakpoints.down('lg')} {
    gap: 32px;
  }
`;

export const Wrapper = styled(BorderedCard)`
  padding: 0;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 210px;
  box-shadow: none;
  border: none;

  &.active {
    &,
    :hover {
      outline: 2px solid ${(p) => p.theme.palette.success.dark};
    }
  }

  &.iSPopular,
  :hover {
    outline: 2px solid ${(p) => p.theme.palette.primary.main};
  }

  ${(p) => p.theme.breakpoints.down('lg')} {
    width: 170px;
  }
`;

export const ContentWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 40px;
  padding: 28px 18px;
  height: 100%;

  ${(p) => p.theme.breakpoints.down('lg')} {
    gap: 32px;
  }
`;

export const Title = styled(BorderedCard)`
  font-size: 25px;
  font-weight: 300;
  line-height: 33.6px;
  text-align: center;
  padding: 4px;

  ${(p) => p.theme.breakpoints.down('lg')} {
    font-size: 18px;
    line-height: 24px;
  }
`;

export const Content = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 25px;

  ${(p) => p.theme.breakpoints.down('lg')} {
    gap: 12px;
  }
`;

export const AmountMonth = styled('span')`
  display: flex;
  align-items: center;
  font-size: 29.125px;
  line-height: 40.327px;

  &,
  * {
    font-weight: 500;
  }

  span {
    font-size: 32px;
  }

  ${(p) => p.theme.breakpoints.down('lg')} {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const Credit = styled('div')`
  font-size: 15px;
  font-weight: 700;
  line-height: 22.606px;

  ${(p) => p.theme.breakpoints.down('lg')} {
    font-size: 12px;
    line-height: 14px;
  }
`;

export const Year = styled('div')`
  display: flex;
  align-items: center;
  font-size: 15px;
  font-weight: 700;
  line-height: 22.606px;
  color: ${(p) => p.theme.palette.grey[500]};
  gap: 5px;

  ${(p) => p.theme.breakpoints.down('lg')} {
    font-size: 12px;
    line-height: 14px;
  }
`;
