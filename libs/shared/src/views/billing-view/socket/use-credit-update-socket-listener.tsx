import { Credit, VoidFunc } from '@myapp/shared/definition';
import { baseQueryClient } from '@myapp/shared/http/base-query-client';
import { useSocketEvent } from '@myapp/shared/socket';
import { useState } from 'react';
import { CurrentSubscriptionResponse } from '../../price-and-plan-view/api/types';
import { useCurrentSubscriptionApi } from '../../price-and-plan-view/api/use-current-subscription-api';

type DataType = Credit;

export function useCreditUpdateSocketListener(cb?: VoidFunc<DataType>) {
  const [result, setResult] = useState<DataType | undefined>();

  useSocketEvent<DataType>(
    '/payment-management/um/customers/{customer}/credits',
    (credit) => {
      setResult(credit);
      cb?.(credit);

      const oldData = baseQueryClient.getQueryData<CurrentSubscriptionResponse>(
        [useCurrentSubscriptionApi.name]
      );
      if (oldData) {
        baseQueryClient.setQueryData([useCurrentSubscriptionApi.name], {
          ...oldData,
          credit,
        });
      }
    }
  );

  return result;
}
