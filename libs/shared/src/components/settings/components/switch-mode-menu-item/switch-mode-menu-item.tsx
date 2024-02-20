import { classnames } from '@myapp/shared/utils';
import { Switch } from '@mui/material';
import { memo } from 'react';
import { useSettingsContext } from '../../context';
import * as Styled from './styles';
import * as SX from './sx';
import type { SwitchModeMenuItemProps as Props } from './types';

export const SwitchModeMenuItem = memo(({ className }: Props) => {
  const settings = useSettingsContext();
  const isDark = settings.themeMode === 'dark';

  return (
    <Styled.Wrapper
      className={classnames('SwitchModeMenuItem', className)}
      sx={SX.root}
    >
      <Styled.Text>Dark mode</Styled.Text>
      <Switch
        checked={isDark}
        onChange={() =>
          settings.onUpdate('themeMode', isDark ? 'light' : 'dark')
        }
      />
    </Styled.Wrapper>
  );
});

SwitchModeMenuItem.displayName = 'SwitchModeMenuItem';
