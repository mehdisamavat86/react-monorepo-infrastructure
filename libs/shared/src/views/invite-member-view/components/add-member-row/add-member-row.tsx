import { Icon } from '@myapp/shared/components';
import { classnames } from '@myapp/shared/utils';
import { memo } from 'react';
import { useFormContext } from 'react-hook-form';
import { EMPTY_MEMBER_DATA } from '../../constants';
import * as Styled from './styles';
import type { AddMemberRowProps as Props } from './types';

export const AddMemberRow = memo(
  ({ className, onAppend, loading, ...props }: Props) => {
    const handleAddNewRow = () => onAppend(EMPTY_MEMBER_DATA);
    const form = useFormContext();

    return (
      <Styled.Wrapper
        className={classnames('AddMemberRow', className)}
        disabled={!form.formState.isValid || loading}
        variant="outlined"
        {...props}
        onClick={handleAddNewRow}
      >
        <Icon name="plus" /> Add More
      </Styled.Wrapper>
    );
  }
);

AddMemberRow.displayName = 'AddMemberRow';
