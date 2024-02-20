import { CopyToClipboard } from '@myapp/shared/components';
import { classnames } from '@myapp/shared/utils';
import { memo } from 'react';
import * as Styled from './styles';
import type { CopyIdActionProps as Props } from './types';

export const CopyIdAction = memo(({ className, item }: Props) => {
  return (
    <CopyToClipboard
      value={item.id}
      messagePrefix="Id"
      component={() => (
        <Styled.Wrapper
          className={classnames('CopyIdAction', className)}
          icon="copy"
          tooltipTitle="Copy Id"
        />
      )}
    />
  );
});

CopyIdAction.displayName = 'CopyIdAction';
