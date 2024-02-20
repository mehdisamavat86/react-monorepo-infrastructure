import {
  ConfirmDialog,
  ConfirmDialogProps,
  DateTime,
} from '@myapp/shared/components';
import { SubscriptionStatus as Status } from '@myapp/shared/definition';
import { useBoolean } from '@myapp/shared/hooks';
import { classnames, fDateAdd } from '@myapp/shared/utils';
import { Button } from '@mui/material';
import { memo, useState } from 'react';
import { useCancelSubscriptionMutationApi } from '../../api/use-cancel-subscription-mutation-api';
import {
  CancelSubscriptionReasonList,
  ReasonDataWithValidity,
} from '../cancel-subscription-reason-list';
import { CANCEL_SUBSCRIPTION_DEFAULT_VAL as DEFAULT_VAL } from './config';
import * as Styled from './styles';
import type { CancelSubscriptionProps as Props } from './types';

export const CancelSubscription = memo(({ className, item }: Props) => {
  const api = useCancelSubscriptionMutationApi(item && item?.current?.id);
  const showButton =
    item &&
    item.current?.status !== Status.CANCELED &&
    item.current?.plan?.amount !== 0;
  const dialog1 = useBoolean();
  const dialog2 = useBoolean();
  const [value, setValue] = useState<ReasonDataWithValidity>(DEFAULT_VAL);

  const handleOk: ConfirmDialogProps['onOk'] = (e) => {
    api
      .mutateAsync({
        feedback: value.reason!,
        comment: value.description,
      })
      .then(() => {
        e.toggle();
        dialog2.onTrue();
      });
  };

  return (
    <Styled.Wrapper className={classnames('CancelSubscription', className)}>
      <ConfirmDialog
        headerSx={{ borderColor: 'divider' }}
        title="Cancel my paid subscription"
        okTitle="Yes, Cancel"
        cancelTitle="No, go back"
        cancelProps={{ color: 'primary', variant: 'contained' }}
        content="Are you sure you want to cancel?"
        contentSx={{ py: 2 }}
        actionsSx={{ borderColor: 'divider', flexDirection: 'row-reverse' }}
        uncontrolledElement={
          showButton && (
            <Button variant="text" color="error">
              Cancel
            </Button>
          )
        }
        onOk={(e) => {
          e.toggle();
          dialog1.onTrue();
        }}
      />

      <ConfirmDialog
        state={dialog1}
        headerSx={{ borderColor: 'divider' }}
        title="We value your feedback. Why are you cancelling?"
        okTitle="Confirm cancelation"
        okProps={{ disabled: !value.isValid }}
        cancelTitle="No, go back"
        cancelProps={{ color: 'primary', variant: 'contained' }}
        actionsSx={{ justifyContent: 'center', flexDirection: 'row-reverse' }}
        onOk={handleOk}
      >
        <CancelSubscriptionReasonList value={value} onChange={setValue} />
      </ConfirmDialog>

      <ConfirmDialog
        headerSx={{ borderColor: 'divider' }}
        state={dialog2}
        title="Your subscription was canceled"
        titleSx={{ textAlign: 'center', px: 2 }}
        okTitle={false}
        cancelTitle="Got it"
        cancelProps={{ variant: 'text' }}
        content={
          <>
            Your plan is active until{' '}
            <DateTime
              value={
                fDateAdd(item?.current?.currentPeriodStart || '', {
                  years: 1,
                }) ?? 0
              }
              noTime
            />
            .
            <br />
            Thanks for using AI elephant!
          </>
        }
        contentSx={{ textAlign: 'center' }}
        actionsSx={{ borderColor: 'divider', justifyContent: 'center' }}
      />
    </Styled.Wrapper>
  );
});

CancelSubscription.displayName = 'CancelSubscription';
