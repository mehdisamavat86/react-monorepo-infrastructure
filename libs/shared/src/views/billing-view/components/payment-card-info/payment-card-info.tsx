import { StyledTag } from '@myapp/shared/components';
import { classnames } from '@myapp/shared/utils';
import { memo } from 'react';
import * as Styled from './styles';
import type { PaymentCardInfoProps as Props } from './types';

export const PaymentCardInfo = memo(({ className, item }: Props) => {
  return (
    <Styled.Wrapper className={classnames('PaymentCardInfo', className)}>
      <Styled.CardTile>
        <Styled.CardIcon />

        <StyledTag color="primary">
          — Expires {item?.expMonth}/
          {item?.expYear.toString().substring(2, 4).trim()}
        </StyledTag>
      </Styled.CardTile>
      <Styled.CardNumber>**** **** **** {item?.last4}</Styled.CardNumber>
    </Styled.Wrapper>
  );
});

PaymentCardInfo.displayName = 'PaymentCardInfo';
