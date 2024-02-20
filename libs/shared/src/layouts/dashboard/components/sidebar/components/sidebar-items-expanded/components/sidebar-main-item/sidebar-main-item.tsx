import { classnames } from '@myapp/shared/utils';
import { memo } from 'react';
import * as Styled from './styles';
import * as SX from './sx';
import type { SidebarMainItemProps as Props } from './types';

export const SidebarMainItem = memo(
  ({ className, title, description }: Props) => {
    return (
      <Styled.Wrapper
        className={classnames('SidebarMainItem', className)}
        sx={SX.root}
      >
        <Styled.MainItemTitle color="primary.300" variant="body2">
          <Styled.Dot color="primary" variant="dot" />
          {title}
        </Styled.MainItemTitle>
        <Styled.MainItemDescription color="grey.400" variant="caption">
          {description}
        </Styled.MainItemDescription>
      </Styled.Wrapper>
    );
  }
);

SidebarMainItem.displayName = 'SidebarMainItem';
