import { InvoiceStatus } from '@myapp/shared/definition';
import { useBrowseInvoiceApi } from '@myapp/shared/views/billing-view/api/use-browse-invoice-api';
import { SHARED_ROUTES } from '@myapp/shared/constants';
import { classnames } from '@myapp/shared/utils';
import { memo } from 'react';
import * as Styled from './styles';
import * as SX from './sx';
import type { PaymentBarProps as Props } from './types';

export const PaymentBar = memo(({ className }: Props) => {
  const { data } = useBrowseInvoiceApi({ size: 1, page: 0 });

  if (data?.content[0]?.status !== InvoiceStatus.incomplete) return null;

  return (
    <Styled.Wrapper
      className={classnames('PaymentBar', className)}
      sx={SX.root}
      severity="error"
      icon={false}
    >
      Payment failed !
      <Styled.CheckBilling to={SHARED_ROUTES.billing}>
        <b>Check your Billing</b>
      </Styled.CheckBilling>
    </Styled.Wrapper>
  );
});

PaymentBar.displayName = 'PaymentBar';
