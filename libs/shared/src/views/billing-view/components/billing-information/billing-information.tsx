import { useWorkspace } from '@myapp/shared/workspace';
import { useAuthContext } from '@myapp/shared/auth';
import {
  Accordion,
  CountryListDropdown,
  RHFTextField,
  ReloadButton,
  SkeletonList,
} from '@myapp/shared/components';
import { useNotify } from '@myapp/shared/hooks';
import { classnames, repeat } from '@myapp/shared/utils';
import { YupFormData } from '@myapp/shared/utils/yup';
import { memo } from 'react';
import { useEditCustomerMutationApi } from '../../api/use-edit-customer-mutation-api';
import { useReadCustomerApi } from '../../api/use-read-customer-api';
import { BillingInformationInput } from './billing-information-input';
import { config, scheme } from './config';
import * as Styled from './styles';
import type { BillingInformationProps as Props } from './types';

export const BillingInformation = memo(({ className }: Props) => {
  const notify = useNotify();
  const workspaceId = useWorkspace()?.id;

  const {
    data: item,
    isError,
    isLoading,
    refetch,
  } = useReadCustomerApi(workspaceId || '');

  const api = useEditCustomerMutationApi(workspaceId || '');

  const onSubmitBase = (data: YupFormData<typeof scheme>) => {
    api
      .mutateAsync({
        ...item!,
        address: data.address,
      })
      .then(() => {
        notify.success('The changes were successfully saved');
      })
      .catch(() => {
        notify.error(
          'There was an error saving the changes. Please try again.'
        );
      });
  };

  return (
    <Styled.Wrapper className={classnames('BillingInformation', className)}>
      <Accordion title="Billing information" sx={{ p: '40px' }}>
        {item && (
          <Styled.FormWrapper
            {...config}
            defaultValues={item}
            loading={api.isLoading}
            onSubmit={onSubmitBase}
          >
            <BillingInformationInput name="name" label="Company Name" />

            <BillingInformationInput
              name="address.line1"
              label="Address Line 1"
            />
            <BillingInformationInput
              name="address.line2"
              label="Address Line 2"
            />
            <BillingInformationInput
              name="address.postalCode"
              label="Postal Code"
            />
            <BillingInformationInput name="address.city" label="City" />
            <BillingInformationInput
              name="address.country"
              label="Country"
              element={CountryListDropdown}
              extra={{ noLabel: true }}
            />
            <BillingInformationInput
              name="additional"
              label="Additional information"
              element={RHFTextField}
              extra={{
                placeholder:
                  'Information to display on the invoices, like the VAT number',
                multiline: true,
                rows: 4,
              }}
            />
          </Styled.FormWrapper>
        )}

        {isLoading && (
          <SkeletonList
            count={repeat({ variant: 'rounded', height: 48 }, 6).concat([
              { variant: 'rounded', height: 100 },
              { variant: 'rounded', width: 130, height: 40 },
            ])}
            sx={{ flexDirection: 'column', gap: 1 }}
          />
        )}

        {isError && <ReloadButton onReload={refetch} />}
      </Accordion>
    </Styled.Wrapper>
  );
});

BillingInformation.displayName = 'BillingInformation';
