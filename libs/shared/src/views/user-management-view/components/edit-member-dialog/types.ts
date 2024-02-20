import type { YupFormData } from '@myapp/shared/utils/yup';
import type { MemberTableActionDialogProps } from '../../types';
import { scheme } from './config';

export interface EditMemberDialogProps extends MemberTableActionDialogProps {
  className?: string;
}

export type EditMemberFormData = YupFormData<typeof scheme>;
