import { classnames } from '@myapp/shared/utils';
import { Box } from '@mui/material';
import { forwardRef, memo } from 'react';
import { StyledRootScrollbar, StyledScrollbar } from './styles';
import type { ScrollbarProps } from './types';

const Scrollbar = forwardRef<HTMLDivElement, ScrollbarProps>(
  ({ children, sx, className, ...other }, ref) => {
    const userAgent =
      typeof navigator === 'undefined' ? 'SSR' : navigator.userAgent;

    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        userAgent
      );

    if (isMobile) {
      return (
        <Box ref={ref} sx={{ overflow: 'auto', ...sx }} {...other}>
          {children}
        </Box>
      );
    }

    return (
      <StyledRootScrollbar className={classnames('Scrollbar', className)}>
        <StyledScrollbar
          scrollableNodeProps={{
            ref,
          }}
          clickOnTrack={false}
          sx={sx}
          {...other}
        >
          {children}
        </StyledScrollbar>
      </StyledRootScrollbar>
    );
  }
);

export default memo(Scrollbar);
