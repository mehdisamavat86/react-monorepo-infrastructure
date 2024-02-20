import { classnames } from '@myapp/shared/utils';
import { memo } from 'react';
import { Icon } from '../icon';
import * as Styled from './styles';
import type { StatusCircleProps as Props } from './types';

export const StatusCircle = memo(({ className, success, icon }: Props) => {
  icon = icon || success ? <Icon name="check-circle" /> : <Icon name="close" />;

  return (
    <Styled.Wrapper
      className={classnames('StatusCircle', className)}
      success={!!success}
    >
      {icon}
    </Styled.Wrapper>
  );
});

StatusCircle.displayName = 'StatusCircle';
