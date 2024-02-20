import { useDialogContext } from '@myapp/shared/views/price-and-plan-view/context';
import DialogLayout from '@myapp/shared/views/price-and-plan-view/components/dialog-layout/dialog-layout';
import { DialogType } from '@myapp/shared/views/price-and-plan-view/components/dialog-layout/type';
import { Button, Stack, Typography } from '@mui/material';
import { classnames } from '@myapp/shared/utils';
import { memo } from 'react';
import * as Styled from './styles';
import * as SX from './sx';
import type { StepTwoProps as Props } from './types';

export const StepTwo = memo(({ className, plan }: Props) => {
  const dialogState = useDialogContext();

  return (
    <DialogLayout dialogType={DialogType.SUCCESS}>
      <Styled.Wrapper className={classnames('StepTwo', className)} sx={SX.root}>
        <Stack gap={5}>
          <Stack gap={3}>
            <Typography sx={SX.title}>
              You`re Staying on the {plan.nickname} Plan
            </Typography>
            <Typography sx={SX.description}>
              Great! Your upgrade has been canceled.{' '}
            </Typography>
            <Typography sx={SX.description}>
              You will continue to enjoy all the benefits of the {plan.nickname}{' '}
              plan.
            </Typography>
            <Typography sx={SX.description}>
              Your subscription and billing remain unchanged.
            </Typography>
          </Stack>
          <Button
            variant="outlined"
            color="inherit"
            sx={SX.cancelBtn}
            onClick={dialogState.onFalse}
          >
            Close
          </Button>
        </Stack>
      </Styled.Wrapper>
    </DialogLayout>
  );
});

StepTwo.displayName = 'StepTwo';
