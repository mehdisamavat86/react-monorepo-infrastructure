import { classnames } from '@myapp/shared/utils';
import { memo } from 'react';
import * as Styled from './styles';
import type { NumberRangeSelectPaperProps as Props } from './types';

export const NumberRangeSelectPaper = memo(({ className, children }: Props) => {
  return (
    <Styled.Wrapper
      className={classnames(
        'NumberRangeSelectPaper MainContentScrollBar',
        className
      )}
      onClick={(e) => e.preventDefault()}
      classNames={{
        contentEl: 'MainContentScrollBar_Content',
        contentWrapper: 'MainContentScrollBar_ContentWrapper',
      }}
      sx={{
        height: (t) => t.spacing(30),
        '& .MainContentScrollBar_Content': {
          flexGrow: 1,
        },
        '& .MainContentScrollBar_ContentWrapper': {
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          '::-webkit-scrollbar': {
            display: 'none',
          },
        },
      }}
    >
      {children}
    </Styled.Wrapper>
  );
});

NumberRangeSelectPaper.displayName = 'NumberRangeSelectPaper';
