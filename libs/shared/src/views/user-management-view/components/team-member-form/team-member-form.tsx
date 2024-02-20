import { RHFTextField, UserRoleDropdown } from '@myapp/shared/components';
import { classnames } from '@myapp/shared/utils';
import { Box } from '@mui/material';
import { memo } from 'react';
import * as Styled from './styles';
import type { TeamMemberFormProps as Props } from './types';

export const TeamMemberForm = memo(({ className }: Props) => {
  return (
    <Styled.Wrapper className={classnames('TeamMemberForm', className)}>
      <Box
        rowGap={3}
        columnGap={2}
        display="grid"
        gridTemplateColumns={{
          xs: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
        }}
      >
        <RHFTextField name="user.firstName" label="First Name" />
        <RHFTextField name="user.lastName" label="Last Name" />
      </Box>

      <Box rowGap={3} columnGap={2} display="grid">
        <UserRoleDropdown name="type" label="Role" withoutOwner />
      </Box>
    </Styled.Wrapper>
  );
});

TeamMemberForm.displayName = 'TeamMemberForm';
