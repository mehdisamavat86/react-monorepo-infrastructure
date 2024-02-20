import type { SxStyle } from '@myapp/shared/theme';
import type { LoadingButtonProps } from '@mui/lab';
import type { PopoverProps } from '@mui/material';
import type { MouseEvent, ReactNode } from 'react';
import type { IconType } from '../icon';
import type { PopoverType } from './use-popover';

export type MenuPopoverArrowValue =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right'
  | 'left-top'
  | 'left-center'
  | 'left-bottom'
  | 'right-top'
  | 'right-center'
  | 'right-bottom';

export interface CustomPopoverProps
  extends Omit<PopoverProps, 'open' | 'content' | 'title' | 'action'> {
  className?: string;
  arrowPosition?: MenuPopoverArrowValue;
  showArrow?: boolean;
  arrowSx?: SxStyle;
  backdropClosable?: false;
  element?: Required<JSX.Element>;
  title?: ReactNode;
  titleSx?: SxStyle;
  icon?: IconType;
  content?: ReactNode;
  contentSx?: SxStyle;
  actions?: PopoverActionProps[];
  actionsSx?: SxStyle;
  defaultOpen?: boolean;
  onClose?: VoidFunction;
  state?: PopoverType;
  openClassName?: string;
  popoverProps?: Omit<CustomPopoverProps, 'open' | 'onClose'>;
}

export type PopoverActionEvent<T = any> = (
  state: {
    event: MouseEvent<HTMLButtonElement, MouseEvent>;
    extra?: T;
  } & PopoverType
) => void;

export type PopoverActionProps = Omit<LoadingButtonProps, 'onClick'> & {
  onClick?: PopoverActionEvent;
  closer?: boolean;
  showSpinner?: boolean;
};
