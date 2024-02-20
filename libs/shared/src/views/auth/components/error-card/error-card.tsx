import { classnames } from '@myapp/shared/utils';
import { memo } from 'react';
import * as Styled from './styles';
import type { ErrorCardProps as Props } from './types';

export const ErrorCard = memo(
  ({ className, title, message, children }: Props) => {
    return (
      <Styled.Wrapper
        className={classnames('ErrorCard', className)}
        title={title || 'Opps!'}
        description={message || ''}
      >
        {children}
      </Styled.Wrapper>
    );
  }
);

ErrorCard.displayName = 'ErrorCard';
