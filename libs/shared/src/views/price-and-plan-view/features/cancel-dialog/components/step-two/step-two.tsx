import DialogLayout from '@myapp/shared/views/price-and-plan-view/components/dialog-layout/dialog-layout';
import { DialogType } from '@myapp/shared/views/price-and-plan-view/components/dialog-layout/type';
import { Button, Stack, Typography } from '@mui/material';
import { useDialogContext } from '@myapp/shared/views/price-and-plan-view/context';
import { useBrowseSubscriptionPlanApi } from '@myapp/shared/views/price-and-plan-view/api/use-browse-subscription-plan-api';
import { useCurrentSubscriptionApi } from '@myapp/shared/views/price-and-plan-view/api/use-current-subscription-api';
import { classnames } from '@myapp/shared/utils';
import { memo } from 'react';
import * as Styled from './styles';
import * as SX from './sx';
import type { StepTwoProps as Props } from './types';

export const StepTwo = memo(({ className, plan }: Props) => {
  const dialogState = useDialogContext();
  const { refetch: reAllPlan } = useBrowseSubscriptionPlanApi();
  const { refetch: reCurrent } = useCurrentSubscriptionApi();

  const handleClose = () => {
    reAllPlan();
    reCurrent();
    dialogState.onFalse();
  };

  return (
    <DialogLayout dialogType={DialogType.SUCCESS}>
      <Styled.Wrapper className={classnames('StepTwo', className)} sx={SX.root}>
        <Stack gap={6}>
          <Stack gap={3}>
            <Typography sx={SX.title}>
              Upcoming Plan Change Cancelled
            </Typography>
            <Typography sx={SX.description}>
              Your scheduled change to the
              <Typography component="span" fontWeight="bold">
                {' '}
                {plan.nickname}
              </Typography>{' '}
              plan has been cancelled.
            </Typography>
            <Typography sx={SX.description}>
              You can now proceed with picking your desired plan.
            </Typography>
          </Stack>
          <Button
            variant="outlined"
            color="inherit"
            sx={SX.cancelBtn}
            onClick={handleClose}
          >
            Close
          </Button>
        </Stack>
      </Styled.Wrapper>
    </DialogLayout>
  );
});

StepTwo.displayName = 'StepTwo';
