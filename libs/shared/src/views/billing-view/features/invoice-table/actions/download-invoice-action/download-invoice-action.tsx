import { Icon } from '@myapp/shared/components';
import { InvoiceStatus } from '@myapp/shared/definition';
import { classnames } from '@myapp/shared/utils/class-names';
import { memo } from 'react';
import * as Styled from './styles';
import type { DownloadInvoiceActionProps as Props } from './types';

export const DownloadInvoiceAction = memo(({ className, item }: Props) => {
  if (item.status !== InvoiceStatus.paid) return null;

  return (
    <Styled.Wrapper
      className={classnames('DownloadInvoiceAction', className)}
      to={item.hostedInvoiceUrl}
      target="_blank"
      download
    >
      PDF <Icon name="file-download" />
    </Styled.Wrapper>
  );
});

DownloadInvoiceAction.displayName = 'DownloadInvoiceAction';
