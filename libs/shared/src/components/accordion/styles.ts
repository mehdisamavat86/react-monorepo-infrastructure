import {
  Accordion,
  AccordionSummary as BaseAccordionSummary,
} from '@mui/material';
import { alpha, styled } from '@mui/material/styles';

export const Wrapper = styled(Accordion)``;

export const Summary = styled(BaseAccordionSummary)`
  padding: ${(p) => `${p.theme.spacing(1)} ${p.theme.spacing(2)}`};
  background: initial;

  &.expanded {
    padding: ${(p) => `${p.theme.spacing(0.5)} ${p.theme.spacing(2)}`};
    background: ${(p) => alpha(p.theme.palette.primary.main, 0.1)};
  }

  .MuiAccordionSummary-content {
    align-items: center;
    gap: ${(p) => p.theme.spacing(0.5)};
  }
`;
