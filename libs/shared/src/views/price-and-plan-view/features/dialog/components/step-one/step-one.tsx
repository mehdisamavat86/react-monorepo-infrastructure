import { Button, Stack, Typography } from '@mui/material';
import { useCurrentSubscriptionApi } from '@myapp/shared/views/price-and-plan-view/api/use-current-subscription-api';
import DialogLayout from '@myapp/shared/views/price-and-plan-view/components/dialog-layout/dialog-layout';
import { DialogType } from '@myapp/shared/views/price-and-plan-view/components/dialog-layout/type';
import { classnames, fDate } from '@myapp/shared/utils';
import { memo } from 'react';
import { useUpgradePlanMutationApi } from '@myapp/shared/views/price-and-plan-view/api/use-upgrade-plan-mutation-api';
import { SubscriptionActiveAction } from '@myapp/shared/views/price-and-plan-view/api/types';
import { useDialogContext } from '@myapp/shared/views/price-and-plan-view/context';
import { useQueryClient } from '@tanstack/react-query';
import { useBoolean } from '@myapp/shared/hooks';
import { LoadingButton } from '@mui/lab';
import { SHARED_ROUTES } from '@myapp/shared/constants';
import { useBrowseSubscriptionPlanApi } from '@myapp/shared/views/price-and-plan-view/api/use-browse-subscription-plan-api';
import { ActionType } from '../../types';
import * as Styled from './styles';
import * as SX from './sx';
import type { StepOneProps as Props } from './types';

export const StepOne = memo(
  ({ className, plan, onNext, actionType }: Props) => {
    const { data: currentSub } = useCurrentSubscriptionApi();
    const immediatelyApi = useUpgradePlanMutationApi(
      SubscriptionActiveAction.IMMEDIATELY
    );
    const scheduleApi = useUpgradePlanMutationApi(
      SubscriptionActiveAction.SCHEDULE
    );

    const dialogState = useDialogContext();

    const queryQlient = useQueryClient();

    const nowLoading = useBoolean();
    const scheduleLoading = useBoolean();

    const handleDowngradeScheduled = () => {
      scheduleLoading.onTrue();
      scheduleApi
        .mutateAsync({
          plan: plan?.id,
        })
        .then((data) => {
          queryQlient
            .invalidateQueries([
              useBrowseSubscriptionPlanApi.name,
              useCurrentSubscriptionApi.name,
            ])
            .then(() => {
              scheduleLoading.onFalse();
            });
          onNext();
        });
    };

    const handleDowngradeNow = () => {
      nowLoading.onTrue();
      immediatelyApi
        .mutateAsync({
          plan: plan?.id,
          redirect: {
            success: window.origin + SHARED_ROUTES.billingStatusSuccess,
            failed: window.origin + SHARED_ROUTES.billingStatusCancel,
          },
        })
        .then((data) => {
          window.location.href = data.url;
          nowLoading.onFalse();
        });
    };

    const dialogType =
      actionType === ActionType.DOWNGRADE ? 'Downgrade' : 'Upgrade';

    return (
      <DialogLayout dialogType={DialogType.UPGRADE}>
        <Styled.Wrapper
          className={classnames('StepOne', className)}
          sx={SX.root}
        >
          <Stack gap={6}>
            <Stack gap={3}>
              <Typography sx={SX.title}>
                Choose Your {dialogType} Timing
              </Typography>
              <Typography sx={SX.description}>
                Would you like to {dialogType} your plan immediately or at the
                start of your next billing cycle for your current package?
              </Typography>
              <Typography sx={SX.description}>
                {dialogType.replace('e', 'ing')} now provides instant access to
                new features.
              </Typography>
              <Typography sx={SX.description}>
                If you prefer to {dialogType} later, the changes will take
                effect on your current package`s next billing date, which is
                <Typography component="span" fontWeight="bold">
                  {' '}
                  {fDate(currentSub?.current?.currentPeriodEnd)}
                </Typography>
                .
              </Typography>
            </Stack>
            <Stack gap={2} sx={SX.btnWrapper}>
              <LoadingButton
                variant="contained"
                color="primary"
                sx={SX.confirmBtn}
                onClick={handleDowngradeNow}
                loading={nowLoading.value}
              >
                {dialogType} Now
              </LoadingButton>
              <LoadingButton
                variant="outlined"
                color="inherit"
                sx={SX.cancelBtn}
                onClick={handleDowngradeScheduled}
                loading={scheduleLoading.value}
              >
                {dialogType} at Next Billing Cycle
              </LoadingButton>
              <Button variant="text" onClick={dialogState.onFalse}>
                Cancel
              </Button>
            </Stack>
          </Stack>
        </Styled.Wrapper>
      </DialogLayout>
    );
  }
);

StepOne.displayName = 'StepOne';
