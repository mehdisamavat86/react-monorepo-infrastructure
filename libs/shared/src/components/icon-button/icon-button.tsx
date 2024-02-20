import { classnames } from '@myapp/shared/utils';
import { Tooltip } from '@mui/material';
import { memo } from 'react';
import { Icon } from '../icon';
import * as Styled from './styles';
import type { IconButtonProps as Props } from './types';

// TODO use this IconButton everywhere (find the materialUI ones in the code replace them with this one)
export const IconButton = memo(
  ({
    icon,
    iconColor,
    title,
    tooltipTitle,
    className,
    square,
    sx,
    ...othereProps
  }: Props) => {
    if (square === true) square = 8;

    return (
      <Tooltip title={tooltipTitle}>
        <Styled.Wrapper
          className={classnames('IconButton', className, { round: !title })}
          variant="soft"
          sx={{
            ...sx,
            borderRadius: square ? `${square}px !important` : undefined,
          }}
          {...othereProps}
        >
          {title || ''}
          {icon && <Icon name={icon} color={iconColor} />}
        </Styled.Wrapper>
      </Tooltip>
    );
  }
);

IconButton.displayName = 'IconButton';
