import { ConfirmDialogProps } from '@myapp/shared/components';
import { SHARED_ROUTES } from '@myapp/shared/constants';
import { SubscriptionInterval } from '@myapp/shared/definition';
import { useBoolean } from '@myapp/shared/hooks';
import { classnames, fCurrency } from '@myapp/shared/utils';
import { Button } from '@mui/material';
import { memo } from 'react';
import { useUpgradePlanMutationApi } from '../../api/use-upgrade-plan-mutation-api';
import { Thin } from '../../styles';
import * as Styled from './styles';
import type { UpgradePlanProps as Props } from './types';
import { SubscriptionActiveAction } from '../../api/types';

export const UpgradePlan = memo(({ className, item, config }: Props) => {
  const loading = useBoolean();
  const mul = item.interval === SubscriptionInterval.yearly ? 1 : 12;
  const api = useUpgradePlanMutationApi(SubscriptionActiveAction.IMMEDIATELY);

  const handleSubmit: ConfirmDialogProps['onOk'] = (e) => {
    loading.onTrue();
    api
      .mutateAsync({
        plan: item.id,
        redirect: {
          success: window.origin + SHARED_ROUTES.billingStatusSuccess,
          failed: window.origin + SHARED_ROUTES.billingStatusCancel,
        },
      })
      .then((data) => {
        window.location.href = data.url;
        loading.onFalse();
        e.toggle();
      });
  };

  const amount = item.amount / 100;

  return (
    <Styled.Wrapper
      loading={loading.value}
      className={classnames('UpgradePlan', className)}
      title={config.title}
      icon={config.icon}
      okTitle={config.icon ? 'Active' : false}
      cancelTitle="Close"
      okProps={{ color: 'primary', variant: 'contained' }}
      content="Are you sure you want to cancel?"
      uncontrolledElement={
        <Button
          variant={config.variant}
          color={config.color}
          fullWidth
          sx={{ gap: '6px' }}
        >
          {config.buttonTitle}
        </Button>
      }
      onOk={handleSubmit}
    >
      <Styled.TextField
        fullWidth
        name="upgrade"
        label={fCurrency(amount)}
        defaultValue="/ Month"
        variant="filled"
        InputProps={{
          readOnly: true,
          endAdornment: (
            <Styled.Credit>{item.metadata.request} Credits</Styled.Credit>
          ),
        }}
      />

      <Styled.Description>
        {fCurrency(amount * mul)} <Thin>/ Year</Thin>
      </Styled.Description>
    </Styled.Wrapper>
  );
});

UpgradePlan.displayName = 'UpgradePlan';
