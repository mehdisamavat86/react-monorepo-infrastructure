import {
  IconButton,
  RHFTextField,
  UserRoleDropdown,
} from '@myapp/shared/components';
import { classnames } from '@myapp/shared/utils';
import { memo } from 'react';
import * as Styled from './styles';
import type { MemberRowProps as Props } from './types';

export const MemberRow = memo(({ className, index, remove }: Props) => {
  const row = `members[${index}]`;

  return (
    <Styled.Wrapper className={classnames('MemberRow', className)}>
      <RHFTextField name={`${row}.firstName`} label="First Name" />
      <RHFTextField name={`${row}.lastName`} label="Last Name" />
      <RHFTextField type="email" name={`${row}.username`} label="Email" />
      <UserRoleDropdown
        name={`${row}.type`}
        label="Role"
        withoutOwner
        sx={{
          minWidth: '130px',
        }}
      />
      {remove && (
        <IconButton
          icon="delete"
          color="error"
          size="small"
          sx={{ width: '2em' }}
          onClick={() => remove(index)}
        />
      )}
    </Styled.Wrapper>
  );
});

MemberRow.displayName = 'MemberRow';
