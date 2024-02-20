import { classnames } from '@myapp/shared/utils';
import { Skeleton } from '@mui/material';
import { range } from 'lodash-es';
import { memo } from 'react';
import * as Styled from './styles';
import type { SkeletonListProps as Props } from './types';

export const SkeletonList = memo(
  ({ className, sx, count, ...props }: Props) => {
    const size = (Array.isArray(count) ? count.length : count) || 0;
    const itemProps = Array.isArray(count)
      ? count
      : new Array(size).fill(props);
    const items = range(0, size).map((x) => (
      <Skeleton key={x} {...props} {...itemProps[x]} />
    ));

    return (
      <Styled.Wrapper className={classnames('SkeletonList', className)} sx={sx}>
        {items}
      </Styled.Wrapper>
    );
  }
);

SkeletonList.displayName = 'SkeletonList';
