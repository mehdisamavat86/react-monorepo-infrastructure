import { Button as BaseButton, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import * as StyledPlanItem from '../subscription-plan-item/styles';

export const Wrapper = styled(Box)`
  width: 100%;
  background: ${(p) => p.theme.palette.background.paper};
  justify-content: space-between;
  flex-direction: row;
  display: flex;
  padding: 3vh 10vw;
  align-items: center;
  border: 3px solid ${(p) => p.theme.palette.divider};
  border-radius: ${(p) => p.theme.spacing(1)};

  ${(p) => p.theme.breakpoints.up('md')} {
    padding: 3vh 12vw;
  }

  ${(p) => p.theme.breakpoints.down('sm')} {
    flex-direction: column;
    align-items: center;
    gap: ${(p) => p.theme.spacing(2)};
    padding: ${(p) => p.theme.spacing(2)};
  }
`;

export const WrapperStart = styled(Box)`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
  text-align: start;

  ${(p) => p.theme.breakpoints.down('sm')} {
    text-align: center;
  }
`;

export const WrapperEnd = styled(Box)``;

export const Title = styled(StyledPlanItem.Title)`
  text-align: inherit;
  color: ${(p) => p.theme.palette.text.primary};
  font-weight: ${(p) => p.theme.typography.fontWeightBold};
  font-size: ${(p) => p.theme.typography.pxToRem(18)};
  border: none;
  box-shadow: none;
  padding: 0;
  margin: 0;
`;

export const NeedMore = styled(Box)`
  text-align: inherit;
  color: ${(p) => p.theme.palette.grey[600]};
  font-weight: 700;

  ${(p) => p.theme.breakpoints.down('sm')} {
    text-align: center;
  }
`;

export const Button = styled(BaseButton)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${(p) => p.theme.spacing(0.5)};
`;
