import type { LoadingButtonProps } from '@mui/lab';
import type { UseBoolean } from '@myapp/shared/hooks';
import type { SxStyle } from '@myapp/shared/theme';
import type { MouseEvent, ReactNode } from 'react';
import type { IconType } from '../icon';

export type CustomDialogActionEvent = (state: {
  toggle: VoidFunction;
  event: MouseEvent<HTMLButtonElement, MouseEvent>;
}) => void;

export type CustomDialogActionButtonProps = Omit<LoadingButtonProps, 'onClick'>;

export type CustomDialogActionProps = CustomDialogActionButtonProps & {
  onClick?: CustomDialogActionEvent;
  closer?: boolean;
  spinning?: boolean;
};

export interface CustomDialogProps {
  className?: string;
  title?: ReactNode;
  loading?: boolean;
  headerSx?: SxStyle;
  titleSx?: SxStyle;
  subTitle?: ReactNode;
  icon?: IconType | false;
  iconSx?: SxStyle;
  subTitleSx?: SxStyle;
  contentSx?: SxStyle;
  children?: ReactNode;
  uncontrolledElement?: false | JSX.Element;
  content?: ReactNode;
  actions?: CustomDialogActionProps[];
  actionsPrepend?: ReactNode;
  actionsSx?: SxStyle;
  closeButton?: false | CustomDialogActionProps;
  defaultOpen?: boolean;
  onOpen?: VoidFunction;
  onClose?: VoidFunction;
  state?: UseBoolean;
  disabled?: boolean;
}
