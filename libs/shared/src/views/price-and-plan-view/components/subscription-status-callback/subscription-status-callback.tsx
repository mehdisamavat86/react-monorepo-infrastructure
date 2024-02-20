import { StatusCircle } from '@myapp/shared/components';
import { useDebounceFn } from '@myapp/shared/hooks';
import { useRedirect, useSearchParams } from '@myapp/shared/router';
import { classnames } from '@myapp/shared/utils';
import { Button } from '@mui/material';
import { memo } from 'react';
import { useBrowseSubscriptionPlanApi } from '../../api/use-browse-subscription-plan-api';
import * as Styled from './styles';
import type { SubscriptionStatusCallbackProps as Props } from './types';

export const SubscriptionStatusCallback = memo(
  ({ className, redirectRoute, status }: Props) => {
    const { refetch } = useBrowseSubscriptionPlanApi();
    const isSuccess = status === 'success';

    const { session_id: sessionId } = useSearchParams();
    const redirect = useRedirect();

    const handleRedirectBilling = useDebounceFn(() => {
      refetch();
      redirect(redirectRoute);
    }, 1000);
    return (
      <Styled.Wrapper
        className={classnames('SubscriptionStatusCallback', className)}
      >
        <Styled.Title success={isSuccess}>
          {isSuccess ? 'Payment Successful' : 'Payment Failed'}
        </Styled.Title>

        <StatusCircle success={isSuccess} />

        <Styled.Text success={isSuccess}>
          {isSuccess
            ? 'Your payment was successful'
            : 'Your payment has been Failed'}

          <Styled.SessionNumber>
            <span>Session:</span>

            <b>
              {sessionId}
              <Styled.Copy value={sessionId as string} />
            </b>
          </Styled.SessionNumber>
        </Styled.Text>

        <Button variant="outlined" onClick={handleRedirectBilling}>
          Go to Price And Plan
        </Button>
      </Styled.Wrapper>
    );
  }
);

SubscriptionStatusCallback.displayName = 'SubscriptionStatusCallback';
