import {
  Accordion,
  ReloadButton,
  SkeletonList,
} from '@myapp/shared/components';
import { classnames } from '@myapp/shared/utils';
import { useTheme } from '@mui/material/styles';
import { memo } from 'react';
import { useBrowsePaymentCardApi } from '../../api/use-browse-payment-card-api';
import { PaymentCardInfo } from '../payment-card-info';
import { RemovePaymentCard } from '../remove-payment-card';
import * as Styled from './styles';
import type { PaymentCardProps as Props } from './types';

export const PaymentCard = memo(({ className }: Props) => {
  const theme = useTheme();
  const { data, isError, isLoading, refetch } = useBrowsePaymentCardApi();

  return (
    <Styled.Wrapper className={classnames('PaymentCard', className)}>
      <Accordion
        title="Payment Card"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          gap: theme.spacing(4),
          p: theme.spacing(5),
        }}
      >
        {data && data?.length
          ? data?.map((x) => (
              <Styled.Content key={x.id}>
                <PaymentCardInfo item={x.card} />
                <RemovePaymentCard item={x} />
              </Styled.Content>
            ))
          : 'No Payment Card'}

        {isLoading && (
          <SkeletonList
            count={[
              { variant: 'text', height: 100, width: 200 },
              { variant: 'text', height: 64, width: 75 },
            ]}
            sx={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
            }}
          />
        )}

        {isError && <ReloadButton onReload={refetch} />}
      </Accordion>
    </Styled.Wrapper>
  );
});

PaymentCard.displayName = 'PaymentCard';
