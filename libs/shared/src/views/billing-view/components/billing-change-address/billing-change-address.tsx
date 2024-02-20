import { useWorkspace } from '@myapp/shared/workspace';
import { useAuthContext } from '@myapp/shared/auth';
import {
  CustomPopover,
  PopoverActionEvent,
  ReloadButton,
  SkeletonList,
} from '@myapp/shared/components';
import { useNotify } from '@myapp/shared/hooks';
import { classnames, repeat } from '@myapp/shared/utils';
import { memo, useState } from 'react';
import { string as stringTest } from 'yup';
import { useEditCustomerMutationApi } from '../../api/use-edit-customer-mutation-api';
import { useReadCustomerApi } from '../../api/use-read-customer-api';
import * as Styled from './styles';
import type { BillingChangeAddressProps as Props } from './types';

export const BillingChangeAddress = memo(({ className }: Props) => {
  const notify = useNotify();
  const workspaceId = useWorkspace()?.id;
  const { data, isError, isLoading, refetch } = useReadCustomerApi(
    workspaceId || ''
  );
  const [email, setEmail] = useState('');
  const isValidEmail = stringTest().email().required().isValidSync(email);
  const api = useEditCustomerMutationApi(workspaceId || '');

  const handleSubmit: PopoverActionEvent = (e) => {
    api
      .mutateAsync({
        ...data!,
        email,
      })
      .then(() => {
        notify.success('Email changed successfully');
        e.onClose();
        setEmail('');
      });
  };

  return (
    <Styled.Wrapper className={classnames('BillingChangeAddress', className)}>
      {data && (
        <>
          <Styled.Start>
            <Styled.Title>Billing Sent to</Styled.Title>
            <Styled.CurrentEmailInput
              name="email"
              label="Email"
              value={data?.email || 'email@domain.com'}
              variant="filled"
            />
          </Styled.Start>

          <CustomPopover
            title="Send to new address"
            titleSx={{ border: 'none', pb: 0 }}
            element={
              <Styled.ChangeEmailButton variant="outlined">
                Change<span>Address</span>
              </Styled.ChangeEmailButton>
            }
            actions={[
              {
                variant: 'text',
                color: 'primary',
                disabled: !isValidEmail || api.isLoading,
                fullWidth: true,
                onClick: handleSubmit,
                children: 'Save',
              },
            ]}
          >
            <Styled.PopoverInput
              value={email}
              placeholder={data?.email || 'email@domain.com'}
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
          </CustomPopover>
        </>
      )}

      {isLoading && (
        <SkeletonList
          count={repeat({ variant: 'text', height: 64, width: 120 }, 3)}
          sx={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
          }}
        />
      )}

      {isError && <ReloadButton onReload={refetch} />}
    </Styled.Wrapper>
  );
});

BillingChangeAddress.displayName = 'BillingChangeAddress';
