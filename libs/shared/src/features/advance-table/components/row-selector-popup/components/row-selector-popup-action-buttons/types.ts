import { MouseEventHandler } from 'react';

export interface RowSelectorPopupActionButtonsProps {
  className?: string;
  onClear?: MouseEventHandler<HTMLButtonElement>;
  onApply?: MouseEventHandler<HTMLButtonElement>;
}
