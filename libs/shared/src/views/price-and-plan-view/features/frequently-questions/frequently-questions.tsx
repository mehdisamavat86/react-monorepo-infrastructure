import { Stack, Typography } from '@mui/material';
import { classnames } from '@myapp/shared/utils';
import { memo } from 'react';
import * as Styled from './styles';
import * as SX from './sx';
import type { FrequentlyQuestionsProps as Props } from './types';
import { SingleQuestion } from './components/single-question';

export const FrequentlyQuestions = memo(({ className }: Props) => {
  const questions = [
    {
      id: '1',
      title: 'What is included in my free plan?',
      answer:
        'Free Plan includes 100 Export Credits as well as to view the first 25 results of any search results.',
    },
    {
      id: '2',
      title: 'Do you offer Discounts?',
      answer:
        'Free Plan includes 100 Export Credits as well as to view the first 25 results of any search results.',
    },
    {
      id: '3',
      title: 'What is an Export Credit?',
      answer:
        'Free Plan includes 100 Export Credits as well as to view the first 25 results of any search results.',
    },
    {
      id: '4',
      title: 'What does it mean "unused Credits Roll over"?',
      answer:
        'Free Plan includes 100 Export Credits as well as to view the first 25 results of any search results.',
    },
    {
      id: '5',
      title: 'Will I be charged at the end of my free trial?',
      answer:
        'Free Plan includes 100 Export Credits as well as to view the first 25 results of any search results.',
    },
  ];

  return (
    <Styled.Wrapper
      className={classnames('FrequentlyQuestions', className)}
      sx={SX.root}
      justifyContent="center"
      alignItems="center"
    >
      <Typography sx={SX.headerTitle}>Frequently Asked Questions</Typography>
      <Stack
        direction="row"
        flexWrap="wrap"
        alignItems="center"
        justifyContent="center"
        gap={2}
      >
        {questions.map((i) => (
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="flex-start"
            alignSelf="flex-start"
            key={i.id}
          >
            <SingleQuestion item={i} />
          </Stack>
        ))}
      </Stack>

      {/* <Grid container spacing={2} columns={16}>
        {questions.map((i) => (
          <Grid
            key={i.id}
            item
            xs={8}
            justifyContent="center"
            alignItems="center"
          >
            <Stack justifyContent="center" alignItems="center">
              <SingleQuestion item={i} />
            </Stack>
          </Grid>
        ))}
      </Grid> */}
    </Styled.Wrapper>
  );
});

FrequentlyQuestions.displayName = 'FrequentlyQuestions';
