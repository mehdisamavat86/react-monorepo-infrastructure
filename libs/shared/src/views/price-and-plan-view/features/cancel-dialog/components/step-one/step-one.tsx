import { useDialogContext } from '@myapp/shared/views/price-and-plan-view/context';
import { LoadingButton } from '@mui/lab';
import { useCancelSubscription } from '@myapp/shared/views/price-and-plan-view/api/use-cancel-subscription';
import { Button, Stack, Typography } from '@mui/material';
import { DialogType } from '@myapp/shared/views/price-and-plan-view/components/dialog-layout/type';
import DialogLayout from '@myapp/shared/views/price-and-plan-view/components/dialog-layout/dialog-layout';
import { classnames } from '@myapp/shared/utils';
import { memo } from 'react';
import * as Styled from './styles';
import * as SX from './sx';
import type { StepOneProps as Props } from './types';

export const StepOne = memo(
  ({ className, nextPlanId, plan, onNext }: Props) => {
    const { mutateAsync, isLoading } = useCancelSubscription(nextPlanId);
    const dialogState = useDialogContext();

    const handleCancel = () => {
      mutateAsync({}).then(() => {
        onNext();
      });
    };

    return (
      <DialogLayout dialogType={DialogType.DOWNGRADE}>
        <Styled.Wrapper
          className={classnames('StepOne', className)}
          sx={SX.root}
        >
          <Stack gap={6}>
            <Stack gap={3}>
              <Typography sx={SX.title}>
                Cancel Your Upcoming Plan Change?
              </Typography>
              <Typography sx={SX.description}>
                You currently have an upcoming plan change scheduled.
              </Typography>
              <Typography sx={SX.description}>
                To proceed with your request, you first need to cancel your
                scheduled plan change.
              </Typography>
              <Typography sx={SX.description}>
                Do you want to cancel your upcoming plan change to{'  '}
                <Typography component="span" fontWeight="bold">
                  {plan?.nickname}
                </Typography>
                .
              </Typography>
            </Stack>
            <Stack gap={2} sx={SX.btnWrapper}>
              <LoadingButton
                variant="contained"
                color="primary"
                sx={SX.confirmBtn}
                onClick={handleCancel}
                loading={isLoading}
              >
                Yes, Cancel Upcoming Change
              </LoadingButton>
              <Button
                variant="outlined"
                color="inherit"
                sx={SX.cancelBtn}
                onClick={dialogState.onFalse}
              >
                No, Keep Upcoming Plan
              </Button>
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
