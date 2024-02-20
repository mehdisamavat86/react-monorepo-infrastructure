import { Icon } from '@myapp/shared/components';
import { classnames } from '@myapp/shared/utils';
import { Stack, Tooltip, Typography } from '@mui/material';
import { memo } from 'react';
import { usePlanMetadata } from '../../../../hooks/use-plan-metadata';
import * as Styled from './styles';
import * as SX from './sx';
import type { PlanFeaturesProps as Props } from './types';

export const PlanFeatures = memo(({ className, plan }: Props) => {
  const features = usePlanMetadata(plan, 'feature');

  return (
    <Styled.Wrapper
      className={classnames('PlanFeatures', className)}
      sx={SX.root}
    >
      <Stack>
        {features?.map((f) => (
          <Stack direction="row" key={f.text}>
            <Typography sx={SX.title}>{f.text}</Typography>
            <Tooltip title={f.description}>
              <Icon size={20} name="info" sxx={SX.icon} />
            </Tooltip>
          </Stack>
        ))}
      </Stack>
    </Styled.Wrapper>
  );
});

PlanFeatures.displayName = 'PlanFeatures';
