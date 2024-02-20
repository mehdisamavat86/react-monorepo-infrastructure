import { classnames } from '@myapp/shared/utils';
import { Button } from '@mui/material';
import { memo, useState } from 'react';
import * as Styled from './styles';
import type { SeeMoreProps as Props } from './types';

export const SeeMore = memo(({ className, maxChars = 100, text }: Props) => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  let displayText;
  if (text) {
    if (showFullText) displayText = text;
    else displayText = `${text?.slice(0, maxChars)}...`;
  }

  return (
    <Styled.Wrapper className={classnames('SeeMore', className)}>
      <Styled.TextWrapper variant="caption">
        {displayText}
        {text && text.length > maxChars && (
          <Styled.ToggleButton
            variant="text"
            color="primary"
            onClick={toggleText}
          >
            {showFullText ? (
              <Styled.TextMore>See Less</Styled.TextMore>
            ) : (
              <Styled.TextMore>See More</Styled.TextMore>
            )}
          </Styled.ToggleButton>
        )}
      </Styled.TextWrapper>
    </Styled.Wrapper>
  );
});

SeeMore.displayName = 'SeeMore';
