import type { Invoice } from '@myapp/shared/definition';
import type { AdvanceTableActionProps } from '@myapp/shared/features';

export interface DownloadInvoiceActionProps
  extends AdvanceTableActionProps<Invoice> {
  className?: string;
}
