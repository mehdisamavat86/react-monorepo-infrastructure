import { DashboardLayoutContent } from '@myapp/shared/layouts/dashboard';
import { BillingChangeAddress } from './components/billing-change-address';
import { BillingInformation } from './components/billing-information';
import { PaymentCard } from './components/payment-card';
import { InvoiceTable } from './features/invoice-table';

export function BillingView() {
  return (
    <DashboardLayoutContent title="Billing information" contentSx={{ gap: 3 }}>
      <BillingChangeAddress />
      <BillingInformation />
      <PaymentCard />
      <InvoiceTable />
    </DashboardLayoutContent>
  );
}
