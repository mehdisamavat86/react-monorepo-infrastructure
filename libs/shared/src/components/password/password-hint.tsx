import { classnames } from '@myapp/shared/utils';
import { memo } from 'react';
import { Icon } from '../icon';
import { checkPasswprd as checkPassword } from './config';
import * as Styled from './styles';
import type { CheckPasswordRule, PasswordHintProps as Props } from './types';

export const PasswordHint = memo(({ className, value }: Props) => {
  const updatedCheckData: Record<CheckPasswordRule, boolean> = {
    length: value.length >= 8,
    upper: /[A-Z]/.test(value),
    lower: /[a-z]/.test(value),
    digit: /[0-9]/.test(value),
    symbol: /[!@#$%^&*]/.test(value),
  };

  return (
    <Styled.CheckPassword className={className}>
      {checkPassword.map((i) => (
        <Styled.Title
          className={classnames({ success: updatedCheckData[i.condition] })}
          variant="body2"
          key={i.condition}
        >
          {i.icon && <Icon name={i.icon} />}
          {i.title}
        </Styled.Title>
      ))}
    </Styled.CheckPassword>
  );
});

PasswordHint.displayName = 'PasswordHint';
