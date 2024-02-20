import { Icon } from '@myapp/shared/components';
import { AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import { classnames } from '@myapp/shared/utils';
import { memo } from 'react';
import * as Styled from './styles';
import * as SX from './sx';
import type { SingleQuestionProps as Props } from './types';

export const SingleQuestion = memo(({ className, item }: Props) => {
  return (
    <Styled.Wrapper
      className={classnames('SingleQuestion', className)}
      sx={SX.root}
    >
      <AccordionSummary
        expandIcon={<Icon name="arrow-accordian" size={15} />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        sx={SX.accordionSummary}
      >
        <Typography sx={SX.title}>{item?.title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{item?.answer}</Typography>
      </AccordionDetails>
    </Styled.Wrapper>
  );
});

SingleQuestion.displayName = 'SingleQuestion';
