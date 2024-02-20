import { cloneElement, forwardRef } from 'react';
import * as Styled from './styles';
import type { ProgressSnackbarProps as Props } from './types';

export const ProgressSnackbar = forwardRef<HTMLDivElement, Props>(
  (props, ref) => {
    const { id, title, message, ...other } = props;
    return (
      <Styled.Wrapper
        className="ProgressSnackbar"
        ref={ref}
        role="alert"
        {...other}
      >
        <Styled.Card>
          {cloneElement(title as React.ReactElement<any>, {
            id,
          })}
          {message}
        </Styled.Card>
      </Styled.Wrapper>
    );
  }
);

ProgressSnackbar.displayName = 'ProgressSnackbar';
