import { classnames } from '@myapp/shared/utils';
import { memo } from 'react';
import { useSettingsContext } from '../../context';
import BaseOptions from '../../drawer/base-option';
import * as Styled from './styles';
import type { SwitchModeProps as Props } from './types';

export const SwitchMode = memo(({ className }: Props) => {
  const settings = useSettingsContext();

  return (
    <Styled.Wrapper className={classnames('SwitchMode', className)}>
      <BaseOptions
        value={settings.themeMode}
        onChange={(newValue: string) =>
          settings.onUpdate('themeMode', newValue)
        }
        options={['light', 'dark']}
        icons={['sun', 'moon']}
      />
    </Styled.Wrapper>
  );
});

SwitchMode.displayName = 'SwitchMode';
