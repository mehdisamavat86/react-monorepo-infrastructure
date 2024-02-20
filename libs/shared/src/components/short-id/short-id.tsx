import { classnames } from '@myapp/shared/utils';
import { Tooltip } from '@mui/material';
import { memo } from 'react';
import { CopyToClipboard } from '../copy-to-clipboard';
import * as Styled from './styles';
import type { ShortIdProps as Props } from './types';

export const ShortId = memo(
  ({ className, value, showCopy, copyProps }: Props) => {
    return (
      <Tooltip title={value}>
        <Styled.Wrapper className={classnames('ShortId', className)}>
          {value.split('-')[0].substring(0, 8)}...
          {showCopy && <CopyToClipboard value={value} {...copyProps} />}
        </Styled.Wrapper>
      </Tooltip>
    );
  }
);

ShortId.displayName = 'ShortId';
