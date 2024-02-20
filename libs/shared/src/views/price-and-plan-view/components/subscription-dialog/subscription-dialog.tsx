import { Box } from '@mui/material';
import { classnames } from '@myapp/shared/utils';
import { memo } from 'react';
import * as Styled from './styles';
import * as SX from './sx';
import type { SubscriptionDialogProps as Props } from './types';

export const SubscriptionDialog = memo(
  ({ className, open, onClose, content }: Props) => {
    return (
      <Styled.Wrapper
        open={open}
        className={classnames('SubscriptionDialog', className)}
        sx={SX.root}
        onClose={onClose}
        maxWidth="xs"
      >
        <Box sx={SX.wrapper}>{content}</Box>
      </Styled.Wrapper>
    );
  }
);

SubscriptionDialog.displayName = 'SubscriptionDialog';
