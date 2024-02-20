import { pxToRem } from '@myapp/shared/theme';
import type { ClearButtonProps as Props } from '.';
import { IconButton } from '../icon-button';

export const ClearButton = ({ onClick }: Props) => {
  return (
    <IconButton
      onClick={onClick}
      size="small"
      sx={{ width: pxToRem(20), height: pxToRem(20) }}
      icon="close"
    />
  );
};
