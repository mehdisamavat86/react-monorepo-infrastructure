import { TextEllipsisProps } from '../text-ellipsis';

export interface DateTimeProps extends Omit<TextEllipsisProps, 'value'> {
  className?: string;
  value: string | number | Date;
  noTime?: boolean;
  format?: string;
  tooltipFormat?: string;
}
