import { Box, Button } from '@mui/material';
import { classnames } from '@myapp/shared/utils';
import { memo, useEffect, useState } from 'react';
import * as Styled from './styles';
import * as SX from './sx';
import type { ChangeDurationProps as Props } from './types';
import usePriceAndPlanStore from '../../store';
import { useCurrentSubscriptionApi } from '../../api/use-current-subscription-api';

enum DurationType {
  MONTHLY = 'Monthly',
  ANNUAL = 'Annual',
}

export const ChangeDuration = memo(({ className }: Props) => {
  const [yearly, setYearly] = usePriceAndPlanStore((s) => [
    s.yearly,
    s.setYearly,
  ]);
  const [activeDuration, setActiveDuration] = useState<DurationType>(
    yearly ? DurationType.ANNUAL : DurationType.MONTHLY
  );

  const { data: currentSub } = useCurrentSubscriptionApi();

  const handleChangeDuration = (duration: DurationType) => {
    setActiveDuration(duration);
  };

  useEffect(() => {
    if (currentSub?.current?.plan?.interval === 'year') {
      setYearly(true);
      setActiveDuration(DurationType.ANNUAL);
    }
  }, [currentSub, setYearly]);

  useEffect(() => {
    setYearly?.(activeDuration === DurationType.ANNUAL);
  }, [activeDuration, setYearly]);

  return (
    <Styled.Wrapper
      className={classnames('ChangeDuration', className)}
      sx={SX.root}
      direction="row"
      gap={1}
    >
      {Object.values(DurationType).map((value) => (
        <Button
          key={value}
          variant="contained"
          color={value === activeDuration ? 'primary' : 'inherit'}
          sx={SX.button}
          onClick={(e: any) => handleChangeDuration(value)}
        >
          {value}
        </Button>
      ))}
      <Box component="span" sx={SX.annualBenefit}>
        Save %20
      </Box>
    </Styled.Wrapper>
  );
});

ChangeDuration.displayName = 'ChangeDuration';
