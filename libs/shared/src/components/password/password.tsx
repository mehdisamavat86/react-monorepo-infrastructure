import { useBoolean } from '@myapp/shared/hooks';
import { classnames } from '@myapp/shared/utils';
import { IconButton, InputAdornment } from '@mui/material';
import { ChangeEventHandler, memo, useState } from 'react';
import { RHFTextField } from '../hook-form';
import { Icon } from '../icon';
import { PasswordHint } from './password-hint';
import * as Styled from './styles';
import type { PasswordProps as Props } from './types';

export const Password = memo(({ className, showHint, ...config }: Props) => {
  const show = useBoolean();
  const touched = useBoolean();
  const [pass, setPass] = useState('');

  const handleChange: ChangeEventHandler<any> = (e) => {
    setPass(e.target.value);
    touched.setValue(true);
  };

  return (
    <Styled.Wrapper className={classnames('Password', className)}>
      <RHFTextField
        {...config}
        type={show.value ? 'text' : 'password'}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={show.onToggle} edge="end">
                <Icon name={show.value ? 'eye' : 'eye-off'} size={20} />
              </IconButton>
            </InputAdornment>
          ),
          onInput: handleChange,
        }}
      />

      {showHint && touched.value && <PasswordHint value={pass} />}
    </Styled.Wrapper>
  );
});

Password.displayName = 'Password';
