import { useCopyToClipboard, useNotify } from '@myapp/shared/hooks';
import { classnames } from '@myapp/shared/utils';
import { memo, useMemo } from 'react';
import { IconButton } from '../icon-button';
import * as Styled from './styles';
import type { CopyToClipboardProps as Props } from './types';

export const CopyToClipboard = memo(
  ({
    className,
    value,
    children,
    icon,
    iconSize,
    message,
    messagePrefix,
    component,
  }: Props) => {
    const clip = useCopyToClipboard();
    const notify = useNotify();
    const Component = useMemo(
      () =>
        component ??
        (() => (
          <IconButton
            icon={icon || 'copy'}
            sx={{ fontSize: iconSize || 'inherit' }}
          >
            {children}
          </IconButton>
        )),
      [children, component, icon, iconSize]
    );
    const handleCopy = () => {
      clip
        .copy(value)
        .then((x) =>
          notify.success(
            `${messagePrefix ? messagePrefix.concat(' ') : ''}${
              message || 'Successfully Copied!'
            }`
          )
        );
    };

    return (
      <Styled.Wrapper
        className={classnames('CopyToClipboard', className)}
        onClick={handleCopy}
      >
        <Component value={value}>{children || value}</Component>
      </Styled.Wrapper>
    );
  }
);

CopyToClipboard.displayName = 'CopyToClipboard';
