import { mergeUserData, useAuthContext } from '@myapp/shared/auth';
import { RHFTextField } from '@myapp/shared/components';
import { useNotify } from '@myapp/shared/hooks';
import { classnames, resetFormDefaultValues } from '@myapp/shared/utils';
import { YupFormData } from '@myapp/shared/utils/yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { memo, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useUserEditMutationApi } from '../../hooks/use-user-edit-mutation-api';
import { config } from './config';
import * as Styled from './styles';
import type { ChangeUsernameProps as Props } from './types';

export const ChangeUsername = memo(({ className }: Props) => {
  const notify = useNotify();
  const api = useUserEditMutationApi();
  const { user, setUser } = useAuthContext();

  const methods = useForm({
    resolver: yupResolver(config.scheme),
  });
  const { handleSubmit } = methods;

  const onSubmitBase = handleSubmit(
    (data: YupFormData<typeof config.scheme>) => {
      api.mutateAsync(mergeUserData(user, data)).then((res) => {
        setUser(res);
        notify.success('successfully updated');
      });
    }
  );

  useEffect(() => {
    if (user) resetFormDefaultValues(methods, user);
  }, [methods, user]);

  return (
    <Styled.Wrapper
      className={classnames('ChangeUsername', className)}
      methods={methods}
      onSubmit={onSubmitBase}
    >
      <Styled.UsernameWrapper>
        <Styled.UsernameStartWrapper>
          <RHFTextField name="firstName" label="First Name" />
          <RHFTextField name="lastName" label="Last Name" />
          <RHFTextField name="attributes.title" label="Title" />
        </Styled.UsernameStartWrapper>
        <Styled.UsernameEndWrapper>
          <Styled.SubmitButton
            type="submit"
            variant="contained"
            color="primary"
            size="medium"
            disabled={api.isLoading}
          >
            Save Changes
          </Styled.SubmitButton>
        </Styled.UsernameEndWrapper>
      </Styled.UsernameWrapper>
    </Styled.Wrapper>
  );
});

ChangeUsername.displayName = 'ChangeUsername';
