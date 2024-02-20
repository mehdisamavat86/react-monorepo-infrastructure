import { useBrowseSubscriptionPlanApi } from '@myapp/shared/views/price-and-plan-view/api/use-browse-subscription-plan-api';
import { useDialogContext } from '@myapp/shared/views/price-and-plan-view/context';
import { useCurrentSubscriptionApi } from '@myapp/shared/views/price-and-plan-view/api/use-current-subscription-api';
import { Button, Stack, Typography } from '@mui/material';
import { DialogType } from '@myapp/shared/views/price-and-plan-view/components/dialog-layout/type';
import DialogLayout from '@myapp/shared/views/price-and-plan-view/components/dialog-layout/dialog-layout';
import { classnames, fDate } from '@myapp/shared/utils';
import { memo } from 'react';
import * as Styled from './styles';
import * as SX from './sx';
import type { StepTwoProps as Props } from './types';
import { ActionType } from '../../types';

export const StepTwo = memo(({ className, planName, actionType }: Props) => {
  const { data } = useCurrentSubscriptionApi();
  const dialogState = useDialogContext();
  const { refetch: reAllPlan } = useBrowseSubscriptionPlanApi();
  const { refetch: reCurrent } = useCurrentSubscriptionApi();

  const handleClose = () => {
    reAllPlan();
    reCurrent();
    dialogState.onFalse();
  };

  const dialogType =
    actionType === ActionType.DOWNGRADE ? 'Downgrade' : 'Upgrade';

  return (
    <DialogLayout dialogType={DialogType.SUCCESS}>
      <Styled.Wrapper className={classnames('StepTwo', className)} sx={SX.root}>
        <Stack gap={6}>
          <Stack gap={3}>
            <Typography sx={SX.title}>{dialogType} Scheduled</Typography>
            <Typography sx={SX.description}>
              Your request to {dialogType} to the{' '}
              <Typography component="span" fontWeight="bold">
                {' '}
                {planName}
              </Typography>{' '}
              has been scheduled.
            </Typography>
            <Typography sx={SX.description}>
              The changes will take effect at the start of your next billing
              cycle on{' '}
              <Typography component="span" fontWeight="bold">
                {' '}
                {fDate(data?.current?.currentPeriodEnd)}
              </Typography>
              ..{' '}
            </Typography>
            <Typography sx={SX.description}>
              Until then, you will continue to enjoy the benefits of your
              current plan
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
