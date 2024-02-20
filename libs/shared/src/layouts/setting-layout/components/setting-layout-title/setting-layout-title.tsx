import { Icon } from '@myapp/shared/components';
import { SHARED_ROUTES as R } from '@myapp/shared/constants';
import { classnames } from '@myapp/shared/utils';
import { memo } from 'react';
import * as Styled from './styles';
import type { SettingLayoutTitleProps as Props } from './types';

export const SettingLayoutTitle = memo(({ className }: Props) => {
  return (
    <Styled.Wrapper
      className={classnames('SettingLayoutTitle', className)}
      to={R.dashboard}
      sx={{
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'center',
        gap: '5px',
        width: '100%',
      }}
    >
      <Icon name="arrow-left" />
      Go To Dashboard
    </Styled.Wrapper>
  );
});

SettingLayoutTitle.displayName = 'SettingLayoutTitle';
