import {
  CopyToClipboard,
  Icon,
  IconButton,
  ShortId,
} from '@myapp/shared/components';
import { classnames } from '@myapp/shared/utils';
import { useTheme } from '@mui/material/styles';
import { memo } from 'react';
import * as Styled from './styles';
import * as SX from './sx';
import type { TableCopyIdProps as Props } from './types';

export const TableCopyId = memo(({ className, id }: Props) => {
  const theme = useTheme();

  return (
    <Styled.Wrapper
      className={classnames('TableCopyId', className)}
      sx={SX.root}
      direction="row"
      alignItems="center"
    >
      <ShortId value={id} />
      <CopyToClipboard
        value={id}
        messagePrefix="Id"
        component={() => (
          <IconButton
            icon={<Icon name="copy" size={20} />}
            tooltipTitle="Copy Id"
            size="small"
            sx={{ p: 0 }}
          />
        )}
      />
    </Styled.Wrapper>
  );
});

TableCopyId.displayName = 'TableCopyId';
