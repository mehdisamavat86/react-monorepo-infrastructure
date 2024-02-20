import type { First } from '@myapp/shared/definition';
import type { YupFormData } from '@myapp/shared/utils/yup';
import type { NonUndefined } from 'react-hook-form';
import { schema } from './config';

export interface AddMemberFormProps {
  className?: string;
}

export interface AddMemberFormContentProps {
  className?: string;
  loading: boolean;
}

export type AddMemberFormData = YupFormData<typeof schema>;

export type MemberFields = First<NonUndefined<AddMemberFormData['members']>>;
