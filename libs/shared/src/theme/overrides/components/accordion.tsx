import {
  accordionClasses,
  accordionSummaryClasses,
  typographyClasses,
} from '@mui/material';
import { Theme } from '@mui/material/styles';

export default function Accordion(theme: Theme) {
  return {
    MuiAccordion: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
          [`&.${accordionClasses.expanded}`]: {
            boxShadow: theme.customShadows.z8,
            borderRadius: theme.shape.borderRadius,
            backgroundColor: theme.palette.background.paper,
            margin: 'initial',
          },
          [`&.${accordionClasses.disabled}`]: {
            backgroundColor: 'transparent',
          },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          paddingLeft: theme.spacing(2),
          paddingRight: theme.spacing(1),
          [`&.${accordionSummaryClasses.disabled}`]: {
            opacity: 1,
            color: theme.palette.action.disabled,
            [`& .${typographyClasses.root}`]: {
              color: 'inherit',
            },
          },
          [`&.${accordionSummaryClasses.expanded}`]: {
            minHeight: 'auto',
            [`& .${accordionSummaryClasses.content}`]: {
              margin: '12px 0',
            },
          },
        },
        expandIconWrapper: {
          color: 'inherit',
        },
      },
    },
  };
}
