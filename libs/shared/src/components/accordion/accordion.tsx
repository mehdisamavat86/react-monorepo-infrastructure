import { AccordionDetails, Typography } from '@mui/material';
import { classnames } from '@myapp/shared/utils';
import { memo, useState } from 'react';
import { Icon } from '../icon';
import * as Styled from './styles';
import type { AccordionProps as Props } from './types';

export const Accordion = memo(({ className, title, children, sx }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const toggle = () => setExpanded(!expanded);

  return (
    <Styled.Wrapper
      className={classnames('Accordion', className)}
      onChange={toggle}
    >
      <Styled.Summary
        className={classnames({ expanded })}
        expandIcon={
          expanded ? <Icon name="chevron-up" /> : <Icon name="chevron-right" />
        }
      >
        <Typography>{title}</Typography>
      </Styled.Summary>

      <AccordionDetails sx={sx}>{children}</AccordionDetails>
    </Styled.Wrapper>
  );
});

Accordion.displayName = 'Accordion';
