import { Icon } from '@myapp/shared/components';
import { classnames } from '@myapp/shared/utils';
import { Tooltip, useTheme } from '@mui/material';
import { memo, useMemo } from 'react';
import * as Styled from './styles';
import * as SX from './sx';
import type { RowSelectorPopupAllSelectProps as Props } from './types';

export const RowSelectorPopupAllSelect = memo(
  ({ className, onClick, sizeLimit }: Props) => {
    const renderSelectAllOption = useMemo(() => {
      if (sizeLimit.systemLimitReached)
        return (
          <>
            Select max amount of records ({sizeLimit.systemLimit})
            <Tooltip
              PopperProps={{ disablePortal: true }}
              title={`For Performance reasons, the number of records is caped to ${sizeLimit.systemLimit}`}
              arrow
              placement="top"
            >
              <Icon size={20} name="info" sxx={SX.icon} />
            </Tooltip>
          </>
        );
      return `Select all results (${sizeLimit.normalRowsLimit})`;
    }, [
      sizeLimit.normalRowsLimit,
      sizeLimit.systemLimit,
      sizeLimit.systemLimitReached,
    ]);

    return (
      <Styled.Wrapper
        className={classnames('RowSelectorPopupAllSelect', className)}
        sx={SX.root}
        item
        xs={12}
      >
        <Styled.OptionButton
          startIcon={<Icon size={20} name="playlist-add" />}
          onClick={onClick}
          variant="text"
          color="inherit"
        >
          {renderSelectAllOption}
        </Styled.OptionButton>
      </Styled.Wrapper>
    );
  }
);

RowSelectorPopupAllSelect.displayName = 'RowSelectorPopupAllSelect';
