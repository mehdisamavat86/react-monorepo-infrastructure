import { classnames } from '@myapp/shared/utils';
import { forwardRef } from 'react';
import * as Styled from './styles';
import type { TextEllipsisProps as Props } from './types';

export const TextEllipsis = forwardRef<HTMLSpanElement, Props>(
  (
    {
      className,
      w,
      value,
      children,
      capitalize,
      tooltipValue,
      showTooltip = true,
      popperProps,
      variant,
      ...props
    },
    ref
  ) => {
    const val = value ?? children;

    return (
      <Styled.StyledTooltip
        title={showTooltip ? tooltipValue || val : undefined}
        enterDelay={500}
        PopperProps={popperProps}
      >
        <Styled.Wrapper
          ref={ref}
          variant={variant ?? 'body2'}
          {...props}
          className={classnames('TextEllipsis', className, { capitalize })}
          maxWidth={w}
        >
          {val}
        </Styled.Wrapper>
      </Styled.StyledTooltip>
    );
  }
);

TextEllipsis.displayName = 'TextEllipsis';
