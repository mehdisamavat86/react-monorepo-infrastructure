import type { TooltipProps, TypographyProps } from '@mui/material';

export interface TextEllipsisProps extends TypographyProps {
  className?: string;
  w?: string;
  value?: string;
  tooltipValue?: string;
  capitalize?: boolean;
  showTooltip?: boolean;
  popperProps?: TooltipProps['PopperProps'];
  variant?: TypographyProps['variant'];
}
