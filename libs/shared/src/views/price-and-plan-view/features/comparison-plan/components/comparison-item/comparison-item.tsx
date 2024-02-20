import { Icon } from '@myapp/shared/components';
import {
  Accordion,
  AccordionSummary,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import { classnames } from '@myapp/shared/utils';
import { memo } from 'react';
import * as Styled from './styles';
import * as SX from './sx';
import type { ComparisonItemProps as Props } from './types';
import { CompareTitle } from '../../types';

export const ComparisonItem = memo(
  ({ className, item, plans, heading }: Props) => {
    const parsedData = plans?.map((p) => {
      const a: CompareTitle[] = JSON.parse(p?.metadata?.comparison_data || '');
      return a.find((i) => i.key === item)?.value || '';
    });

    const compareData = (value: string) => {
      if (value === 'true') {
        return <Icon name="check-circle-outline" sxx={SX.icon(true)} />;
      }
      if (value === 'false') {
        return <Icon name="check-circle-outline" sxx={SX.icon(false)} />;
      }
      return <Styled.Item sx={SX.compareName}>{value}</Styled.Item>;
    };

    return (
      <Styled.Wrapper
        className={classnames('ComparisonItem', className)}
        sx={SX.root}
      >
        <Accordion sx={{ width: '100%' }} expanded={false}>
          <AccordionSummary
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={SX.summary}
          >
            <Grid container sx={SX.itemWrapper}>
              <Grid item xs justifyContent="center">
                <Stack
                  justifyContent="center"
                  sx={SX.item}
                  alignItems="self-start"
                >
                  <Styled.Title>{item}</Styled.Title>
                </Stack>
              </Grid>
              {parsedData?.map((i) => (
                <Stack
                  key={i + Math.random()}
                  justifyContent="center"
                  alignItems="center"
                  sx={SX.item}
                >
                  {compareData(i)}
                </Stack>
              ))}
            </Grid>
          </AccordionSummary>
        </Accordion>
      </Styled.Wrapper>
    );
  }
);

ComparisonItem.displayName = 'ComparisonItem';
