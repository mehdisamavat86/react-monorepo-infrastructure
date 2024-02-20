import { classnames, jsonStringify } from '@myapp/shared/utils';
import { memo } from 'react';
import * as Styled from './styles';
import type { JsonViewerProps as Props } from './types';

export const JsonViewer = memo(({ className, children, debug }: Props) => {
  if (debug) console.log(children);

  return (
    <Styled.Wrapper className={classnames('JsonViewer', className)}>
      {jsonStringify(children, 2)}
    </Styled.Wrapper>
  );
});

JsonViewer.displayName = 'JsonViewer';
