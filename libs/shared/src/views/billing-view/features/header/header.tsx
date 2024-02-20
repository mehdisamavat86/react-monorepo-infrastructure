import { useAuthContext } from '@myapp/shared/auth';
import { ReloadButton, SkeletonList } from '@myapp/shared/components';
import { classnames } from '@myapp/shared/utils';
import { useTheme } from '@mui/material/styles';
import { memo } from 'react';
import { useReadCustomerApi } from '../../api/use-read-customer-api';
import * as Styled from './styles';
import type { HeaderProps as Props } from './types';

export const Header = memo(({ className }: Props) => {
  const theme = useTheme();
  const { user } = useAuthContext();
  const { data, isLoading, isError, refetch } = useReadCustomerApi(user?.id);

  return (
    <Styled.Wrapper className={classnames('Header', className)}>
      {data && (
        <Styled.Content>
          <Styled.Title>Invoices</Styled.Title>

          <Styled.Description>
            The invoices are sent to <b>{data?.email}</b>
          </Styled.Description>
        </Styled.Content>
      )}

      {isLoading && (
        <SkeletonList
          count={[
            { variant: 'text', width: 100 },
            { variant: 'text', width: 240 },
          ]}
          sx={{ flexDirection: 'column', gap: 1, padding: theme.spacing(3) }}
        />
      )}

      {isError && <ReloadButton onReload={refetch} />}
    </Styled.Wrapper>
  );
});

Header.displayName = 'Header';
