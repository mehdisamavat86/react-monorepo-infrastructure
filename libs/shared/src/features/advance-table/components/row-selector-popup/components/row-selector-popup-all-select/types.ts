import { MouseEventHandler } from 'react';
import { ExportSizeLimit } from '../../types';

export interface RowSelectorPopupAllSelectProps {
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  sizeLimit: ExportSizeLimit;
}
