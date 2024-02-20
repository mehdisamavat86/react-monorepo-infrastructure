import { classnames } from '@myapp/shared/utils';
import Box from '@mui/material/Box';
import { memo, useState } from 'react';
import * as Styled from './styles';
import type { ViewMoreProps as Props } from './types';

export const ViewMore = memo(
  ({ className, list, limit, displayTags, buttonSx, buttonProps }: Props) => {
    displayTags = displayTags ?? limit;
    const [showFull, setShowFull] = useState(false);

    const toggleText: React.MouseEventHandler<HTMLButtonElement> = (e) => {
      e.stopPropagation();
      setShowFull(!showFull);
    };

    const displayList = showFull
      ? list
      : list?.slice(0, list.length > limit ? displayTags : limit);

    return (
      <>
        <Styled.ListWrapper>{displayList}</Styled.ListWrapper>

        {list && list.length > limit && (
          <Box>
            <Styled.ToggleButton
              className={classnames({ Less: showFull })}
              variant="outlined"
              color="primary"
              {...buttonProps}
              sx={buttonSx}
              onClick={toggleText}
            >
              <Styled.TextMore
                color={showFull ? 'primary.500' : 'primary.500'}
                className={classnames({ Less: showFull })}
              >
                {showFull ? 'View Less' : `+${list.length - displayTags} More`}
              </Styled.TextMore>
            </Styled.ToggleButton>
          </Box>
        )}
      </>
    );
  }
);
