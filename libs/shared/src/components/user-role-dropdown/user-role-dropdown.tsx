import { classnames } from '@myapp/shared/utils';
import { capitalize } from 'lodash-es';
import { memo } from 'react';
import {
  USER_MEMBER_OPTIONS,
  USER_MEMBER_OPTIONS_WITHOUT_OWNER,
} from './config';
import * as Styled from './styles';
import type { UserRoleDropdownProps as Props } from './types';

export const UserRoleDropdown = memo(
  ({ className, placeholder, label, name, withoutOwner, ...props }: Props) => {
    return (
      <Styled.Wrapper
        className={classnames('UserRoleDropdown', className)}
        name={name || 'user'}
        label="Role"
        placeholder={label || 'User'}
        options={
          withoutOwner ? USER_MEMBER_OPTIONS_WITHOUT_OWNER : USER_MEMBER_OPTIONS
        }
        getOptionLabel={(x) => capitalize(x as string)}
        {...props}
      />
    );
  }
);

UserRoleDropdown.displayName = 'UserRoleDropdown';
