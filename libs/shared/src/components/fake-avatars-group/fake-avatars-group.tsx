import { classnames } from '@myapp/shared/utils';
import { Avatar } from '@mui/material';
import { randFullName } from '@ngneat/falso';
import { range } from 'lodash-es';
import { memo } from 'react';
import * as Styled from './styles';
import type { FakeAvatarsGroupProps as Props } from './types';

export const FakeAvatarsGroup = memo(
  ({ className, large, count: size }: Props) => {
    const count = size || 4;
    const loop = size || 6;

    return (
      <Styled.Wrapper
        className={classnames('FakeAvatarsGroup', className, { large })}
        max={count}
      >
        {range(1, loop).map((x) => (
          <Avatar
            key={x}
            alt={randFullName()}
            src={`/assets/images/avatar/${(x % 4) + 1}.png`}
          />
        ))}
      </Styled.Wrapper>
    );
  }
);

FakeAvatarsGroup.displayName = 'FakeAvatarsGroup';
