import { classnames } from '@myapp/shared/utils';
import { memo } from 'react';
import * as Styled from './styles';
import type { CardBoxProps as Props } from './types';

export const CardBox = memo(
  ({
    className,
    headerSx,
    hideHeader,
    title,
    titleProps,
    subTitle,
    subTitleProps,
    contentSx,
    contentGradient,
    sx,
    children,
    shadow,
    actions,
    transparent,
  }: Props) => {
    return (
      <Styled.Wrapper
        className={classnames('CardBox', className, { 'no-shadow': !shadow })}
        sx={{
          background: transparent ? 'transparent' : undefined,
          ...sx,
        }}
      >
        {!hideHeader && (title || subTitle) && (
          <Styled.Header sx={headerSx}>
            {title && (
              <Styled.Title variant="h6" {...titleProps}>
                {title}

                {actions}
              </Styled.Title>
            )}
            {subTitle && (
              <Styled.SubTitle variant="body1" {...subTitleProps}>
                {subTitle}
              </Styled.SubTitle>
            )}
          </Styled.Header>
        )}

        <Styled.Content
          className={classnames({ gradient: contentGradient })}
          sx={{ p: transparent ? 0 : undefined, ...contentSx }}
        >
          {children}
        </Styled.Content>
      </Styled.Wrapper>
    );
  }
);

CardBox.displayName = 'CardBox';
