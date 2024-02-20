import { classnames } from '@myapp/shared/utils';
import { memo } from 'react';
import { Header } from '../header';
import { config } from './config';
import * as Styled from './styles';
import type { InvoiceTableProps as Props } from './types';

export const InvoiceTable = memo(({ className }: Props) => {
  return (
    <Styled.Wrapper className={classnames('InvoiceTable', className)}>
      <Header />
      <Styled.Table config={config} />
    </Styled.Wrapper>
  );
});

InvoiceTable.displayName = 'InvoiceTable';
