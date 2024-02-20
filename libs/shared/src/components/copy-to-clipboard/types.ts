import type { PropsWithChildren } from 'react';
import type { IconProps, IconType } from '../icon';

export interface ComponentProps extends PropsWithChildren, Record<string, any> {
  value: string;
}

export interface CopyToClipboardProps extends PropsWithChildren {
  className?: string;
  value: ComponentProps['value'];
  icon?: IconType;
  iconSize?: IconProps['size'];
  message?: string;
  messagePrefix?: string;
  component?: (props: ComponentProps) => JSX.Element;
}
