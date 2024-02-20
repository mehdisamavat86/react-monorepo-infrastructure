import { LoadingButton } from '@mui/lab';
import { Button, Stack, Typography } from '@mui/material';
import { DialogType } from '@myapp/shared/views/price-and-plan-view/components/dialog-layout/type';
import DialogLayout from '@myapp/shared/views/price-and-plan-view/components/dialog-layout/dialog-layout';
import { classnames } from '@myapp/shared/utils';
import { memo } from 'react';
import { useDialogContext } from '@myapp/shared/views/price-and-plan-view/context';
import { useBoolean } from '@myapp/shared/hooks';
import { useBrowseSubscriptionPlanApi } from '@myapp/shared/views/price-and-plan-view/api/use-browse-subscription-plan-api';
import { useCurrentSubscriptionApi } from '@myapp/shared/views/price-and-plan-view/api/use-current-subscription-api';
import { baseQueryClient } from '@myapp/shared/http/base-query-client';
import { useUpgradePlanMutationApi } from '@myapp/shared/views/price-and-plan-view/api/use-upgrade-plan-mutation-api';
import { SubscriptionActiveAction } from '@myapp/shared/views/price-and-plan-view/api/types';
import * as Styled from './styles';
import * as SX from './sx';
import type { StepOneProps as Props } from './types';

export const StepOne = memo(({ className, plan, onNext }: Props) => {
  const dialogState = useDialogContext();
  const loading = useBoolean();
  const scheduleApi = useUpgradePlanMutationApi(
    SubscriptionActiveAction.SCHEDULE
  );

  const handleDowngradeScheduled = () => {
    loading.onTrue();

    scheduleApi
      .mutateAsync({
        plan: plan?.id,
      })
      .then((data) => {
        baseQueryClient
          .invalidateQueries([
            useBrowseSubscriptionPlanApi.name,
            useCurrentSubscriptionApi.name,
          ])
          .then(() => {
            loading.onFalse();
          });
        onNext();
      });
  };

  return (
    <DialogLayout dialogType={DialogType.DOWNGRADE}>
      <Styled.Wrapper className={classnames('StepOne', className)} sx={SX.root}>
        <Stack gap={6}>
          <Stack gap={3}>
            <Typography sx={SX.title}>Stay on Your Current Plan</Typography>
            <Typography sx={SX.description}>
              Do you want to stay on the{' '}
              <Typography component="span" fontWeight="bold">
                {' '}
                {plan.nickname}
              </Typography>{' '}
              plan and cancel your upgrade?
            </Typography>
            <Typography sx={SX.description}>
              You`ll keep all your current benefits.
            </Typography>
          </Stack>
          <Stack direction="row" justifyContent="center" gap={2}>
            <Button
              variant="outlined"
              color="inherit"
              sx={SX.confirmBtn}
              onClick={dialogState.onFalse}
            >
              Cancel Upgrade
            </Button>
            <LoadingButton
              loading={loading.value}
              variant="contained"
              color="primary"
              sx={SX.confirmBtn}
              onClick={handleDowngradeScheduled}
            >
              Yes, Stay Plan
            </LoadingButton>
          </Stack>
        </Stack>
      </Styled.Wrapper>
    </DialogLayout>
  );
});

StepOne.displayName = 'StepOne';
