import {
  DateTime,
  LabelColor,
  StyledTag,
  TextEllipsis,
} from '@myapp/shared/components';
import {
  Invoice,
  InvoiceStatus,
  SubscriptionInterval,
} from '@myapp/shared/definition';
import { AdvanceTableConfig } from '@myapp/shared/features';
import { Stack } from '@mui/material';
import { useBrowseInvoiceApi } from '../../api/use-browse-invoice-api';
import { DownloadInvoiceAction } from './actions/download-invoice-action';

const stateColor: { [key: string]: LabelColor } = {
  [InvoiceStatus.draft]: 'primary',
  [InvoiceStatus.uncollectible]: 'error',
  [InvoiceStatus.paid]: 'success',
};

export const config: AdvanceTableConfig<Invoice> = {
  hideColumnsOnNoData: true,
  columns: [
    {
      id: 'id',
      label: 'Invoice ID',
      width: 500,
      render: (v) => <TextEllipsis value={v} w="25vw" />,
    },
    {
      id: 'created',
      label: 'Payment Date',
      align: 'center',
      render: (v) => (
        <Stack justifyContent="center" direction="row">
          <DateTime value={v} noTime />
        </Stack>
      ),
    },
    {
      id: 'total',
      label: 'Total Price',
      align: 'center',
      width: 100,
      render: (v) => `$${v / 100}`,
    },
    {
      id: 'startingBalance',
      label: 'Subscription',
      align: 'center',
      render: (_, v) =>
        (v.subscription &&
        v.subscription?.current?.plan?.interval === SubscriptionInterval.yearly
          ? 'Yearly'
          : 'Monthly') || 'N/A',
    },
    {
      id: 'status',
      label: 'Status',
      align: 'center',
      width: 130,
      render: (v) => (
        <StyledTag color={stateColor[v]} fullWidth>
          {v}
        </StyledTag>
      ),
    },
  ],
  actions: [DownloadInvoiceAction],
  actionsConfig: { label: 'Download' },
  filters: [],
  browseApi: useBrowseInvoiceApi,
};
