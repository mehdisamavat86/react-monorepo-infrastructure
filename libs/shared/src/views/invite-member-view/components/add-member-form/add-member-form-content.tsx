import { classnames } from '@myapp/shared/utils';
import { memo } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { AddMemberRow } from '../add-member-row';
import { MemberRow } from '../member-row';
import * as Styled from './styles';
import type { AddMemberFormContentProps as Props } from './types';

export const AddMemberFormContent = memo(({ className, loading }: Props) => {
  const form = useFormContext();
  const members = useFieldArray({
    name: 'members',
    control: form.control,
  });

  return (
    <Styled.Content className={classnames('AddMemberFormContent', className)}>
      <Styled.AddMemberRow>
        {members.fields.map(({ id }, index) => (
          <MemberRow
            index={index}
            key={id}
            remove={members.fields.length > 1 && members.remove}
          />
        ))}
      </Styled.AddMemberRow>

      {members.fields.length < 15 && (
        <AddMemberRow loading={loading} onAppend={members.append} />
      )}
    </Styled.Content>
  );
});

AddMemberFormContent.displayName = 'AddMemberFormContent';
