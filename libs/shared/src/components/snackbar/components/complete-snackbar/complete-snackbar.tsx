import { cloneElement, forwardRef } from 'react';
import * as Styled from './styles';
import type { CompleteSnackbarProps as Props } from './types';

export const CompleteSnackbar = forwardRef<HTMLDivElement, Props>(
  (props, ref) => {
    const { id, message, title: _t, ...other } = props;
    const title = typeof _t === 'object' ? _t : <>{_t}</>;

    return (
      <Styled.Wrapper
        className="CompleteSnackbar"
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

CompleteSnackbar.displayName = 'CompleteSnackbar';
