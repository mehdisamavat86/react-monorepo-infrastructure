import { Icon } from '@myapp/shared/components';
import { classnames } from '@myapp/shared/utils';
import { Stack, Tooltip, Typography } from '@mui/material';
import { memo } from 'react';
import { usePlanMetadata } from '../../../../hooks/use-plan-metadata';
import * as Styled from './styles';
import * as SX from './sx';
import type { PlanIncludesProps as Props } from './types';

export const PlanIncludes = memo(({ className, plan }: Props) => {
  const includes = usePlanMetadata(plan, 'include');

  return (
    <Styled.Wrapper
      className={classnames('PlanIncludes', className)}
      sx={SX.root}
    >
      <Typography sx={SX.header}>{plan?.nickname} Include:</Typography>
      <Stack gap={1.5} sx={SX.itemWrapper}>
        {includes?.map((i) => (
          <Stack key={i.text} direction="row" gap={1}>
            <Icon name="check-circle-outline" sxx={SX.icon} />
            <Tooltip title={i.description} disableHoverListener={!i.enable}>
              <Typography sx={SX.title(i.enable)}>{i.text}</Typography>
            </Tooltip>
          </Stack>
        ))}
      </Stack>
    </Styled.Wrapper>
  );
});

PlanIncludes.displayName = 'PlanIncludes';
