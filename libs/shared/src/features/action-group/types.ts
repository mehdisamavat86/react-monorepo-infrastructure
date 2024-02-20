import { SxStyle } from '@myapp/shared/theme';
import { ButtonProps } from '@mui/material';
import { JSXElementConstructor, ReactElement } from 'react';

export type ActionGroupItemProps =
  | {
      isDefault: true;
    }
  | {
      isDefault?: false;
      button: Omit<ButtonProps, 'onClick'>;
    };

export type MultiActionElementProps = {
  onFinish?: VoidFunction;
};

export type ActionGroupElement = ReactElement<
  MultiActionElementProps,
  string | JSXElementConstructor<MultiActionElementProps>
>;

export type ActionGroupChildren = {
  children: ActionGroupElement;
};

export type ActionGroupItem = ActionGroupChildren & ActionGroupItemProps;

export interface ActionGroupProps {
  className?: string;
  buttonProps?: Omit<ButtonProps, 'onClick'>;
  items: ActionGroupItem[];
  closeEl?: JSX.Element;
  sx?: SxStyle;
  contentSx?: SxStyle;
}
