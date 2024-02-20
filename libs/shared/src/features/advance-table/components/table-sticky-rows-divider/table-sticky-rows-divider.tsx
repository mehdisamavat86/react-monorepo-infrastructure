import { Icon } from '@myapp/shared/components';
import { classnames } from '@myapp/shared/utils';
import { Button, Typography } from '@mui/material';
import { memo, useMemo } from 'react';
import { useAdvanceTableContext } from '../../context';
import * as Styled from './styles';
import * as SX from './sx';
import type { TableStickyRowsDividerProps as Props } from './types';

export const TableStickyRowsDivider = memo(
  ({ className, current, max }: Props) => {
    const { stickyCollapsed, setStickyCollapsed } = useAdvanceTableContext();
    const iconName = stickyCollapsed ? 'chevron-down' : 'chevron-up';
    const actionName = stickyCollapsed ? 'Show' : 'Hide';
    const message = useMemo(() => {
      if (current === max)
        return (
          <Styled.DividerMessage variant="button">
            Max {max} lookalike domains has been reached.
          </Styled.DividerMessage>
        );
      return null;
    }, [current, max]);

    const handleToggle = () => setStickyCollapsed(!stickyCollapsed);

    return (
      <Styled.Wrapper
        className={classnames('TableStickyRowsDivider', className)}
        sx={SX.root}
      >
        <Styled.Cell colSpan={12}>
          <Button
            sx={SX.button}
            variant="contained"
            color="primary"
            onClick={handleToggle}
          >
            <Icon name={iconName} size={24} />
          </Button>
          <Typography variant="body2" component="span">
            {actionName} {current} lookalike references
          </Typography>
          {message}
        </Styled.Cell>
      </Styled.Wrapper>
    );
  }
);

TableStickyRowsDivider.displayName = 'TableStickyRowsDivider';
